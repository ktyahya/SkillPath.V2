import { Link, useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-page">
      <div className="nf-bg">
        <div className="nf-orb nf-orb-1" />
        <div className="nf-orb nf-orb-2" />
        <div className="nf-grid" />
      </div>

      <div className="nf-content">
        <div className="nf-code">
          <span className="nf-4">4</span>
          <span className="nf-0">0</span>
          <span className="nf-4">4</span>
        </div>

        <div className="nf-icon">🗺️</div>
        <h1>Path Not Found</h1>
        <p>
          Looks like this career path doesn't exist — yet.<br />
          Let's get you back on track.
        </p>

        <div className="nf-actions">
          <Link to="/" className="cta-primary">
            ← Back to Home
          </Link>
          <button className="nf-back-btn" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>

        <div className="nf-suggestions">
          <span>Or explore:</span>
          <Link to="/careers">Career Explorer</Link>
          <Link to="/assessment">SPARK Assessment</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
    </div>
  );
}
