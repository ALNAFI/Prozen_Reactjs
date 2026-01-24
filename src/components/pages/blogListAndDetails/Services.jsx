import { Link } from "react-router-dom";
import { servicesData } from "../../../data/blogListAndDetailsData";
export default function Services() {
  return (
    <div className="single-widget">
      <h4 className="widget-title">Services</h4>
      <ul className="service-list">
        {servicesData.map((service) => (
          <li key={service.id}>
            <Link to={service.to}>
              {service.label} <i className="fa-solid fa-arrow-right" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
