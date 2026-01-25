import { headerMenuData } from "../../../data/HomeThreeData";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="ht-header-area">
      <div className="ht-main-header header-3" id="header-sticky">
        <div className="container-fluid">
          <div className="ht-menu-wrapper">

            {/* Left */}
            <div className="ht-menu-left">
              <div className="ht-menu-logo">
                <Link to="/hometwo">
                  <img src="images/logo/logo.svg" alt="logo" />
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="ht-menu-right">
              <div className="ht-menu-main d-none d-lg-block">
                <nav className="ht-mobile-menu-active">
                  <ul>
                    {headerMenuData.map((item, i) => (
                      <li key={i} className={item.children ? "has-dropdown" : ""}>
                        <Link to={item.link || "#"}>{item.title}</Link>

                        {item.children && (
                          <ul className="sub-menu">
                            {item.children.map((sub, j) => (
                              <li key={j}>
                                <Link to={sub.link}>{sub.label}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="search d-none d-lg-block search-toggle">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>

              <Link to="/contact" className="ht-btn d-none d-lg-block">
                get in touch
              </Link>

              <button className="ht-menu-btn d-lg-none offcanvas-toggle">
                <i className="fa-solid fa-bars-staggered"></i>
              </button>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
