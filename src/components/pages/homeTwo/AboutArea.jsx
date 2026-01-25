import { Link } from "react-router-dom";
import { aboutAreaData } from "../../../data/homeTwoData";

export default function AboutArea() {
  const { image, section, stats, button } = aboutAreaData;

  return (
    <section className="ht-about-area section-padding fix">
      <div className="container">
        <div className="ht-about-wrapper">
          <div className="row align-items-lg-center g-5">
            {/* Left image */}
            <div className="col-lg-6 col-sm-12">
              <div
                className="ht-about-img ht-about-img-2 wow fadeInUp"
                data-wow-delay={image.delay}
              >
                <img src={image.src} alt={image.alt} />

                <div className="client-review float-bob-y">
                  <h2>
                    <span className="count">{image.review.count}</span>
                    {image.review.suffix}
                  </h2>
                  <p>{image.review.text}</p>
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="col-lg-6 col-sm-12">
              <div className="ht-about-content style-2">
                <div className="section-title">
                  <span className="subtitle wow fadeInUp" data-wow-delay=".2s">
                    {section.subtitle}
                  </span>

                  <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                    {section.title}
                  </h2>

                  <p>{section.desc}</p>
                </div>

                {/* Stats */}
                <div className="client-reviews">
                  {stats.map((item) => (
                    <div
                      key={item.id}
                      className="review-item wow fadeInUp"
                      data-wow-delay={item.delay}
                    >
                      <h2>
                        <span className="count">{item.count}</span>
                        {item.suffix}
                      </h2>
                      <p>{item.label}</p>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Link
                  to={button.link}
                  className="ht-btn style-3 wow fadeInUp"
                  data-wow-delay={button.delay}
                >
                  {button.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
