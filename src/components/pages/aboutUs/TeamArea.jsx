import { Link } from "react-router-dom";
import { teamSectionData } from "../../../data/aboutUsData";

export default function TeamArea() {
  const { section, members } = teamSectionData;

  return (
    <section className="ht-team-area section-padding fix">
      <div className="container">
        {/* Section title */}
        <div className="section-title text-center">
          <span className="subtitle wow fadeInUp" data-wow-delay=".2s">
            {section.subtitle}
          </span>

          <h2 className="title wow fadeInUp" data-wow-delay=".4s">
            Get consulting from our <br /> best consultants
          </h2>
        </div>

        {/* Team grid */}
        <div className="ht-team-wrapper">
          <div className="row">
            {members.map((member) => (
              <div
                key={member.id}
                className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay={member.delay}
              >
                <div className="ht-team-items">
                  <div className="ht-team-thumb">
                    <Link to="/teamdetails">
                      <img src={member.image} alt={member.name} />
                    </Link>

                    <div className="social">
                      {member.socials.map((icon) => (
                        <Link to="#" key={icon}>
                          <i className={`fa-brands fa-${icon}`} />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="ht-team-content">
                    <Link to="/teamdetails">
                      <h4 className="name">{member.name}</h4>
                    </Link>
                    <p className="role">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* team grid end */}
      </div>
    </section>
  );
}
