import { Link } from "react-router-dom";
import { offcanvasInfo, socialLinks } from "../../data/offcanvasData";



export default function Offcanvas() {
  return (
    <>
      <div className="ht-offcanvas">
        <div className="ht-offcanvas-wrapper">
          {/* Header */}
          <div className="ht-offcanvas-header mb-50">
            <Link to="/" className="ht-offcanvas-logo">
              <img src="/images/logo/logo.svg" alt="logo" />
            </Link>

            <button className="ht-offcanvas-toggle-close">
              <i className="fas fa-times" />
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="ht-offcanvas-menu d-xl-none mb-50">
            <nav>{/* menu will render here */}</nav>
          </div>

          {/* Content */}
          <div className="ht-offcanvas-content d-none d-xl-block mb-50">
            <h2 className="ht-offcanvas-content__title">Hello There!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          {/* Info */}
          <div className="ht-offcanvas-info mb-50">
            <h3 className="ht-offcanvas__title">Information</h3>

            {offcanvasInfo.map((item, index) => (
              <span key={index}>
                <Link to={item.to}>
                  {item.label} <br />
                </Link>
              </span>
            ))}
          </div>

          {/* Social */}
          <div className="ht-offcanvas-social mb-50">
            <h3 className="ht-offcanvas__title">Follow Us</h3>

            {socialLinks.map((item, index) => (
              <Link to={item.to} key={index}>
                <i className={`fab ${item.icon}`} />{" "}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* overlay */}
      <div className="ht-offcanvas-overlay" />
    </>
  );
}
