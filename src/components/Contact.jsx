import React, { useState, useRef } from "react";
import "./Contact.css";

function Contact() {
  const [hoveredCard, setHoveredCard] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleSectionMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotation({
      x: ((centerY - y) / centerY) * 3,
      y: ((x - centerX) / centerX) * 5,
    });
  };

  const handleSectionMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const handleCardMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    alert(`${type} copied!`);
  };

  return (
    <section
      className="contact-section"
      id="contact"
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
    >
      <div className="contact-container">

        {/* HEADER */}
        <div className="contact-header">
          <h2 className="contact-title">
            Let's <span>Connect</span>
          </h2>
          <p className="contact-subtitle">
            I'm open to opportunities and collaborations
          </p>
        </div>

        {/* CARD */}
        <div
          ref={cardRef}
          className={`contact-card ${hoveredCard ? "hovered" : ""}`}
          onMouseEnter={() => setHoveredCard(true)}
          onMouseLeave={() => setHoveredCard(false)}
          onMouseMove={handleCardMouseMove}
        >

          {/* Glow */}
          <div
            className="card-glow"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56,189,248,0.2), transparent 70%)`,
            }}
          />

          {/* CONTACT DETAILS */}
          <div className="contact-details">

            {/* EMAIL */}
            <div className="contact-item">
              <div className="contact-item-icon">📧</div>
              <div>
                <span>Email</span>
                <div>
                  <a href="mailto:pranavrkofficial@gmail.com">
                    pranavrkofficial@gmail.com
                  </a>
                  <button onClick={() => copyToClipboard("pranavrkofficial@gmail.com", "Email")}>
                    Copy
                  </button>
                </div>
              </div>
            </div>

            {/* PHONE */}
            <div className="contact-item">
              <div className="contact-item-icon">📱</div>
              <div>
                <span>Phone</span>
                <div>
                  <a href="tel:+918547638700">
                    +91 85476 38700
                  </a>
                  <button onClick={() => copyToClipboard("+918547638700", "Phone")}>
                    Copy
                  </button>
                </div>
              </div>
            </div>

            {/* LINKEDIN */}
            <div className="contact-item">
              <div className="contact-item-icon">💼</div>
              <div>
                <span>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/pranav-rk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  pranav-rk
                </a>
              </div>
            </div>

          </div>

          {/* BUTTONS */}
          <div className="contact-buttons">
            <a href="mailto:pranavrkofficial@gmail.com" className="contact-btn primary-btn">
              📧 Email
            </a>

            <a
              href="https://github.com/Pranavrkvtk"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn github-btn"
            >
              💻 GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/pranav-rk/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn linkedin-btn"
            >
              🔗 LinkedIn
            </a>
          </div>

          {/* STATUS */}
          <div className="availability-status">
            <span>🟢 Available for work</span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;