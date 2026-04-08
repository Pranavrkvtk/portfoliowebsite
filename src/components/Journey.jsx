import "./Journey.css";

const TIMELINE = [
  {
    year: "2013 – 2015",
    title: "SSLC",
    place: "BEM HS Vadakara ",
    icon: "📚",
  },
  {
    year: "2015 – 2017",
    title: "Biology Science",
    place: "KR HSS Puranmeri ",
    icon: "🧬",
  },
  {
    year: "2017 – 2020",
    title: "BSc Physics",
    place: "SNDP College ",
    icon: "🔬",
  },
  {
    year: "2021 – 2023",
    title: "MCA",
    place: "College of Engineering Vadakara ",
    icon: "🎓",
  },
  {
    year: "2024 – 2025",
    title: "Java Backend Developer",
    place: "GJ Global IT Ventures Pvt Ltd",
    icon: "☕",
  },
  {
    year: "2025 – Present",
    title: "React Developer",
    place: "GJ Global IT Ventures Pvt Ltd",
    icon: "⚛",
  },
];

export default function Journey() {
  return (
    <section className="journey" id="journey">
      <h2 className="journey-title">
        My <span>Journey</span>
      </h2>

      <div className="timeline">
        {TIMELINE.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <div className="timeline-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <span className="year">{item.year}</span>
              <p>{item.place}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}