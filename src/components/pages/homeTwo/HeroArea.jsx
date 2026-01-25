export default function HeroArea() {
  return (
    <section className="ht-hero-area hero-2">
      <div className="shape-two float-bob-x">
        <img src="images/shape/11.svg" alt="shape" />
      </div>
      <div className="container">
        <div className="hero-wrapper">
          <div className="row gy-5 align-items-lg-center ">
            <div className="col-lg-5">
              <div className="ht-hero-content style-2">
                <h1 className="wow fadeIn" data-wow-delay=".2s">
                  Innovative solutions for growth
                </h1>
                <p className="desc wow fadeInUp" data-wow-delay=".4s">
                  Agilos helps you to convert your data into rategic asset emand
                  get top-notch your business insights.
                </p>
                <a
                  href="contact.html"
                  className="ht-btn style-2 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  Let's Get in Touch
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img two wow fadeInUp" data-wow-delay=".2s">
                <img src="images/hero/2.jpg" alt="img" />
                <div className="sm-img float-bob-y">
                  <img src="images/hero/4.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
