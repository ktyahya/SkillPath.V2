import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow" />
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-icon">◈</span>
              Skill<em>Path</em>
            </Link>
            <p>India's most modern career guidance platform — built for the next generation of professionals.</p>
            <div className="footer__social">
              {["𝕏", "in", "ig", "yt"].map(s => (
                <a key={s} href="#" className="footer__social-btn">{s}</a>
              ))}
            </div>
          </div>

          <div className="footer__links-group">
            <h4>Platform</h4>
            <ul>
              <li><Link to="/assessment">SPARK Assessment</Link></li>
              <li><Link to="/careers">Career Explorer</Link></li>
              <li><Link to="/dashboard">My Dashboard</Link></li>
              <li><Link to="/login">Login / Register</Link></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/">Our Mentors</Link></li>
              <li><Link to="/">For Colleges</Link></li>
              <li><Link to="/">Blog</Link></li>
            </ul>
          </div>

          <div className="footer__links-group">
            <h4>Support</h4>
            <ul>
              <li><Link to="/">Contact Us</Link></li>
              <li><Link to="/">FAQs</Link></li>
              <li><Link to="/">Privacy Policy</Link></li>
              <li><Link to="/">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2025 SkillPath. All rights reserved. Made with ♥ in India.</p>
          <p className="footer__tag">Final Year Project — Computer Science</p>
        </div>
      </div>
    </footer>
  );
}
