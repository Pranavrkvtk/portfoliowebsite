import React, { useState } from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "Java", img: "/javaimg.jpeg", color: "#f89820", level: 90 },
    { name: "Spring Boot", img: "/springbootimg.png", color: "#6db33f", level: 88 },
    { name: "Microservices", img: "/javaimg.jpeg", color: "#00acc1", level: 85 },
    { name: "React", img: "/reactimg.png", color: "#61dafb", level: 92 },
    { name: "Redux", img: "/reduximg.png", color: "#764abc", level: 86 },
    { name: "PostgreSQL", img: "/javaimg.jpeg", color: "#336791", level: 84 },
    { name: "JWT", img: "/jwtimg.png", color: "#ff6b35", level: 88 },
    { name: "OAuth2", img: "/oAuth2img.png", color: "#e67e22", level: 87 },
    { name: "Docker", img: "/dockerimg.png", color: "#2496ed", level: 82 },
    { name: "Kubernetes", img: "/kubernatesimg.png", color: "#326ce5", level: 78 }
  ];

  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section className="skills-simple" id="skills">
      <div className="skills-simple-container">

        {/* HEADER */}
        <div className="skills-simple-header">
          <span className="skills-simple-badge">My Skills</span>

          <h2 className="skills-simple-title">
            What I <span className="highlight">Bring</span> to the Table
          </h2>

          <p className="skills-simple-subtitle">
            Technologies and tools I specialize in
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="skills-simple-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`skill-simple-card ${
                activeSkill === index ? "active" : ""
              }`}
              onMouseEnter={() => setActiveSkill(index)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              {/* ICON (IMAGE) */}
              <div className="skill-simple-icon">
                <img src={skill.img} alt={skill.name} />
              </div>

              {/* INFO */}
              <div className="skill-simple-info">
                <h3 className="skill-simple-name">{skill.name}</h3>

                <div className="skill-simple-bar">
                  <div
                    className="skill-simple-fill"
                    style={{
                      width:
                        activeSkill === index
                          ? `${skill.level}%`
                          : "0%",
                      backgroundColor: skill.color,
                    }}
                  ></div>
                </div>

                <span className="skill-simple-percent">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="skills-simple-footer">
          <p>✨ Always learning and exploring new technologies</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;