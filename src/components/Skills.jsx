import React, { useState } from "react";
import "./Skills.css";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

function Skills() {
  const skills = [
    { name: "Java", img: "/javaimg.jpeg", color: "#f89820", level: 90 },
    { name: "Spring Boot", img: "/springbootimg.png", color: "#6db33f", level: 88 },
    { name: "Microservices", icon: <AccountTreeIcon />, color: "#00acc1", level: 85 },
    { name: "React", img: "/reactimg.png", color: "#61dafb", level: 92 },
    { name: "Redux", img: "/reduximg.png", color: "#764abc", level: 86 },
    { name: "PostgreSQL", img: "/qqq.png", color: "#336791", level: 84 },
    { name: "JWT", img: "/jwtimg.png", color: "#ff6b35", level: 88 },
    { name: "OAuth2", img: "/oAuth2img.png", color: "#e67e22", level: 87 },
    { name: "Docker", img: "/dockerimg.png", color: "#2496ed", level: 82 },
    { name: "Kubernetes", img: "/kubernatesimg.png", color: "#326ce5", level: 78 },
  ];

  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        {/* HEADER */}
        <div className="skills-header">
          <span className="skills-badge">My Skills</span>
          <h2 className="skills-title">
            What I <span>Bring</span>
          </h2>
          <p className="skills-subtitle">
            Technologies and tools I specialize in
          </p>
        </div>

        {/* GRID */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              onMouseEnter={() => setActiveSkill(index)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              <div
                className="skill-icon"
                style={{ background: `${skill.color}20` }}
              >
                {skill.icon ? (
                  <span className="mui-icon">{skill.icon}</span>
                ) : (
                  <img src={skill.img} alt={skill.name} />
                )}
              </div>

              <div className="skill-info">
                <h3>{skill.name}</h3>

                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{
                      width: activeSkill === index ? `${skill.level}%` : "0%",
                      background: skill.color,
                    }}
                  />
                </div>

                <span className="skill-percent">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="skills-footer">
          <p>✨ Always learning and exploring new technologies</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;