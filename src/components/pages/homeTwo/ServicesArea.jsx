import { Link } from "react-router-dom";
import { servicesAreaData } from "../../../data/homeTwoData";

export default function ServicesArea() {
  const { section, mainThumb, services, slider } = servicesAreaData;

  return (
    <section className="ht-services-area pt-130 fix">
      <div className="container">
        {/* Section title */}
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <span className="subtitle wow fadeInUp" data-wow-delay=".2s">
                {section.subtitle}
              </span>
              <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                {section.title1} <br /> {section.title2}
              </h2>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="ht-services-wrapper-two">
          <div className="row">
            {/* Left thumb */}
            <div className="col-lg-4">
              <div
                className="ht-services-thumbs wow fadeInUp"
                data-wow-delay={mainThumb.delay}
              >
                <img src={mainThumb.image} alt="img" />
                <div className="content">
                  <h3>{mainThumb.title}</h3>
                  <Link
                    to={mainThumb.buttonLink}
                    className="ht-btn style-4"
                  >
                    {mainThumb.buttonText}
                  </Link>
                </div>
              </div>
            </div>

            {/* Right services */}
            <div className="col-lg-8">
              <div className="ht-services-item">
                {services.map((item) => (
                  <div
                    key={item.id}
                    className="single-item wow fadeInUp"
                    data-wow-delay={item.delay}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>

                    <Link to={item.link}>
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>

                    <img src={item.image} alt="sm-img" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand slider */}
      <div className="brand-slider">
        <div className="swiper ht-brand-slider">
          <div className="swiper-wrapper">
            {slider.map((item) => (
              <div key={item.id} className="swiper-slide">
                <div className="brand-item">
                  <h2>{item.text}</h2>
                  <img src="images/icon/9.svg" alt="icon" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
