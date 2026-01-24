import { Link } from "react-router-dom";
import { recentPostsData } from "../../../data/homeData";

export default function RecentPosts() {
  const { section, posts } = recentPostsData;

  return (
    <section className="ht-blog-area section-padding fix">
      <div className="container">
        <div className="section-title text-center">
          <span className="subtitle wow fadeInUp" data-wow-delay=".2s">
            {section.subtitle}
          </span>
          <h2 className="title wow fadeInUp" data-wow-delay=".4s">
            Read our latest news <br /> and articles
          </h2>
        </div>

        <div className="ht-blog-wrapper">
          <div className="row">
            {posts.map((post) => (
              <div
                key={post.id}
                className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                data-wow-delay={post.delay}
              >
                <div className="ht-blog-item mt-20">
                  <div className="ht-blog-thumb">
                    <Link to={post.link}>
                      <img src={post.image} alt={post.title} />
                    </Link>
                  </div>

                  <div className="ht-blog-content">
                    <ul className="ht-blog-meta">
                      <li>{post.date}</li>
                      <li>{post.category}</li>
                    </ul>

                    <Link to={post.link}>
                      <h3 className="title">{post.title}</h3>
                    </Link>

                    <Link to={post.link} className="ht-link">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
