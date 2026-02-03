import { useState, useEffect, useRef, memo } from "react";
import { Link } from "react-router-dom";
import { useCountUp } from "../../../hooks/useCountUp";
import { HERO_DATA } from "../../../data/homeData";

// Sub-component: Counter Card
const CounterCard = memo(({ value, suffix, label, animationClass }) => {
  const { count, countRef } = useCountUp(value, 4000, 500);
  const displayValue = value % 1 === 0 ? Math.floor(count) : count.toFixed(1);

  return (
    <div className={`count-card${animationClass === "float-bob-y" ? "-2" : ""} ${animationClass}`} ref={countRef}>
      <h2>
        <span className="count">{displayValue}</span>
        {suffix}
      </h2>
      <p>{label}</p>
    </div>
  );
});

CounterCard.displayName = "CounterCard";

// Sub-component: Hero Content
const HeroContent = memo(() => {
  const { title, descriptionParts, cta } = HERO_DATA.content;

  return (
    <div className="ht-hero-content">
      <h1 className="wow fadeInUp" data-wow-delay=".2s">
        {title.main} <br />
        <span>{title.highlight}</span> <br />
        {title.rest.map((line, index) => (
          <span key={index}>
            {line} {index < title.rest.length - 1 && <br />}
          </span>
        ))}
      </h1>
      <p className="desc wow fadeInUp" data-wow-delay=".4s">
        {descriptionParts.map((part, index, array) => (
          <span key={index}>
            {part}
            {index < array.length - 1 && <br />}
          </span>
        ))}
      </p>
      <Link
        to={cta.link}
        className="ht-btn style-2 wow fadeInUp"
        data-wow-delay=".6s"
      >
        {cta.text}
      </Link>
    </div>
  );
});

HeroContent.displayName = "HeroContent";

// Sub-component: Hero Image
const HeroImage = memo(() => {
  const { heroImage } = HERO_DATA;

  return (
    <div className="ht-hero-img">
      <img
        className="wow fadeInUp"
        data-wow-delay=".2s"
        src={heroImage.src}
        alt={heroImage.alt}
        loading="lazy"
      />
    </div>
  );
});

HeroImage.displayName = "HeroImage";

// Sub-component: Hero Shape
const HeroShape = memo(() => {
  const { shape } = HERO_DATA;

  return (
    <div className="ht-hero-shape">
      <div className="arrow-shape float-bob-x">
        <img src={shape.src} alt={shape.alt} loading="lazy" />
      </div>
    </div>
  );
});

HeroShape.displayName = "HeroShape";

// Sub-component: Hero Counters
const HeroCounters = memo(() => {
  return (
    <div className="ht-hero-counter">
      {HERO_DATA.counters.map((counter) => (
        <CounterCard
          key={counter.id}
          value={counter.value}
          suffix={counter.suffix}
          label={counter.label}
          animationClass={counter.animationClass}
        />
      ))}
    </div>
  );
});

HeroCounters.displayName = "HeroCounters";


const HeroArea = () => {
  const sectionRef = useRef(null);
  const [backgroundStyle, setBackgroundStyle] = useState({});

  useEffect(() => {
    const img = new Image();
    img.src = HERO_DATA.backgroundImage;
    img.onload = () => {
      setBackgroundStyle({
        backgroundImage: `url(${HERO_DATA.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      });
    };
    img.onerror = () => {
      console.warn(`Failed to load background image: ${HERO_DATA.backgroundImage}`);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="ht-hero-area"
      style={backgroundStyle}
    >
      <HeroShape />
      <div className="container">
        <HeroContent />
      </div>
      <HeroImage />
      <HeroCounters />
    </section>
  );
};

export default memo(HeroArea);
