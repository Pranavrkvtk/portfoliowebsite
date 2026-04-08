import "./About.css";
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

const STATS = [
  { num: "2+", label: "Years Experience" },
  { num: "10+", label: "Projects" },
  { num: "8+", label: "Technologies" },
  { num: "100%", label: "Dedication" },
];

const TAGS = ["Spring Boot", "React", "Docker", "AWS", "PostgreSQL", "Kafka"];

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
      {/* ===== ABOUT SECTION ===== */}
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

          {/* ===== TOP SECTION ===== */}
          <div className="ab-top">

            {/* BIO */}
            <div className="bio-card">
              <p className="bio-text">
                I'm a <strong>Java & React Developer</strong> with strong backend
                experience in <strong>Spring Boot</strong> and modern frontend
                skills using <strong>React & Next.js</strong>. I build scalable
                applications with clean architecture and user-friendly UI.
              </p>

              {/* STATS */}
              <div className="bio-stats">
                {STATS.map((item) => (
                  <div key={item.label} className="bs">
                    <div className="bs-num">{item.num}</div>
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

          {/* ===== SKILLS ===== */}
          <div className="skills-grid">
            {SKILLS.map((skill) => (
              <SkillCard key={skill.title} {...skill} />
            ))}
          </div>

        </div>
      </section>

      {/* ===== JOURNEY SECTION ===== */}
      {/* <Journey /> */}
    </>
  );
}