import { Link } from "react-router-dom";
import { projectData } from "../../../data/homeData";

export default function ProjectArea() {
  return (
    <section className="ht-project-area section-padding fix">
      <div className="container">
        {/* Header */}
        <div className="section-title-area align-items-lg-end mb-25">
          <div className="section-title">
            <span className="subtitle wow fadeInUp" data-wow-delay=".2s">
              Selected Works
            </span>
            <h2 className="title wow fadeInUp" data-wow-delay=".4s">
              Our complete <br /> project list
            </h2>
          </div>

          <div
            className="ht-project-btn mb-25 wow fadeInUp"
            data-wow-delay=".6s"
          >
            <button className="ht-project-prev">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="ht-project-next">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="project-slide-wrapper">
          <div className="swiper ht-project-slider">
            <div className="swiper-wrapper">
              {projectData.map((project) => (
                <div key={project.id} className="swiper-slide">
                  <div className="single-item">
                    <div className="thumb">
                      <Link to={project.link}>
                        <img src={project.image} alt={project.title} />
                      </Link>

                      <div className="content">
                        <Link to={project.link}>
                          <h3>{project.title}</h3>
                        </Link>

                        <div className="bottom">
                          <p>{project.category}</p>
                          <Link to={project.link}>
                            <img
                              src="images/icon/arrow-up.svg"
                              alt="arrow"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
