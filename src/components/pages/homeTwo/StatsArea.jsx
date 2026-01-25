import { statsData } from "../../../data/homeTwoData";

export default function StatsArea() {
  const { shape, items } = statsData;

  return (
    <section className="ht-stats-area-2 section-padding fix">
      {/* Shapes */}
      <div className="shape">
        <div className="up">
          <img src={shape.up} alt="shape" />
        </div>
        <div className="down">
          <img src={shape.down} alt="shape" />
        </div>
      </div>

      <div className="container">
        <div className="ht-stats-wrapper-2 wow fadeInUp" data-wow-delay=".2s">
          {items.map((item) => (
            <div key={item.id} className="ht-stats-items-2">
              <h2 className="number">
                <span className="count">{item.count}</span>
                {item.suffix}
              </h2>

              <h4>{item.title}</h4>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
