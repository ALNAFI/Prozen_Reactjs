import { Link } from "react-router-dom";
import { headerMenuData } from "../../../data/headerMenuData";
import { useStickyHeader } from "../../../hooks/useStickyHeader";

const STICKY_SCROLL_THRESHOLD = 250;

export default function Header() {
  const isSticky = useStickyHeader(STICKY_SCROLL_THRESHOLD);

  return (
    <header className="ht-header-area">
      <div
        className={`ht-main-header header-2${isSticky ? " sticky" : ""}`}
        id="header-sticky"
      >
        <div className="container">
          <div className="ht-menu-wrapper">
            {/* Left */}
            <div className="ht-menu-left">
              <div className="ht-menu-logo">
                <Link to="/">
                  <img src="images/logo/logo.svg" alt="logo" />
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="ht-menu-right">
              <div className="ht-menu-main d-none d-lg-block">
                <nav className="ht-mobile-menu-active">
                  <ul>
                    {headerMenuData.map((menu, index) => {
                      const hasChildren =
                        menu.children && menu.children.length > 0;

                      return (
                        <li
                          key={index}
                          className={hasChildren ? "has-dropdown" : ""}
                        >
                          {/* Parent */}
                          {menu.to ? (
                            <Link to={menu.to}>{menu.label}</Link>
                          ) : (
                            <Link to="#">{menu.label}</Link>
                          )}

                          {/* Dropdown */}
                          {hasChildren && (
                            <ul className="sub-menu">
                              {menu.children.map((child, idx) => (
                                <li key={idx}>
                                  <Link to={child.to}>{child.label}</Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>

              {/* Search */}
              <div className="search d-none d-lg-block search-toggle">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>

              {/* CTA */}
              <Link to="/contact" className="ht-btn d-none d-lg-block">
                get in touch
              </Link>

              {/* Mobile button */}
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
