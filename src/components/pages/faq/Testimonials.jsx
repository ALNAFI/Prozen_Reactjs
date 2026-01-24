import { testimonialsData } from "../../../data/faqData";

export default function Testimonials() {
  const { subtitle, title, items } = testimonialsData;
  return (
    <section className="ht-testimonials-area-2 section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-title-area align-items-lg-end mb-30">
          <div className="section-title mb-0">
            <span className="subtitle wow fadeInUp" data-wow-delay=".2s">
              {subtitle}
            </span>
            <h2 className="title wow fadeInUp" data-wow-delay=".4s">
              {title}
            </h2>
          </div>

          <div className="ht-testi-btn mt-0 wow fadeInUp" data-wow-delay=".6s">
            <button className="ht-testi-prev ht-testi-prev-2">
              <i className="fa-solid fa-chevron-left" />
            </button>
            <button className="ht-testi-next ht-testi-next-2">
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="ht-testimonials-wrapper-2">
          <div className="swiper ht-testi-slider-2">
            <div className="swiper-wrapper">
              {items.map((item) => (
                <div className="swiper-slide" key={item.id}>
                  <div className="ht-testimonials-item ht-testimonials-item-2">
                    {/* Stars */}
                    <div className="star">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <i className="fa-solid fa-star" key={i} />
                      ))}
                    </div>

                    <p className="desc desc-2">“{item.text}”</p>

                    <div className="ht-testimonials-author ht-testimonials-author-2">
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
    </section>
  );
}
