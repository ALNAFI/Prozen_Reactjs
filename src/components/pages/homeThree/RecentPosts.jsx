import { Link } from "react-router-dom";
import { recentPostsData } from "../../../data/HomeThreeData";

export default function RecentPosts() {
  const { section, posts } = recentPostsData;

  return (
    <section className="ht-blog-area-3 section-padding fix ">
      <div className="container">
        <div className="ht-blog-wrapper">
          <div className="row gy-5">
            {/* Left content */}
            <div className="col-lg-5">
              <div className="ht-blog-contents">
                <div className="section-title">
                  <span className="subtitle wow fadeInUp" data-wow-delay=".2s">
                    {section.subtitle}
                  </span>

                  <h2 className="title wow fadeInUp" data-wow-delay=".5s">
                    {section.title1} <br /> {section.title2}
                  </h2>

                  <p className="mt-7 wow fadeInUp" data-wow-delay=".8s">
                    {section.desc}
                  </p>
                </div>

                <Link to={section.button.link} className="ht-btn style-2">
                  {section.button.text}
                </Link>
              </div>
            </div>

            {/* Right posts */}
            <div className="col-lg-7">
              <div className="ht-blog-item-wrapper">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="single-item wow fadeInUp"
                    data-wow-delay={post.delay}
                  >
                    <div className="thumb">
                      <Link to={post.link}>
                        <img src={post.image} alt={post.titleLine1} />
                      </Link>
                    </div>

                    <div className="content">
                      <span className="meta">
                        {post.date} | {post.category}
                      </span>

                      <Link to={post.link}>
                        <h3>
                          {post.titleLine1} <br />
                          {post.titleLine2}
                        </h3>
                      </Link>

                      <Link to={post.link} className="link">
                        read more
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* end posts */}
          </div>
        </div>
      </div>
    </section>
  );
}
