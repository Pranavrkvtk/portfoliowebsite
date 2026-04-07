import React, { useState, useRef } from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "Java", icon: "fab fa-java", color: "#f89820", level: 90 },
    { name: "Spring Boot", icon: "fas fa-leaf", color: "#6db33f", level: 88 },
    { name: "Microservices", icon: "fas fa-cloud-upload-alt", color: "#00acc1", level: 85 },
    { name: "React", icon: "fab fa-react", color: "#61dafb", level: 92 },
    { name: "Redux", icon: "fas fa-brain", color: "#764abc", level: 86 },
    { name: "PostgreSQL", icon: "fas fa-database", color: "#336791", level: 84 },
    { name: "JWT", icon: "fas fa-key", color: "#ff6b35", level: 88 },
    { name: "OAuth2", icon: "fas fa-shield-alt", color: "#e67e22", level: 87 },
    { name: "Docker", icon: "fab fa-docker", color: "#2496ed", level: 82 },
    { name: "Kubernetes", icon: "fas fa-ship", color: "#326ce5", level: 78 }
  ];

  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const [sectionRotation, setSectionRotation] = useState({ x: 0, y: 0 });

  // 3D tilt effect for the whole section
  const handleSectionMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 6;
    const rotateX = ((centerY - y) / centerY) * 4;
    setSectionRotation({ x: rotateX, y: rotateY });
    setMousePosition({ x, y });
  };

  const handleSectionMouseLeave = () => {
    setSectionRotation({ x: 0, y: 0 });
  };

  return (
    <section 
      ref={sectionRef}
      className="skills-3d-section" 
      id="skills"
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
      style={{
        transform: `perspective(1200px) rotateX(${sectionRotation.x}deg) rotateY(${sectionRotation.y}deg)`,
        transition: "transform 0.1s ease-out"
      }}
    >
      {/* Animated gradient background */}
      <div className="skills-bg">
        <div className="skills-bg-gradient"></div>
        <div className="skills-bg-grid"></div>
      </div>

      {/* Floating particles */}
      <div className="skills-particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            opacity: 0.3 + Math.random() * 0.4
          }}></div>
        ))}
      </div>

      <div className="skills-container">
        {/* Section Header */}
        <div className="skills-header">
          <div className="skills-badge">
            <i className="fas fa-cube"></i>
            <span>Expertise</span>
          </div>
          <h2 className="skills-title">
            Technical<span> Arsenal</span>
          </h2>
          <div className="skills-divider">
            <span></span>
            <i className="fas fa-code"></i>
            <span></span>
          </div>
          <p className="skills-subtitle">
            Technologies I work with to build exceptional digital experiences
          </p>
        </div>

        {/* Skills Grid with 3D Cards */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillCard3D 
              key={index}
              skill={skill}
              index={index}
              isHovered={hoveredCard === index}
              onHover={() => setHoveredCard(index)}
              onLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>

      {/* Decorative floating orbs */}
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>
    </section>
  );
}

// Individual 3D Skill Card Component
const SkillCard3D = ({ skill, index, isHovered, onHover, onLeave }) => {
  const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 });
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleCardMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = ((centerY - y) / centerY) * 12;
    setCardRotation({ x: rotateX, y: rotateY });
    
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;
    setGlowPosition({ x: glowX, y: glowY });
  };

  const handleCardMouseLeave = () => {
    setCardRotation({ x: 0, y: 0 });
    onLeave();
  };

  return (
    <div 
      ref={cardRef}
      className={`skill-card-3d ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={onHover}
      onMouseMove={handleCardMouseMove}
      onMouseLeave={handleCardMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${cardRotation.x}deg) rotateY(${cardRotation.y}deg) translateZ(${isHovered ? '20px' : '0px'})`,
        transition: "transform 0.15s cubic-bezier(0.2, 0.9, 0.4, 1.1), box-shadow 0.3s ease",
        '--glow-x': `${glowPosition.x}%`,
        '--glow-y': `${glowPosition.y}%`
      }}
    >
      <div className="skill-card-inner">
        <div className="skill-card-front">
          <div className="skill-icon-wrapper" style={{ borderColor: skill.color }}>
            <i className={skill.icon} style={{ color: skill.color }}></i>
          </div>
          <h3 className="skill-card-name">{skill.name}</h3>
          <div className="skill-level-container">
            <div className="skill-level-track">
              <div 
                className="skill-level-fill" 
                style={{ 
                  width: `${skill.level}%`,
                  background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`
                }}
              ></div>
            </div>
            <span className="skill-level-text">{skill.level}%</span>
          </div>
          <div className="skill-glow-effect" style={{ background: `radial-gradient(circle at var(--glow-x) var(--glow-y), ${skill.color}30, transparent 70%)` }}></div>
        </div>
        <div className="skill-card-back">
          <div className="back-content">
            <i className={`${skill.icon} back-icon`} style={{ color: skill.color }}></i>
            <p>Proficiency</p>
            <div className="back-progress-ring">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6"/>
                <circle 
                  cx="50" cy="50" r="42" 
                  fill="none" 
                  stroke={skill.color} 
                  strokeWidth="6"
                  strokeDasharray={`${skill.level * 2.64} 264`}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <span className="back-percent">{skill.level}%</span>
            </div>
            <span className="back-badge">Expert Level</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;