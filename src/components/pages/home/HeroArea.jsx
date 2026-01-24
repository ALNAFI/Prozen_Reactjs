import { Link } from "react-router-dom";

export default function HeroArea() {
  return (
    <section className="ht-hero-area" data-bg-src="images/hero/hero-bg.jpg">
      <div className="ht-hero-shape">
        <div className="arrow-shape float-bob-x">
          <img src="images/shape/1.svg" alt="shape" />
        </div>
      </div>
      <div className="container">
        <div className="ht-hero-content">
          <h1 className="wow fadeInUp" data-wow-delay=".2s">
            Innovative <br />
            <span>business</span> <br />
            solutions <br />
            for everyone
          </h1>
          <p className="desc wow fadeInUp" data-wow-delay=".4s">
            Our team prioritizes usability and accessibility to ensure <br />
            that every visitor enjoys a seamless intuitive.
          </p>
          <Link
            to="/contact"
            className="ht-btn style-2 wow fadeInUp"
            data-wow-delay=".6s"
          >
            Let's Get in Touch
          </Link>
        </div>
      </div>
      <div className="ht-hero-img">
        <img
          className="wow fadeInUp"
          data-wow-delay=".2s"
          src="images/hero/1.png"
          alt="img"
        />
      </div>
      <div className="ht-hero-counter">
        <div className="count-card float-bob-x">
          <h2>
            <span className="count">98</span>%
          </h2>
          <p>Return on investment</p>
        </div>
        <div className="count-card-2 float-bob-y">
          <h2>
            <span className="count">22.5</span>K
          </h2>
          <p>Happy clients worldwide</p>
        </div>
      </div>
    </section>
  );
}
