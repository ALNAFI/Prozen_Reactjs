import { Link } from "react-router-dom";
import { blogData } from "../../../data/blogData";

export default function BlogArea() {
  return (
    <section className="ht-blog-area section-padding fix">
      <div className="container">
        <div className="ht-blog-wrapper">
          <div className="row">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay={blog.delay}
              >
                <div className="ht-blog-item v2 mt-20">
                  <div className="ht-blog-thumb">
                    <Link to={blog.link}>
                      <img src={blog.image} alt={blog.title} />
                    </Link>
                  </div>

                  <div className="ht-blog-content">
                    <ul className="ht-blog-meta">
                      <li>{blog.date}</li>
                      <li>{blog.category}</li>
                    </ul>

                    <Link to={blog.link}>
                      <h3 className="title">{blog.title}</h3>
                    </Link>

                    <Link to={blog.link} className="ht-link">
                      Read More
                    </Link>
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
    </section>
  );
}
