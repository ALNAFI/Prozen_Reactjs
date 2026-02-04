import { useState } from "react";
import { faqAreaData } from "../../../data/faqData";

const AccordionItem = ({ item, isOpen, onToggle }) => {
  return (
    <div
      className="accordion-item wow fadeInUp"
      data-wow-delay={item.delay}
    >
      <h5 className="accordion-header">
        <button
          className={`accordion-button ${isOpen ? "" : "collapsed"}`}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={item.id}
        >
          {item.question}
        </button>
      </h5>

      <div
        id={item.id}
        className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
        style={{
          overflow: "hidden",
          maxHeight: isOpen ? "500px" : 0,
          transition: "max-height 0.35s ease",
        }}
      >
        <div className="accordion-body">{item.answer}</div>
      </div>
    </div>
  );
};

export default function FaqAreas() {
  const { image, subtitle, title, description, items } = faqAreaData;

  // Only one accordion item open at a time (Bootstrap-like behavior)
  const initialActiveId = items.find((item) => item.open)?.id || null;
  const [activeId, setActiveId] = useState(initialActiveId);

  const handleToggle = (id) => {
    setActiveId((current) => (current === id ? null : id));
  };

  return (
    <section className="ht-faq-area section-padding fix">
      <div className="container">
        <div className="ht-faq-wrapper">
          <div className="row gy-5">
            {/* Image */}
            <div className="col-xl-6 col-lg-6">
              <div className="ht-faq-thumb wow fadeInUp" data-wow-delay=".3s">
                <img src={image} alt="faq" />
              </div>
            </div>

            {/* Content */}
            <div className="col-xl-5 offset-xl-1 col-lg-6">
              <div className="ht-faq-content">
                <div className="section-title">
                  <span className="subtitle wow fadeInUp" data-wow-delay=".3s">
                    {subtitle}
                  </span>

                  <h2 className="title wow fadeInUp" data-wow-delay=".6s">
                    {title}
                  </h2>

                  <p className="wow fadeInUp" data-wow-delay=".9s">
                    {description}
                  </p>
                </div>

                {/* Accordion */}
                <div className="accordion" id="faqAccordion">
                  {items.map((item) => (
                    <AccordionItem
                      key={item.id}
                      item={item}
                      isOpen={activeId === item.id}
                      onToggle={() => handleToggle(item.id)}
                    />
                  ))}
                </div>
                {/* accordion end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
