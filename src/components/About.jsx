// About.jsx - Complete Component with Full CSS
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
  { num: "2+", label: "Years exp." },
  { num: "20+", label: "Projects" },
  { num: "8+", label: "Technologies" },
  { num: "100%", label: "Dedication" },
];

const ID_TAGS = ["Spring Boot", "Next.js", "Docker", "AWS", "PostgreSQL", "Kafka"];

const TIMELINE = [
  {
    id: "edu1",
    cls: "tl-item--a",
    year: "2021 – 2023",
    role: "MCA - Master of Computer Applications",
    place: "College Of Engineering Vadakara · CGPA: 7.05",
    type: "education",
    icon: "🎓",
    color: "#10b981",
  },
  {
    id: "exp1",
    cls: "tl-item--b",
    year: "2024 – 2025",
    role: "Java Backend Developer",
    place: "Building scalable REST APIs & microservices with Spring Boot",
    type: "work",
    icon: "☕",
    color: "#6366f1",
  },
  {
    id: "exp2",
    cls: "tl-item--c",
    year: "2025 – Present",
    role: "React Developer",
    place: "Building dynamic web apps with React, Next.js & TypeScript",
    type: "work",
    icon: "⚛",
    color: "#f59e0b",
  },
  {
    id: "edu2",
    cls: "tl-item--d",
    year: "2017 – 2020",
    role: "BSc Physics",
    place: "SNDP Yogam Arts and Science College · 53.9%",
    type: "education",
    icon: "🔬",
    color: "#ec489a",
  },
  {
    id: "edu3",
    cls: "tl-item--e",
    year: "2015 – 2017",
    role: "Biology Science",
    place: "KR HSS Puranmeri · 65%",
    type: "education",
    icon: "🧬",
    color: "#8b5cf6",
  },
  {
    id: "edu4",
    cls: "tl-item--f",
    year: "2013 – 2015",
    role: "SSLC",
    place: "BEM HS Vadakara · 63%",
    type: "education",
    icon: "📚",
    color: "#14b8a6",
  },
];

function TimelineNode({ item, index, isLast }) {
  return (
    <div className={`tl-node ${item.cls}`} data-type={item.type}>
      {!isLast && (
        <div className="tl-connector">
          <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
            <path
              d="M20 0 L20 30 C20 40 30 45 30 55"
              stroke={item.color}
              strokeWidth="2.5"
              strokeDasharray="6 4"
              fill="none"
              className="connector-line"
            />
            <circle cx="20" cy="0" r="4" fill={item.color} />
            <polygon
              points="30,50 36,55 30,60"
              fill={item.color}
              className="connector-arrow"
            />
          </svg>
        </div>
      )}
      <div className="tl-card">
        <div className="tl-card-icon" style={{ background: `${item.color}20`, color: item.color }}>
          {item.icon}
        </div>
        <div className="tl-year" style={{ color: item.color }}>
          {item.year}
        </div>
        <div className="tl-role">{item.role}</div>
        <div className="tl-place">{item.place}</div>
        <div className="tl-type-badge" style={{ background: `${item.color}15`, color: item.color }}>
          {item.type === "work" ? "💼 Work Experience" : "🎓 Education"}
        </div>
      </div>
    </div>
  );
}

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

export default function About() {
  return (
    <section className="about" id="about">
      <div className="ab-grid-bg" aria-hidden="true" />
      <div className="ab-glow ab-glow--1" aria-hidden="true" />
      <div className="ab-glow ab-glow--2" aria-hidden="true" />

      <div className="ab-inner">
        <div className="section-pill">
          <div className="pill-bar" />
          <span className="pill-text">About me</span>
        </div>

        <h2 className="ab-title">
          Crafting <span className="grad">digital experiences</span>
          <br />from backend to frontend
        </h2>
        <p className="ab-sub">— Passionate developer based in Kerala, India</p>

        <div className="ab-top">
          <div className="bio-card">
            <p className="bio-text">
              I'm a <strong>Java &amp; React Developer</strong> who started with backend 
              engineering and expanded into frontend excellence. After completing my MCA, 
              I specialized in <strong>Spring Boot microservices</strong> before transitioning 
              to the <strong>React ecosystem</strong>. This unique journey gives me a 
              full-stack perspective — building robust systems with beautiful, responsive interfaces.
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
              <div className="id-avatar" aria-label="Pranav R K">
                <img src="/img1.JPG" alt="Pranav" />
              </div>
              <div className="id-name">Pranav R K</div>
              <div className="id-role">JAVA · REACT · FULL STACK</div>
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

        <div className="skills-grid">
          {SKILLS.map((s) => (
            <SkillCard key={s.cls} {...s} />
          ))}
        </div>

        <div className="tl-head">
          <span className="tl-label">Journey Graph</span>
          <div className="tl-rule" />
          <span className="tl-current-badge">⚡ Current: React Developer</span>
        </div>

        <div className="timeline-graph">
          <div className="graph-background" aria-hidden="true" />
          <div className="graph-path-glow" aria-hidden="true" />
          
          <div className="graph-axis">
            <span className="axis-label">🎓 Education</span>
            <div className="axis-line" />
            <span className="axis-label">☕ Java → ⚛ React</span>
          </div>
          
          <div className="tl-track-graph">
            {TIMELINE.map((item, idx) => (
              <TimelineNode
                key={item.id}
                item={item}
                index={idx}
                isLast={idx === TIMELINE.length - 1}
              />
            ))}
          </div>
          
          <div className="graph-legend">
            <div className="legend-item">
              <span className="legend-dot work-java" />
              <span>Java Backend (2024-2025)</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot work-react" />
              <span>React Frontend (2025-Present)</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot education" />
              <span>Education</span>
            </div>
          </div>
          
          <div className="journey-summary">
            <div className="summary-item">
              <span className="summary-emoji">🎓</span>
              <span>MCA Graduate</span>
              <span className="summary-arrow">→</span>
            </div>
            <div className="summary-item">
              <span className="summary-emoji">☕</span>
              <span>Java Dev (1 year)</span>
              <span className="summary-arrow">→</span>
            </div>
            <div className="summary-item highlight">
              <span className="summary-emoji">⚛</span>
              <span>React Dev (Current)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}