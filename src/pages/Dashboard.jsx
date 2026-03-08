import { useState } from "react";
import { Link } from "react-router-dom";
import { skillGapData } from "../data";
import "./Dashboard.css";

const MOCK_USER = { name: "Yahya", level: 4, xp: 240, maxXp: 300, college: "PSNA College of Engineering and Technology", year: "4th Year", stream: "Information Technology" };

const topCareers = [
  { title: "UX Designer", match: 94, icon: "🎨", color: "#0EB8A4", tag: "Best Match" },
  { title: "Product Manager", match: 87, icon: "🚀", color: "#6B21E8", tag: "Strong Fit" },
  { title: "Content Strategist", match: 79, icon: "✍️", color: "#F59E0B", tag: "Good Fit" },
];

const actions = [
  { icon: "📋", title: "Download Career Report", desc: "35-page personalised PDF", cta: "Download", color: "#0EB8A4" },
  { icon: "🎯", title: "Book a Mentor Session", desc: "1-on-1 with a UX expert", cta: "Book Now", color: "#6B21E8" },
  { icon: "📚", title: "Explore Courses", desc: "Courses aligned to your path", cta: "Explore", color: "#F59E0B" },
];

const badges = [
  { icon: "⚡", label: "Quick Starter", desc: "Completed assessment", earned: true },
  { icon: "🎯", label: "Focused", desc: "Answered 5/5 questions", earned: true },
  { icon: "🔥", label: "On Fire", desc: "3x answer streak", earned: true },
  { icon: "📊", label: "Analyst", desc: "Checked skill gap", earned: false },
  { icon: "🤝", label: "Mentored", desc: "Book a session", earned: false },
  { icon: "🏆", label: "Career Ready", desc: "Complete all steps", earned: false },
];

