import { Link } from "react-router-dom";
import { projectData } from "../../../data/projectData";
export default function ProjectCards() {
  return (
    <div className="ht-project-area section-padding">
      <div className="container">
        <div className="project-slide-wrapper inner-two">
          <div className="row gy-5">
            {projectData.map((project) => (
              <div
                key={project.id}
                className="col-lg-4 wow fadeInUp"
                data-wow-delay={project.delay}
              >
                <div className="single-item v2">
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
                          <img src="/images/icon/arrow-up.svg" alt="icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="page-nav-wrap text-center">
            <ul>
              <li className="active">
                <Link className="page-numbers" to="#">
                  01
                </Link>
              </li>
              <li>
                <Link className="page-numbers" to="#">
                  02
                </Link>
              </li>
              <li>
                <Link className="page-numbers" to="#">
                  03
                </Link>
              </li>
              <li>
                <Link className="page-numbers" to="#">
                  <i className="fa-solid fa-chevron-right" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
