import { statsData } from "../../../data/aboutUsData";

export default function StatsArea() {
  return (
    <section className="ht-stats-area section-padding fix">
      <div className="container">
        <div className="ht-stats-wrapper wow fadeInUp" data-wow-delay=".3s">
          {statsData.map((stat) => (
            <div className="ht-stats-items" key={stat.id}>
              <h2 className="number">
                <span className="count">{stat.value}</span>
                {stat.suffix}
              </h2>
              <h4>{stat.title}</h4>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
