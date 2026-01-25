import { Link } from "react-router-dom";
import { teamAreaData } from "../../../data/homeTwoData";
export default function TeamArea() {
  const { section, members, socials } = teamAreaData;

  return (
    <section className="ht-team-area section-padding fix">
      <div className="container">
        <div className="ht-team-wrapper">
          <div className="row gy-5">
            {/* Left content */}
            <div className="col-lg-4">
              <div className="ht-team-content-2">
                <div className="section-title">
                  <span className="subtitle wow fadeInUp" data-wow-delay=".2s">
                    {section.subtitle}
                  </span>
                  <h2 className="title fadeInUp" data-wow-delay=".2s">
                    {section.title}
                  </h2>
                  <p>{section.desc}</p>
                </div>

                <Link
                  to={section.button.link}
                  className="ht-btn fadeInUp"
                  data-wow-delay={section.button.delay}
                >
                  {section.button.text}
                </Link>
              </div>
            </div>

            {/* Team members */}
            <div className="col-lg-8">
              <div className="ht-team-items-wrapper">
                <div className="row g-4">
                  {members.map((member) => (
                    <div
                      key={member.id}
                      className="col-md-6 wow fadeInUp"
                      data-wow-delay={member.delay}
                    >
                      <div className="single-item">
                        <div className="thumb">
                          <Link to={member.link}>
                            <img src={member.image} alt={member.name} />
                          </Link>

                          <div className="social-wrapper">
                            {socials.map((social) => (
                              <a key={social.id} href={social.link}>
                                <i className={`fa-brands ${social.icon}`}></i>
                              </a>
                            ))}
                          </div>
                        </div>

                        <div className="info">
                          <Link to={member.link}>
                            <h4>{member.name}</h4>
                          </Link>
                          <p>{member.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* end members */}
          </div>
        </div>
      </div>
    </section>
  );
}
