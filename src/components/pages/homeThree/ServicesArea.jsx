import { Link } from "react-router-dom";
import { servicesInsuranceData } from "../../../data/HomeThreeData";

export default function ServicesArea() {
  const { section, services } = servicesInsuranceData;

  return (
    <section className="ht-services-area pt-130 fix">
      <div className="container">
        {/* Section title */}
        <div className="section-title text-center">
          <span className="subtitle wow fadeInUp" data-wow-delay=".2s">
            {section.subtitle}
          </span>
          <h2 className="title wow fadeInUp" data-wow-delay=".5s">
            {section.title1} <br /> {section.title2}
          </h2>
        </div>

        {/* Services */}
        <div className="ht-services-wrapper">
          <div className="row">
            {services.map((item) => (
              <div
                key={item.id}
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <div className="ht-services-items mt-25">
                  <div className="icon">
                    <img src={item.icon} alt="icon" />
                  </div>

                  <Link to={item.link}>
                    <h3 className="title title-2">{item.title}</h3>
                  </Link>

                  <p className="desc">{item.desc}</p>

                  <Link to={item.link} className="link">
                    Read more <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
