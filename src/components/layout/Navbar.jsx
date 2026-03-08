import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/assessment", label: "Assessment" },
    { to: "/careers", label: "Careers" },
    { to: "/dashboard", label: "Dashboard" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">◈</span>
          <span className="navbar__logo-text">Skill<em>Path</em></span>
        </Link>

        <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`navbar__link ${location.pathname === link.to ? "navbar__link--active" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <Link to="/login" className="btn-secondary">
            Logout
          </Link>
          <Link to="/assessment" className="btn-primary">
            Take Free Test <span>→</span>
          </Link>
          <button
            className={`navbar__burger ${menuOpen ? "navbar__burger--open" : ""}`}
            onClick={() => setMenuOpen(m => !m)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}
