import { Link } from "react-router-dom";
export default function Breadcrumb({ breadcrumbData }) {
  if (!breadcrumbData) return null;
  const { title, current } = breadcrumbData;
  return (
    <section className="ht-breadcrumb-area">
      <div className="container">
        <div className="ht-breadcrumb-heading">
          {title && <h2 className="ht-breadcrumb-title">{title}</h2>}

          <ul className="ht-breadcrumb-list">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <i className="fa-solid fa-chevron-right" />
            </li>

            <li className="active">{current}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