function SkillGapBar({ name, userLevel, required, category }) {
  const gap = required - userLevel;
  const isOk = userLevel >= required;
  return (
    <div className="gap-bar-item">
      <div className="gap-bar-header">
        <div className="gap-bar-meta">
          <span className="gap-bar-name">{name}</span>
          <span className="gap-bar-category">{category}</span>
        </div>
        <div className="gap-bar-nums">
          <span className="gap-user-num" style={{ color: isOk ? "#0EB8A4" : "var(--text-secondary)" }}>{userLevel}%</span>
          <span className="gap-slash">/</span>
          <span className="gap-required-num">{required}%</span>
        </div>
      </div>
      <div className="gap-bar-track">
        <div className="gap-bar-required" style={{ width: `${required}%` }} />
        <div className={`gap-bar-user ${isOk ? "gap-bar-user--ok" : ""}`} style={{ width: `${userLevel}%` }} />
      </div>
      <div className="gap-bar-footer">
        {isOk ? (
          <span className="gap-status gap-status--ok">✓ Meets requirement</span>
        ) : (
          <span className="gap-status gap-status--gap">↑ {gap}% gap to close</span>
        )}
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const xpPct = (MOCK_USER.xp / MOCK_USER.maxXp) * 100;

  return (
    <div className="dashboard-page">


      {/* HEADER */}
      <div className="dashboard-header">
        <div className="dh-bg" />
        <div className="container">
          <div className="dh-inner">
            <div className="dh-user">
              <div className="dh-avatar">Y</div>
              <div className="dh-info">
                <h1>Welcome back, <em className="gradient-text">{MOCK_USER.name.split(' ')[0]}</em> 👋</h1>
                <p>{MOCK_USER.college} · {MOCK_USER.stream} · {MOCK_USER.year}</p>
              </div>
            </div>
            <div className="dh-level-card">
              <div className="dlc-top">
                <div className="dlc-level-badge">
                  <span>LVL</span>
                  <span>{MOCK_USER.level}</span>
                </div>
                <div className="dlc-xp-info">
                  <span>Level {MOCK_USER.level} Explorer</span>
                  <span>{MOCK_USER.xp} / {MOCK_USER.maxXp} XP</span>
                </div>
              </div>
              <div className="dlc-bar">
                <div className="dlc-bar-fill" style={{ width: `${xpPct}%` }} />
              </div>
            </div>
          </div>

          {/* TABS */}
          <div className="dashboard-tabs">
            {["overview", "skill-gap", "badges"].map(tab => (
              <button key={tab} className={`dtab ${activeTab === tab ? "dtab--active" : ""}`} onClick={() => setActiveTab(tab)}>
                {tab === "overview" && "📋 Overview"}
                {tab === "skill-gap" && "📊 Skill Gap Tracker"}
                {tab === "badges" && "🏆 Badges"}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container dashboard-body">
        {activeTab === "overview" && <OverviewTab />}
        {activeTab === "skill-gap" && <SkillGapTab />}
        {activeTab === "badges" && <BadgesTab />}
      </div>
    </div>
  );
}

function OverviewTab() {
  return (
    <div className="overview-tab">
      {/* CAREER MATCHES */}
      <section className="db-section">
        <div className="db-section-header">
          <h2>Your Top Career Matches</h2>
          <Link to="/careers" className="db-link">View all careers →</Link>
        </div>
        <div className="career-match-cards">
          {topCareers.map((c, i) => (
            <div key={c.title} className="cm-card" style={{ borderColor: i === 0 ? `${c.color}30` : undefined }}>
              {i === 0 && <div className="cm-glow" style={{ background: `radial-gradient(circle, ${c.color}08, transparent)` }} />}
              <div className="cm-top">
                <div className="cm-icon" style={{ background: `${c.color}15` }}>{c.icon}</div>
                <div className="cm-tag" style={{ color: c.color, background: `${c.color}12`, borderColor: `${c.color}25` }}>{c.tag}</div>
              </div>
              <h3>{c.title}</h3>
              <div className="cm-match-row">
                <div className="cm-bar-track">
                  <div className="cm-bar-fill" style={{ width: `${c.match}%`, background: c.color }} />
                </div>
                <span style={{ color: c.color }}>{c.match}%</span>
              </div>
              <div className="cm-actions">
                <button className="cm-btn-primary" style={{ background: c.color }}>Explore Path</button>
                <button className="cm-btn-secondary">View Skills</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="db-section">
        <div className="db-section-header">
          <h2>Next Steps</h2>
        </div>
        <div className="actions-grid">
          {actions.map(a => (
            <div key={a.title} className="action-card">
              <div className="ac-icon" style={{ background: `${a.color}15`, border: `1px solid ${a.color}25` }}>{a.icon}</div>
              <div className="ac-text">
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
              <button className="ac-btn" style={{ color: a.color, borderColor: `${a.color}25`, background: `${a.color}08` }}>{a.cta} →</button>
            </div>
          ))}
        </div>
      </section>

      {/* SPARK SUMMARY */}
      <section className="db-section">
        <div className="db-section-header">
          <h2>Your SPARK Profile Summary</h2>
          <Link to="/assessment" className="db-link">Retake test →</Link>
        </div>
        <div className="spark-summary-grid">
          {[
            { dim: "Skills", score: 78, color: "#0EB8A4", desc: "Strong in technical problem-solving" },
            { dim: "Passion", score: 85, color: "#6B21E8", desc: "Creative & design-oriented drive" },
            { dim: "Aptitude", score: 72, color: "#F59E0B", desc: "Logical reasoning & analysis" },
            { dim: "Role-fit", score: 80, color: "#F43F5E", desc: "Best in collaborative settings" },
            { dim: "Knowledge", score: 68, color: "#8B5CF6", desc: "Strong CS & tech fundamentals" },
          ].map(s => (
            <div key={s.dim} className="spark-sum-card">
              <div className="ssc-header">
                <span className="ssc-dim" style={{ color: s.color }}>{s.dim}</span>
                <span className="ssc-score" style={{ color: s.color }}>{s.score}%</span>
              </div>
              <div className="ssc-bar-track">
                <div className="ssc-bar-fill" style={{ width: `${s.score}%`, background: s.color }} />
              </div>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function SkillGapTab() {
  const [selectedCareer, setSelectedCareer] = useState("UX Designer");

  const avgGap = Math.round(skillGapData.skills.reduce((sum, s) => sum + Math.max(0, s.required - s.userLevel), 0) / skillGapData.skills.length);
  const skillsMet = skillGapData.skills.filter(s => s.userLevel >= s.required).length;

  return (
    <div className="skillgap-tab">
      <div className="sg-header-card">
        <div className="sg-hc-left">
          <h2>Skill Gap Tracker</h2>
          <p>See exactly how your current skills compare to what your target career requires. Know where to focus.</p>
        </div>
        <div className="sg-hc-stats">
          <div className="sg-stat">
            <span className="sg-stat-val" style={{ color: "#0EB8A4" }}>{skillsMet}/{skillGapData.skills.length}</span>
            <span className="sg-stat-label">Skills Met</span>
          </div>
          <div className="sg-stat">
            <span className="sg-stat-val" style={{ color: "#F43F5E" }}>{avgGap}%</span>
            <span className="sg-stat-label">Avg Gap</span>
          </div>
        </div>
      </div>

      <div className="sg-career-selector">
        <span className="sg-cs-label">Showing gap for:</span>
        {topCareers.map(c => (
          <button key={c.title}
            className={`sg-career-btn ${selectedCareer === c.title ? "sg-career-btn--active" : ""}`}
            onClick={() => setSelectedCareer(c.title)}
            style={selectedCareer === c.title ? { borderColor: c.color, color: c.color, background: `${c.color}10` } : {}}
          >
            {c.icon} {c.title}
          </button>
        ))}
      </div>

      <div className="sg-legend">
        <div className="sg-legend-item"><div className="sg-legend-dot sg-legend-dot--required" /><span>Required Level</span></div>
        <div className="sg-legend-item"><div className="sg-legend-dot sg-legend-dot--user" /><span>Your Level</span></div>
      </div>

      <div className="gap-bars-list">
        {skillGapData.skills.map(skill => (
          <SkillGapBar key={skill.name} {...skill} />
        ))}
      </div>

      <div className="sg-recommendation">
        <div className="sg-rec-icon">💡</div>
        <div className="sg-rec-content">
          <h4>SkillPath Recommendation</h4>
          <p>Focus on <strong>User Research</strong> and <strong>Design Thinking</strong> — these have the biggest gaps and are core requirements for {selectedCareer}. Consider enrolling in a UX bootcamp or taking Google's UX Design Certificate on Coursera.</p>
        </div>
        <button className="sg-rec-btn">Find Courses →</button>
      </div>
    </div>
  );
}

function BadgesTab() {
  return (
    <div className="badges-tab">
      <div className="badges-intro">
        <h2>Your Achievements</h2>
        <p>Earn badges by completing assessments, booking mentors, and exploring careers.</p>
        <div className="badges-progress-info">
          <span>3 / 6 badges earned</span>
          <div className="bp-bar">
            <div className="bp-bar-fill" style={{ width: "50%" }} />
          </div>
        </div>
      </div>
      <div className="badges-grid">
        {badges.map(b => (
          <div key={b.label} className={`badge-card ${b.earned ? "badge-card--earned" : "badge-card--locked"}`}>
            <div className="badge-icon">{b.icon}</div>
            <h4>{b.label}</h4>
            <p>{b.desc}</p>
            {b.earned ? <span className="badge-status badge-status--earned">✓ Earned</span> : <span className="badge-status badge-status--locked">🔒 Locked</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
