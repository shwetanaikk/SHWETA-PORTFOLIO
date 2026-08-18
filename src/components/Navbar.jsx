import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        Shweta.
      </Link>

      {/* Desktop Navigation */}
      <div className="navbar-links">

        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/certificates">Certificates</Link>
        <Link to="/contact">Contact</Link>

        <a
          href="https://github.com/shwetanaikk"
          target="_blank"
          rel="noreferrer"
          className="navbar-icon"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/shweta-narasimha-naik-087122374"
          target="_blank"
          rel="noreferrer"
          className="navbar-icon"
        >
          <FaLinkedin />
        </a>

      </div>

      {/* Mobile Menu Button */}
      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

        <Link to="/about" onClick={closeMenu}>
          About
        </Link>

        <Link to="/education" onClick={closeMenu}>
          Education
        </Link>

        <Link to="/skills" onClick={closeMenu}>
          Skills
        </Link>

        <Link to="/projects" onClick={closeMenu}>
          Projects
        </Link>

        <Link to="/certificates" onClick={closeMenu}>
          Certificates
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>

        <div className="mobile-socials">

          <a
            href="https://github.com/shwetanaikk"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/shweta-narasimha-naik-087122374"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;