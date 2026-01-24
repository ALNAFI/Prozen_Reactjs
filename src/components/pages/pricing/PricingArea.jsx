import { Link } from "react-router-dom";
import { pricingData } from "../../../data/pricingData";

export default function PricingArea() {
  const { section, plans } = pricingData;

  return (
    <section className="ht-price-area section-padding pb-0">
      <div className="container">
        <div className="ht-price-wrapper">
          <div className="row">
            {/* Left content */}
            <div className="col-lg-6">
              <div className="ht-price-content">
                <div className="section-title">
                  <span className="subtitle wow fadeInUp" data-wow-delay=".2s">
                    {section.subtitle}
                  </span>
                  <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                    {section.title}
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay=".6s">
                    {section.description}
                  </p>
                </div>
                <Link
                  to={section.button.link}
                  className="ht-btn style-2 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  {section.button.label}
                </Link>
              </div>
            </div>
            {/* Pricing cards */}
            <div className="col-lg-6">
              <div className="ht-price-item">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`single-item ${plan.style} wow fadeInUp`}
                    data-wow-delay={plan.delay}
                  >
                    <div className="left">
                      <span>{plan.name}</span>
                      <h2>
                        ${plan.price}
                        <span>/{plan.duration}</span>
                      </h2>
                      <Link to={plan.link} className="link">
                        Read more <i className="fa-solid fa-arrow-right" />
                      </Link>
                    </div>
                    <div className="right">
                      <ul className="price-details">
                        {plan.features.map((feature, i) => (
                          <li key={i}>
                            <i className="fa-solid fa-check" /> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* pricing end */}
          </div>
        </div>
      </div>
    </section>
  );
}
