import { Link } from "react-router-dom";
import { projectAreaData } from "../../../data/homeTwoData";

export default function ProjectArea() {
  const { section, topButton, projects, bottomButton } = projectAreaData;

  return (
    <section className="ht-project-area-2 section-padding fix">
      <div className="container">
        {/* Header */}
        <div className="section-title-area align-items-lg-end">
          <div className="section-title mb-0">
            <span className="subtitle wow fadeInUp" data-wow-delay=".2s">
              {section.subtitle}
            </span>
            <h2 className="title wow fadeInUp" data-wow-delay=".4s">
              {section.title1} <br /> {section.title2}
            </h2>
          </div>

          <Link
            to={topButton.link}
            className="ht-btn style-2 wow fadeInUp"
            data-wow-delay={topButton.delay}
          >
            {topButton.text}
          </Link>
        </div>

        {/* Projects */}
        <div className="ht-project-wrapper">
          <div className="row g-5">
            {projects.map((item) => (
              <div
                key={item.id}
                className="col-lg-6 wow fadeInUp"
                data-wow-delay={item.delay}
              >
                <div className="single-item">
                  <div className="thumb">
                    <Link to={item.link}>
                      <img src={item.image} alt={item.title} />
                    </Link>
                  </div>

                  <div className="content">
                    <Link to={item.link}>
                      <h4>{item.title}</h4>
                    </Link>
                    <span>{item.category}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom button */}
            <Link
              to={bottomButton.link}
              className="project-btn mx-auto wow fadeInUp"
              data-wow-delay={bottomButton.delay}
            >
              {bottomButton.textLine1} <br />
              {bottomButton.textLine2}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
