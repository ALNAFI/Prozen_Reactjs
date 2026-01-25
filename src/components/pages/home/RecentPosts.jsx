import { Link } from "react-router-dom";

export default function RecentPosts({
  data,
  variant = "v1",
  sectionClassName = "ht-blog-area section-padding fix ",
}) {
  const { section, posts } = data;
  const isV2 = variant === "v2";
  const metaClass = isV2 ? "ht-blog-meta ht-blog-meta-2" : "ht-blog-meta";
  const linkClass = isV2 ? "ht-link ht-link-2" : "ht-link";
  return (
    <section className={sectionClassName}>
      <div className="container">
        <div className="section-title text-center">
          <span className="subtitle wow fadeInUp" data-wow-delay=".2s">
            {section.subtitle}
          </span>
          <h2 className="title wow fadeInUp" data-wow-delay=".4s">
            {section.title1 ? (
              <>
                {section.title1} <br /> {section.title2}
              </>
            ) : (
              <>
                {section.title}{" "}
              </>
            )}
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
                    <ul className={metaClass}>
                      {isV2 ? (
                        <>
                          <li className="ct">{post.category}</li>
                          <li className="dt">{post.date}</li>
                        </>
                      ) : (
                        <>
                          <li>{post.date}</li>
                          <li>{post.category}</li>
                        </>
                      )}
                    </ul>
                    <Link to={post.link}>
                      <h3 className="title">{post.title}</h3>
                    </Link>
                    <Link to={post.link} className={linkClass}>
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
