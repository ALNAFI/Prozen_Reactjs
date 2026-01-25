export default function HeroArea() {
  return (
    <section
      className="ht-hero-area hero-3"
      data-bg-src="images/hero/hero-bg-3.jpg"
    >
      <div className="ht-hero-shape">
        <div className="arrow-shape-3 float-bob-y">
          <img src="images/shape/7.svg" alt="shape" />
        </div>
      </div>
      <div className="container">
        <div className="hero-wrapper">
          <div className="ht-hero-content style-3">
            <h1 className="wow fadeInUp" data-wow-delay=".3s">
              Trusted <br /> Insurance for a <br /> Peaceful Life
            </h1>
            <p className="desc wow fadeInUp" data-wow-delay=".6s">
              Explore our tailored insurance solutions and experience the peace
              of mind that <br />
              comes with knowing you're with covered Potenti nullam{" "}
            </p>
            <a
              href="contact.html"
              className="ht-btn style-2 wow fadeInUp"
              data-wow-delay=".9s"
            >
              Let's Get in Touch
            </a>
          </div>
          <div className="video-card wow fadeInUp" data-wow-delay=".3s">
            <div className="swiper hero-img-slide">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="thumb">
                    <img src="images/hero/3.jpg" alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="thumb">
                    <img src="images/hero/3.jpg" alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="thumb">
                    <img src="images/hero/3.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="txt">
              <span>Featured Services</span>
              <i className="fa-solid fa-arrow-right-long ht-hero-next"></i>
            </div>
            <div className="play-icon">
              <img src="images/hero/text-spiner.png" alt="text" />
              <div className="icon">
                <a
                  href="https://www.youtube.com/watch?v=axzocwX0rEo"
                  className="video-popup"
                >
                  <i className="fa-solid fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
