import "./About.css";
import { useEffect, useRef, useState } from "react";

const SKILLS = [
  { icon: "☕", title: "Java & Spring Boot", hue: "violet", tags: ["Java", "Spring Boot", "Hibernate", "JPA"] },
  { icon: "⚛", title: "React & Frontend", hue: "cyan", tags: ["React", "Next.js", "TypeScript", "Tailwind"] },
  { icon: "⬡", title: "Microservices", hue: "pink", tags: ["Docker", "Kubernetes", "Kafka", "REST API"] },
  { icon: "▦", title: "Database & Tools", hue: "lemon", tags: ["PostgreSQL", "MySQL", "Redis", "Git"] },
];

const STATS = [
  { num: 2, label: "Years experience", suffix: "+" },
  { num: 10, label: "Projects shipped", suffix: "+" },
  { num: 8, label: "Technologies", suffix: "+" },
];

const MARQUEE = [
  "Java", "Spring Boot", "React", "Next.js", "TypeScript", "Docker",
  "Kubernetes", "Kafka", "PostgreSQL", "Redis", "AWS", "Tailwind",
];

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let current = 0;
    const step = Math.max(end / 50, 0.2);
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(Math.floor(current));
    }, 30);
    return () => clearInterval(timer);
  }, [end]);
  return <>{count}{suffix}</>;
}

function SkillCard({ icon, title, tags, hue }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <article className={`ab3-card ab3-card--${hue}`} onMouseMove={onMove}>
      <div className="ab3-card-icon">{icon}</div>
      <h3>{title}</h3>
      <ul>
        {tags.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </article>
  );
}

export default function About() {
  const audioRef = useRef(null);
  const photoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVoice = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error("Audio error:", err);
      alert("Audio not found. Check voice.mp3 in the public folder.");
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const end = () => setIsPlaying(false);
    audio.addEventListener("ended", end);
    return () => audio.removeEventListener("ended", end);
  }, []);

  /* 3D tilt on the photo card */
  const onTilt = (e) => {
    const el = photoRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
  };
  const resetTilt = () => {
    if (photoRef.current) photoRef.current.style.transform = "";
  };

  return (
    <section className="ab3" id="about">
      <audio ref={audioRef}>
        <source src="/voice.mp3" type="audio/mpeg" />
      </audio>

      <div className="ab3-aurora" aria-hidden="true">
        <span /><span /><span />
      </div>

      <div className="ab3-wrap">
        <div className="ab3-hero">
          <div className="ab3-copy">
            <p className="ab3-status">
              <i /> Open to work · Kerala, India
            </p>

            <h2 className="ab3-title">
              I build things
              <br />
              <span>backend to frontend.</span>
            </h2>

            <p className="ab3-bio">
              Hi, I'm <b>Pranav</b>, a Java and React developer. I design
              Spring Boot services that scale, then wrap them in fast,
              polished interfaces with React and Next.js.
            </p>

            <div className="ab3-actions">
              <button type="button" className="ab3-play" onClick={toggleVoice} aria-pressed={isPlaying}>
                <span className={`ab3-wave ${isPlaying ? "is-on" : ""}`} aria-hidden="true">
                  <i /><i /><i /><i />
                </span>
                {isPlaying ? "Pause intro" : "Play intro"}
              </button>
              <a href="#contact" className="ab3-ghost">Let's talk</a>
            </div>

            <dl className="ab3-stats">
              {STATS.map((s) => (
                <div key={s.label}>
                  <dd><Counter end={s.num} suffix={s.suffix} /></dd>
                  <dt>{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          <div className="ab3-visual" onMouseMove={onTilt} onMouseLeave={resetTilt}>
            <div className="ab3-photo" ref={photoRef}>
              <img src="/img1.JPG" alt="Pranav R K" />
              <div className="ab3-name">
                <strong>Pranav R K</strong>
                <span>Full stack developer</span>
              </div>
            </div>
            <span className="ab3-float ab3-float--a">☕ Spring Boot</span>
            <span className="ab3-float ab3-float--b">⚛ React</span>
            <span className="ab3-float ab3-float--c">🐳 Docker</span>
          </div>
        </div>

        <div className="ab3-marquee" aria-hidden="true">
          <div className="ab3-track">
            {[...MARQUEE, ...MARQUEE].map((t, i) => <span key={i}>{t}</span>)}
          </div>
        </div>

        <div className="ab3-grid">
          {SKILLS.map((s) => <SkillCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}