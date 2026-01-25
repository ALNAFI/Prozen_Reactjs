import { Link } from "react-router-dom";
import {
  footerQuickLinks,
  footerServiceLinks,
  footerCopyrightLinks,
} from "../../../data/homeTwoData";
import { footerSocialLinks } from "../../../data/footerData";
import { getCurrentYear } from "../../../utils/getCurrentYear";

export default function Footer() {
  return (
    <footer className="ht-footer-area fix">
      <div className="container">
        <div className="ht-footer-wrapper section-padding">
          <div className="row gy-5">
            {/* Left */}
            <div className="col-xl-4">
              <div className="ht-footer-info wow fadeInUp" data-wow-delay=".3s">
                <Link to="/">
                  <img src="images/logo/logo-white-2.svg" alt="logo" />
                </Link>

                <p className="desc">
                  A state of plants, usually at night, when their <br />
                  leaflets approach each other and the flowers <br />
                  close and droop, or are covered.
                </p>

                <ul className="footer-social">
                  {footerSocialLinks.map((item,index) => (
                    <li key={index}>
                      <Link to={item.path}>
                        <i className={`fa-brands ${item.icon}`}></i>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right */}
            <div className="offset-xl-1 col-xl-7">
              <div className="ht-footer-widgets">
                {/* Quick Links */}
                <div className="widget-item wow fadeInUp" data-wow-delay=".6s">
                  <h5 className="head">Quick Links</h5>
                  <ul className="link-list">
                    {footerQuickLinks.map((link) => (
                      <li key={link.id}>
                        <Link to={link.path}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div className="widget-item wow fadeInUp" data-wow-delay=".9s">
                  <h5 className="head">Our Services</h5>
                  <ul className="link-list">
                    {footerServiceLinks.map((link) => (
                      <li key={link.id}>
                        <Link to={link.path}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subscribe */}
                <div
                  className="widget-subscriber wow fadeInUp"
                  data-wow-delay="1.2s"
                >
                  <form>
                    <h5>Subscribe for updates and exclusive offers!</h5>
                    <input type="email" placeholder="Your Email" />
                    <button type="submit">
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="ht-footer-copyright ht-footer-copyright-2 wow fadeInUp"
          data-wow-delay="1.5s"
        >
          <p>
            ©{getCurrentYear()} <span>Hurraytheme</span>. All rights reserved.
          </p>
          <ul className="copyright-links">
            {footerCopyrightLinks.map((link) => (
              <li key={link.id}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
