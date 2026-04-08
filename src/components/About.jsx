import "./About.css";
import { useEffect, useState } from "react";

// import Journey from "./Jorney";

const SKILLS = [
  {
    icon: "☕",
    title: "Java & Spring Boot",
    tags: ["Java", "Spring Boot", "Hibernate", "JPA"],
  },
  {
    icon: "⚛",
    title: "React & Frontend",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    icon: "⬡",
    title: "Microservices",
    tags: ["Docker", "Kubernetes", "Kafka", "REST API"],
  },
  {
    icon: "▦",
    title: "Database & Tools",
    tags: ["PostgreSQL", "MySQL", "Redis", "Git"],
  },
];

/* 🔥 Updated STATS (numbers only) */
const STATS = [
  { num: 2, label: "Years Experience", suffix: "+" },
  { num: 10, label: "Projects", suffix: "+" },
  { num: 8, label: "Technologies", suffix: "+" },
  { num: 100, label: "Dedication", suffix: "%" },
];

const TAGS = ["Spring Boot", "React", "Docker", "AWS", "PostgreSQL", "Kafka"];

/* 🔥 Counter Component */
function Counter({ end, suffix }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let start = 1;
    const duration = 1500;
    const increment = end / (duration / 30);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function SkillCard({ icon, title, tags }) {
  return (
    <div className="sk-card">
      <div className="sk-icon">{icon}</div>
      <div className="sk-title">{title}</div>

      <div className="sk-tags">
        {tags.map((tag) => (
          <span key={tag} className="sk-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="ab-inner">

          {/* TITLE */}
          <h2 className="ab-title">
            Crafting <span className="grad">digital experiences</span>
            <br /> from backend to frontend
          </h2>

          <p className="ab-sub">
            — Java & React Developer from Kerala, India
          </p>

          {/* TOP SECTION */}
          <div className="ab-top">

            {/* BIO */}
            <div className="bio-card">
              <p className="bio-text">
                I'm a <strong>Java & React Developer</strong> with strong backend
                experience in <strong>Spring Boot</strong> and modern frontend
                skills using <strong>React & Next.js</strong>.
              </p>

              {/* 🔥 Animated STATS */}
              <div className="bio-stats">
                {STATS.map((item) => (
                  <div key={item.label} className="bs">
                    <div className="bs-num">
                      <Counter end={item.num} suffix={item.suffix} />
                    </div>
                    <div className="bs-label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ID CARD */}
            <div className="id-card">
              <div>
                <div className="id-avatar">
                  <img src="/img1.JPG" alt="Pranav" />
                </div>

                <div className="id-name">Pranav R K</div>
                <div className="id-role">
                  JAVA · REACT · FULL STACK
                </div>

                <div className="id-tags">
                  {TAGS.map((tag) => (
                    <span key={tag} className="id-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="location-row">
                <div className="loc-dot" />
                <span>Kerala, India · Open to Work</span>
              </div>
            </div>

          </div>

          {/* SKILLS */}
          <div className="skills-grid">
            {SKILLS.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}