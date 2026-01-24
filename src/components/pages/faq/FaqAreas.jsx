import { faqAreaData } from "../../../data/faqData";
export default function FaqAreas() {
  const { image, subtitle, title, description, items } = faqAreaData;

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
                    <div
                      className="accordion-item wow fadeInUp"
                      data-wow-delay={item.delay}
                      key={item.id}
                    >
                      <h5 className="accordion-header">
                        <button
                          className={`accordion-button ${
                            !item.open ? "collapsed" : ""
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${item.id}`}
                          aria-expanded={item.open ? "true" : "false"}
                          aria-controls={item.id}
                        >
                          {item.question}
                        </button>
                      </h5>

                      <div
                        id={item.id}
                        className={`accordion-collapse collapse ${
                          item.open ? "show" : ""
                        }`}
                        data-bs-parent="#faqAccordion"
                      >
                        <div className="accordion-body">{item.answer}</div>
                      </div>
                    </div>
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
