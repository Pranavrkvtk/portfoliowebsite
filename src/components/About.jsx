import "./About.css";

const SKILLS = [
  {
    cls: "sk-java",
    icon: "☕",
    title: "Java & Spring Boot",
    tags: ["Java 17", "Spring Boot", "Hibernate", "JPA"],
  },
  {
    cls: "sk-react",
    icon: "⚛",
    title: "React & Frontend",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    cls: "sk-cloud",
    icon: "⬡",
    title: "Microservices & Cloud",
    tags: ["Docker", "Kubernetes", "Kafka", "REST"],
  },
  {
    cls: "sk-db",
    icon: "▦",
    title: "Databases & Tools",
    tags: ["PostgreSQL", "Redis", "MySQL", "Git"],
  },
];

const STATS = [
  { num: "4+",   label: "Years exp." },
  { num: "20+",  label: "Projects" },
  { num: "8+",   label: "Technologies" },
  { num: "100%", label: "Dedication" },
];

const ID_TAGS = ["Spring Boot", "Next.js", "Docker", "AWS", "PostgreSQL", "Kafka"];

const TIMELINE = [
  {
    cls: "tl-item--a",
    year: "2024 — Present",
    role: "Java Backend Developer",
    place: "Building scalable REST APIs & microservices",
  },
  {
    cls: "tl-item--b",
    year: "2023",
    role: "React Developer",
    place: "Developed dynamic web apps with React ecosystem",
  },
  {
    cls: "tl-item--c",
    year: "2022",
    role: "CS Graduate",
    place: "B.Tech — Kerala, India",
  },
];

function SkillCard({ cls, icon, title, tags }) {
  return (
    <div className={`sk-card ${cls}`}>
      <div className="sk-icon" aria-hidden="true">{icon}</div>
      <div className="sk-title">{title}</div>
      <div className="sk-tags">
        {tags.map((t) => (
          <span key={t} className="sk-tag">{t}</span>
        ))}
      </div>
    </div>
  );
}

function TimelineCard({ cls, year, role, place }) {
  return (
    <div className={`tl-item ${cls}`}>
      <div className="tl-dot" />
      <div className="tl-year">{year}</div>
      <div className="tl-role">{role}</div>
      <div className="tl-place">{place}</div>
    </div>
  );
}

export default function About() {
  return (
    <section className="about" id="about">
      <div className="ab-grid-bg" aria-hidden="true" />
      <div className="ab-glow ab-glow--1" aria-hidden="true" />
      <div className="ab-glow ab-glow--2" aria-hidden="true" />

      <div className="ab-inner">

        {/* Section pill */}
        <div className="section-pill">
          <div className="pill-bar" />
          <span className="pill-text">About me</span>
        </div>

        {/* Heading — centered */}
        <h2 className="ab-title">
          Crafting <span className="grad">digital experiences</span>
          <br />from backend to frontend
        </h2>
        <p className="ab-sub">— Passionate developer based in Kerala, India</p>

        {/* Two-column: bio + identity */}
        <div className="ab-top">
          <div className="bio-card">
            <p className="bio-text">
              I'm a <strong>Java Backend &amp; React Developer</strong> who loves building
              robust systems and elegant interfaces. With deep expertise in{" "}
              <strong>Spring Boot microservices</strong> and the{" "}
              <strong>React ecosystem</strong>, I bridge the gap between scalable
              architecture and seamless user experiences. I believe great software is as
              much about the code behind the scenes as the interface in front of it.
            </p>
            <div className="bio-stats">
              {STATS.map(({ num, label }) => (
                <div key={label} className="bs">
                  <div className="bs-num">{num}</div>
                  <div className="bs-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="id-card">
            <div>
              <div className="id-avatar" aria-label="Pranav R K initials">PK</div>
              <div className="id-name">Pranav R K</div>
              <div className="id-role">JAVA · REACT · MICROSERVICES</div>
              <div className="id-tags">
                {ID_TAGS.map((t) => (
                  <span key={t} className="id-tag">{t}</span>
                ))}
              </div>
            </div>
            <div className="location-row">
              <div className="loc-dot" aria-hidden="true" />
              <span>Kerala, India · Open to remote</span>
            </div>
          </div>
        </div>

        {/* Skills — full width 4 columns */}
        <div className="skills-grid">
          {SKILLS.map((s) => (
            <SkillCard key={s.cls} {...s} />
          ))}
        </div>

        {/* Timeline */}
        <div className="tl-head">
          <span className="tl-label">Journey</span>
          <div className="tl-rule" />
        </div>
        <div className="tl-track">
          {TIMELINE.map((t) => (
            <TimelineCard key={t.cls} {...t} />
          ))}
        </div>

      </div>
    </section>
  );
}