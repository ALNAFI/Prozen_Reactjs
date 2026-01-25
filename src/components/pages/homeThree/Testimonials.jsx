import { testimonialsData } from "../../../data/HomeThreeData";

export default function Testimonials() {
  const { bgShape, icon, testimonials } = testimonialsData;

  return (
    <section className="ht-testimonials-area-2 section-padding fix">
      {/* Background shape */}
      <div className="bg-shape">
        <img src={bgShape} alt="shape" />
      </div>

      <div className="container">
        <div className="testimonial-slides-wrapper">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="swiper ht-testi-slider-3">
                <div className="swiper-wrapper">
                  {testimonials.map((item) => (
                    <div key={item.id} className="swiper-slide">
                      <div className="testimonial-slides-item">
                        <div className="icon">
                          <img src={icon} alt="icon" />
                        </div>

                        <p>“{item.text}”</p>

                        <div className="info">
                          <h4>{item.name}</h4>
                          <span>{item.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Slider buttons */}
          <div className="swiper-testi-btn">
            <div className="testi-slides-prev">
              <i className="fa-solid fa-arrow-left-long"></i>
            </div>
            <div className="testi-slides-next">
              <i className="fa-solid fa-arrow-right-long"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
