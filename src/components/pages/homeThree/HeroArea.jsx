import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HERO_BG = "images/hero/hero-bg-3.jpg";
const HERO_SLIDES = [
  { id: 1, src: "images/hero/3.jpg", alt: "Hero" },
  { id: 2, src: "images/hero/3.jpg", alt: "Hero" },
  { id: 3, src: "images/hero/3.jpg", alt: "Hero" },
];

export default function HeroArea() {
  const [bgStyle, setBgStyle] = useState({});
  const nextRef = useRef(null);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = HERO_BG;
    img.onload = () => {
      setBgStyle({
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      });
    };
  }, []);

  useEffect(() => {
    if (swiper && nextRef.current) {
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <section className="ht-hero-area hero-3" style={bgStyle}>
      <div className="ht-hero-shape">
        <div className="arrow-shape-3 float-bob-y">
          <img src="images/shape/7.svg" alt="shape" />
        </div>
      </div>
      <div className="container">
        <div className="hero-wrapper">
          <div className="ht-hero-content style-3">
            <h1 data-aos="fade-up" data-aos-delay="300">
              Trusted <br /> Insurance for a <br /> Peaceful Life
            </h1>
            <p className="desc" data-aos="fade-up" data-aos-delay="600">
              Explore our tailored insurance solutions and experience the peace
              of mind that <br />
              comes with knowing you're with covered Potenti nullam{" "}
            </p>
            <Link
              to="/contact"
              className="ht-btn style-2"
              data-aos="fade-up"
              data-aos-delay="900"
            >
              Let's Get in Touch
            </Link>
          </div>
          <div className="video-card" data-aos="fade-up" data-aos-delay="300">
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={30}
              speed={1000}
              loop={true}
              navigation={{ nextEl: nextRef.current }}
              onSwiper={setSwiper}
             
            >
              {HERO_SLIDES.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="thumb">
                    <img src={slide.src} alt={slide.alt} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="txt">
              <span>Featured Services</span>
              <i
                ref={nextRef}
                className="fa-solid fa-arrow-right-long ht-hero-next"
                onClick={() => swiper?.slideNext()}
                onKeyDown={(e) => e.key === "Enter" && swiper?.slideNext()}
                role="button"
                tabIndex={0}
              />
            </div>
            <div className="play-icon">
              <img src="images/hero/text-spiner.png" alt="text" />
              <div className="icon">
                <Link
                  to="https://www.youtube.com/watch?v=axzocwX0rEo"
                  className="video-popup"
                >
                  <i className="fa-solid fa-play"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
