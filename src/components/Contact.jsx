import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-page">

      {/* Header */}
      <div className="contact-header">
        <p className="contact-label">GET IN TOUCH</p>

        <h1>
          Let's <span>Connect</span>
        </h1>

        <div className="contact-line"></div>

        <p className="contact-description">
          Have a project idea, opportunity, or just want to say hello?
          <br />
          I'd love to hear from you.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="contact-cards">

        {/* Email */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaEnvelope />
          </div>

          <h2>Email Me</h2>

          <div className="small-line"></div>

          <p>
            Send me an email anytime!
          </p>

          <a
            href="mailto:shwetanaikshweta7@gmail.com"
            className="contact-info"
          >
            shwetanaikshweta7@gmail.com
          </a>

          <a
            href="mailto:shwetanaikshweta7@gmail.com"
            className="contact-button"
          >
            <FaEnvelope />
            Send Mail
            <FaArrowUp className="arrow" />
          </a>
        </div>

        {/* GitHub */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaGithub />
          </div>

          <h2>GitHub</h2>

          <div className="small-line"></div>

          <p>
            Explore my projects, code
            <br />
            and development work.
          </p>

          <a
            href="https://github.com/shwetanaikk"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info"
          >
            github.com/shwetanaikk
          </a>

          <a
            href="https://github.com/shwetanaikk"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <FaGithub />
            Visit GitHub
            <FaArrowUp className="arrow" />
          </a>
        </div>

        {/* LinkedIn */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaLinkedin />
          </div>

          <h2>LinkedIn</h2>

          <div className="small-line"></div>

          <p>
            Let's connect and grow
            <br />
            professionally.
          </p>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info"
          >
            View My LinkedIn Profile
          </a>

          <a
            href="https://www.linkedin.com/in/shweta-narasimha-naik-087122374"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            <FaLinkedin />
            View LinkedIn
            <FaArrowUp className="arrow" />
          </a>
        </div>

      </div>

      {/* Footer */}
      <div className="contact-footer">
        <div className="footer-line"></div>

        <div className="heart">♡</div>

        <div className="footer-line"></div>

        <p>
          © 2026 Shweta. Built with{" "}
          <span>React</span> & passion.
        </p>
      </div>

    </section>
  );
}

export default Contact;