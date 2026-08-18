import React from "react";

function Hero() {
  return (
    <section className="hero">

      {/* LEFT SIDE - PROFILE */}
      <div className="hero-left">

        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>

        <div className="profile-glow">
          <img src="/profile.jpg" alt="Shweta Naik" />
        </div>

        {/* Developer Card */}
        <div className="floating-card developer-card">
          <div className="floating-icon">💻</div>
          <div>
            <strong>Developer</strong>
            <span>Building the future</span>
          </div>
        </div>

        {/* Student Card */}
        <div className="floating-card student-card">
          <div className="floating-icon">✨</div>
          <div>
            <strong>CSE Student</strong>
            <span>Learning & Growing</span>
          </div>
        </div>

      </div>


      {/* RIGHT SIDE - CONTENT */}
      <div className="hero-content">

        <p className="hello-text">
          👋 &nbsp;Hello, I'm
        </p>

        <h1 className="hero-name">
          Shweta <span>Naik</span>
        </h1>

        <div className="name-line"></div>

        <h2 className="hero-title">
          Computer Science Engineering
        </h2>

        <h3 className="hero-subtitle">
          Student <span>&</span> Developer
        </h3>

        <p className="hero-description">
          Passionate about creating modern web applications,
          solving real-world problems, and continuously improving
          my skills through technology.
        </p>

        {/* Skills */}
        <div className="hero-skills">

          <div className="skill-badge">
            <span>☕</span>
            Java
          </div>

          <div className="skill-badge">
            <span>🐍</span>
            Python
          </div>

          <div className="skill-badge">
            <span>⚙️</span>
            C++
          </div>

          <div className="skill-badge">
            <span>⚛️</span>
            React
          </div>

        </div>

        {/* Buttons */}
        <div className="hero-buttons">

          <a href="/projects" className="primary-btn">
            View My Projects
            <span>→</span>
          </a>

          <a href="/contact" className="secondary-btn">
            Contact Me
            <span>→</span>
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;