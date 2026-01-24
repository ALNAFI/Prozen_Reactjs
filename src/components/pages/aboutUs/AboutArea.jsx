import { Link } from "react-router-dom";
import { aboutData } from "../../../data/aboutUsData";

export default function AboutArea() {
  const { image, subtitle, title, description, button } = aboutData;

  return (
    <section className="ht-about-area section-padding fix">
      <div className="container">
        <div className="ht-about-wrapper">
          <div className="row align-items-lg-center g-5">
            {/* Image */}
            <div className="col-lg-6 col-sm-12">
              <div className="ht-about-img wow fadeInUp" data-wow-delay=".3s">
                <img src={image} alt="about" />
              </div>
            </div>
            {/* Content */}
            <div className="offset-lg-1 col-lg-5 col-sm-12">
              <div className="ht-about-content">
                <div className="section-title">
                  <span className="subtitle wow fadeInUp" data-wow-delay=".2s">
                    {subtitle}
                  </span>
                  <h2 className="title wow fadeInUp" data-wow-delay=".5s">
                    {title}
                  </h2>
                  <p className="wow fadeIn" data-wow-delay=".8s">
                    {description}
                  </p>
                </div>
                <Link
                  to={button.link}
                  className="ht-btn style-3 wow fadeInUp"
                  data-wow-delay="1.1s"
                >
                  {button.label}
                </Link>
              </div>
            </div>
            {/* content end */}
          </div>
        </div>
      </div>
    </section>
  );
}
