import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={navbar}>
      {/* Logo */}
      <Link to="/" style={logo}>
        Shweta<span style={logoSpan}>.</span>
      </Link>

      {/* Navigation */}
      <div style={navLinks}>
        <Link to="/about" style={link}>
          About
        </Link>

        <Link to="/education" style={link}>
          Education
        </Link>

        <Link to="/skills" style={link}>
          Skills
        </Link>

        <Link to="/projects" style={link}>
          Projects
        </Link>

        <Link to="/certificates" style={link}>
          Certificates
        </Link>

        <Link to="/contact" style={link}>
          Contact
        </Link>

        {/* GitHub */}
        <a
          href="https://github.com/shwetanaikk"
          target="_blank"
          rel="noreferrer"
          style={icon}
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/shweta-narasimha-naik-087122374"
          target="_blank"
          rel="noreferrer"
          style={icon}
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}


/* ================================
   NAVBAR
================================ */

const navbar = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "82px",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "0 5%",

  background: "rgba(7, 15, 35, 0.92)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",

  borderBottom: "1px solid rgba(56, 189, 248, 0.12)",

  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",

  boxSizing: "border-box",

  zIndex: 1000,
};


/* ================================
   LOGO
================================ */

const logo = {
  color: "#38bdf8",
  textDecoration: "none",

  fontSize: "30px",
  fontWeight: "800",
  letterSpacing: "-1px",

  whiteSpace: "nowrap",

  textShadow: "0 0 20px rgba(56, 189, 248, 0.25)",
};

const logoSpan = {
  color: "#818cf8",
};


/* ================================
   NAVIGATION LINKS
================================ */

const navLinks = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",

  gap: "28px",

  marginLeft: "30px",

  flex: 1,

  whiteSpace: "nowrap",
};


/* ================================
   LINKS
================================ */

const link = {
  color: "#e2e8f0",
  textDecoration: "none",

  fontSize: "16px",
  fontWeight: "600",

  transition: "all 0.25s ease",
};


/* ================================
   SOCIAL ICONS
================================ */

const icon = {
  color: "#f8fafc",

  fontSize: "22px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "36px",
  height: "36px",

  textDecoration: "none",

  transition: "all 0.25s ease",
};

export default Navbar;