import { useEffect, useRef, useState } from "react";
import "./Hero.css";

const PHRASES = [
  "I am a Fullstack Developer",
  "Java Backend Developer",
  "React & Next.js Engineer",
  "Microservices Architect",
];

function useTypewriter(phrases) {
  const [text, setText] = useState("");
  const state = useRef({ pi: 0, ci: 0, deleting: false });

  useEffect(() => {
    const type = () => {
      const current = phrases[state.current.pi];
      const { ci, deleting } = state.current;

      if (!deleting) {
        const newText = current.slice(0, ci + 1);
        setText(newText);
        state.current.ci++;

        if (newText === current) {
          state.current.deleting = true;
          setTimeout(type, 1500);
          return;
        }
      } else {
        const newText = current.slice(0, ci - 1);
        setText(newText);
        state.current.ci--;

        if (newText === "") {
          state.current.deleting = false;
          state.current.pi =
            (state.current.pi + 1) % phrases.length;
        }
      }

      setTimeout(type, deleting ? 50 : 100);
    };

    type();
  }, [phrases]);

  return text;
}

function SkillBar({ label, pct, color }) {
  return (
    <div className="skill-item">
      <span className="skill-label">{label}</span>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
    </div>
  );
}

function Cube({ className }) {
  return (
    <div className={`cube ${className}`}>
      {["front", "back", "right-f", "left-f", "top-f", "bot-f"].map((f) => (
        <div key={f} className={`face ${f}`} />
      ))}
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(PHRASES);
  const cardRef = useRef(null);
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="hero" id="home">
      <div className="bg-grid" />
      <div className="noise" />
      <div className="bg-split" />

      {/* LEFT */}
      <div className="left">
        <div className="badge">
          <div className="badge-dot" />
          <span>Available for work</span>
        </div>

        <h1>
          <span className="name-line">Hi, I'm</span>
          <span className="name-grad">Pranav R K</span>
        </h1>

        <div className="terminal">
          <div className="t-bar">
            <div className="t-dot" style={{ background: "#ff5f57" }} />
            <div className="t-dot" style={{ background: "#febc2e" }} />
            <div className="t-dot" style={{ background: "#28c840" }} />
          </div>

          <div className="t-line">~ portfolio $</div>

          <div>
            <span className="t-prompt">▶ </span>
            <span className="t-text">{typed}</span>
            <span className="t-cursor" />
          </div>
        </div>

        <p className="desc">
          Building scalable microservices & modern web apps.
        </p>

        <div className="stats">
          {[
            { num: "2+", label: "YRS EXPERIENCE" },
            { num: "10+", label: "PROJECTS" },
            { num: "100%", label: "SATISFACTION" },
          ].map(({ num, label }) => (
            <div key={label} className="s-item">
              <span className="s-num">{num}</span>
              <span className="s-label">{label}</span>
            </div>
          ))}
        </div>

        <div className="btns">
          <a href="#contact" className="btn-p">Hire me</a>
          <a href="#projects" className="btn-g">View projects</a>
          <a href="/doc1.pdf" download className="btn-p">
            Download Resume
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="right">
        <div className="scene3d">

          <div
            ref={cardRef}
            className={`card-3d ${flipped ? "is-flipped" : ""}`}
          >
            {/* FRONT */}
            <div className="card-face card-front">
              <div className="avatar-hex">
                <img src="/img1.JPG" alt="Pranav" />
              </div>

              <div className="card-name">Pranav R K</div>
              <div className="card-role">
                JAVA · REACT · MICROSERVICES
              </div>
            </div>

            {/* BACK */}
            <div className="card-face card-back">
              <div style={{ fontSize: 14 }}>Skills</div>

              <SkillBar
                label="Java / Spring Boot"
                pct={92}
                color="linear-gradient(90deg,#6366f1,#8b5cf6)"
              />
              <SkillBar
                label="React"
                pct={85}
                color="linear-gradient(90deg,#06b6d4,#3b82f6)"
              />
              <SkillBar
                label="AWS"
                pct={78}
                color="linear-gradient(90deg,#ec4899,#f59e0b)"
              />
            </div>
          </div>

          <Cube className="cube-a" />
          <Cube className="cube-b" />
          <Cube className="cube-c" />
        </div>
      </div>
    </section>
  );
}