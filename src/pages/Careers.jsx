import { useState } from "react";
import { Link } from "react-router-dom";
import { careers } from "../data";
import "./Careers.css";

const DOMAINS = ["All", "Technology", "Design", "Finance", "Healthcare", "Engineering", "Business", "Media", "Science"];

const allCareers = [
  ...careers,
  { id: 10, title: "Cybersecurity Analyst", icon: "🛡️", domain: "Technology", demand: "High Demand", growth: "+35%", skills: ["Network Security", "Ethical Hacking", "Risk Analysis", "Python"], color: "#0EB8A4" },
  { id: 11, title: "Graphic Designer", icon: "🖌️", domain: "Design", demand: "Stable", growth: "+10%", skills: ["Adobe Suite", "Typography", "Branding", "Illustration"], color: "#6B21E8" },
  { id: 12, title: "Investment Banker", icon: "💹", domain: "Finance", demand: "Stable", growth: "+14%", skills: ["Financial Modeling", "Valuation", "Excel", "Communication"], color: "#F59E0B" },
];

const demandColors = {
  "High Demand": { bg: "rgba(14,184,164,0.1)", color: "#0EB8A4", border: "rgba(14,184,164,0.2)" },
  "Growing": { bg: "rgba(107,33,232,0.1)", color: "#8B5CF6", border: "rgba(107,33,232,0.2)" },
  "Stable": { bg: "rgba(245,158,11,0.1)", color: "#F59E0B", border: "rgba(245,158,11,0.2)" },
};

export default function Careers() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = allCareers.filter(c => {
    const matchesDomain = activeFilter === "All" || c.domain === activeFilter;
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.domain.toLowerCase().includes(search.toLowerCase());
    return matchesDomain && matchesSearch;
  });

  return (
    <div className="careers-page">
      {/* HEADER */}
      <div className="careers-header">
        <div className="ch-bg">
          <div className="ch-orb ch-orb-1" />
          <div className="ch-orb ch-orb-2" />
        </div>
        <div className="container ch-content">
          <span className="section-badge">Career Explorer</span>
          <h1>Find Your <em className="gradient-text">Perfect Path</em></h1>
          <p>Browse 150+ career profiles with detailed skill requirements, salary ranges, growth trends, and roadmaps.</p>

          <div className="careers-search">
            <span className="cs-icon">🔍</span>
            <input
              type="text"
              placeholder="Search careers, domains..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="cs-input"
            />
          </div>
        </div>
      </div>

      <div className="container careers-body">
        {/* FILTERS */}
        <div className="careers-filters">
          {DOMAINS.map(d => (
            <button
              key={d}
              className={`cf-btn ${activeFilter === d ? "cf-btn--active" : ""}`}
              onClick={() => setActiveFilter(d)}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="careers-count">
          Showing <strong>{filtered.length}</strong> career{filtered.length !== 1 ? "s" : ""}
          {search && <span> for "<em>{search}</em>"</span>}
          {activeFilter !== "All" && <span> in <strong>{activeFilter}</strong></span>}
        </div>

        {/* CAREER GRID */}
        <div className="careers-grid">
          {filtered.map(career => {
            const demand = demandColors[career.demand] || demandColors["Stable"];
            return (
              <div
                key={career.id}
                className={`career-card ${hoveredId === career.id ? "career-card--hovered" : ""}`}
                onMouseEnter={() => setHoveredId(career.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="career-card-glow" style={{ background: `radial-gradient(circle at 30% 30%, ${career.color}12, transparent 60%)` }} />

                <div className="cc-top">
                  <div className="cc-icon" style={{ background: `${career.color}15`, border: `1px solid ${career.color}25` }}>
                    {career.icon}
                  </div>
                  <div className="cc-badges">
                    <span className="cc-demand" style={{ background: demand.bg, color: demand.color, border: `1px solid ${demand.border}` }}>
                      {career.demand}
                    </span>
                  </div>
                </div>

                <h3 className="cc-title">{career.title}</h3>
                <span className="cc-domain">{career.domain}</span>

                <div className="cc-growth">
                  <span>Market Growth</span>
                  <span className="cc-growth-val" style={{ color: career.color }}>{career.growth}</span>
                </div>

                <div className="cc-skills">
                  {career.skills.map(s => (
                    <span key={s} className="cc-skill-tag">{s}</span>
                  ))}
                </div>

                <div className="cc-footer">
                  <Link to="/dashboard" className="cc-explore-btn" style={{ background: `${career.color}12`, color: career.color, border: `1px solid ${career.color}20` }}>
                    Explore Path →
                  </Link>
                  <Link to="/assessment" className="cc-match-btn">
                    Check My Match
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="careers-empty">
            <div className="ce-icon">🔍</div>
            <h3>No careers found</h3>
            <p>Try searching with different keywords or removing the domain filter.</p>
            <button className="cta-primary" onClick={() => { setSearch(""); setActiveFilter("All"); }}>
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="careers-bottom-cta">
          <div className="cbc-inner">
            <h3>Not sure which career fits you?</h3>
            <p>Take the SPARK Assessment and get 5 personalised career matches based on your skills, personality, and interests.</p>
            <Link to="/assessment" className="cta-primary">Take Free Assessment →</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
