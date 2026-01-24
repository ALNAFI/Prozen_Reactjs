import { testimonialsAreaData } from "../../../data/aboutUsData";

export default function TestimonialsArea() {
  const { section, items } = testimonialsAreaData;
  return (
    <section className="ht-testimonials-area section-padding pt-0">
      <div className="container">
        <div className="ht-testimonials-wrapper">
          <div className="row gy-5">
            {/* Left */}
            <div className="col-lg-5">
              <div className="section-title">
                <span className="subtitle wow fadeInUp" data-wow-delay=".2s">
                  {section.subtitle}
                </span>

                <h2 className="title">
                  What are <br /> they saying <br /> about us?
                </h2>
              </div>

              <div className="ht-testi-btn">
                <button className="ht-testi-prev">
                  <i className="fa-solid fa-chevron-left" />
                </button>
                <button className="ht-testi-next">
                  <i className="fa-solid fa-chevron-right" />
                </button>
              </div>
            </div>

            {/* Right */}
            <div className="col-lg-7">
              <div className="ht-testimonials-slider">
                <div className="swiper ht-testi-slider">
                  <div className="swiper-wrapper">
                    {items.map((item) => (
                      <div className="swiper-slide" key={item.id}>
                        <div className="ht-testimonials-item">
                          {/* Stars */}
                          <div className="star">
                            {Array.from({
                              length: item.rating,
                            }).map((_, i) => (
                              <i key={i} className="fa-solid fa-star" />
                            ))}
                          </div>

                          <p className="desc">“{item.text}”</p>

                          <div className="ht-testimonials-author">
                            <div className="avatar">
                              <img src={item.avatar} alt={item.name} />
                            </div>
                            <div className="author-info">
                              <h5 className="name">{item.name}</h5>
                              <p className="role">{item.role}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* right end */}
          </div>
        </div>
      </div>
    </section>
  );
}
