import { useState } from "react";
import { assessmentQuestions } from "../data";
import { Link } from "react-router-dom";
import "./Assessment.css";

const DIMENSIONS = [
  { key: "Interest", color: "#0EB8A4", icon: "🎯" },
  { key: "Personality", color: "#6B21E8", icon: "🧬" },
  { key: "Aptitude", color: "#F59E0B", icon: "⚡" },
  { key: "Orientation", color: "#F43F5E", icon: "🧭" },
  { key: "EQ", color: "#8B5CF6", icon: "💡" },
];

export default function Assessment() {
  const [stage, setStage] = useState("intro"); // intro | quiz | result
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);
  const [xp, setXp] = useState(0);
  const [showXpAnim, setShowXpAnim] = useState(false);
  const [streak, setStreak] = useState(0);

  const q = assessmentQuestions[current];
  const progress = ((current) / assessmentQuestions.length) * 100;
  const totalXp = assessmentQuestions.reduce((s, q) => s + q.xp, 0);

  function handleSelect(optId) {
    if (answers[q.id]) return;
    setSelected(optId);
  }

  function handleNext() {
    if (!selected) return;
    const newAnswers = { ...answers, [q.id]: selected };
    setAnswers(newAnswers);

    // XP + streak
    const gained = q.xp + (streak >= 2 ? Math.floor(q.xp * 0.2) : 0);
    setXp(x => x + gained);
    setStreak(s => s + 1);
    setShowXpAnim(true);
    setTimeout(() => setShowXpAnim(false), 1200);

    if (current < assessmentQuestions.length - 1) {
      setTimeout(() => {
        setCurrent(c => c + 1);
        setSelected(null);
      }, 400);
    } else {
      setTimeout(() => setStage("result"), 600);
    }
  }

  const xpPercent = Math.round((xp / totalXp) * 100);

  if (stage === "intro") return <IntroScreen onStart={() => setStage("quiz")} />;
  if (stage === "result") return <ResultScreen xp={xp} totalXp={totalXp} answers={answers} />;

  return (
    <div className="assessment-page">
      {/* TOP BAR */}
      <div className="assessment-topbar">
        <div className="atb-left">
          <Link to="/" className="atb-back">← Exit</Link>
          <div className="atb-title">
            <span className="atb-dim-badge" style={{ background: `${q.dimensionColor}15`, color: q.dimensionColor, borderColor: `${q.dimensionColor}30` }}>
              {DIMENSIONS.find(d => d.key === q.dimension)?.icon} {q.dimension}
            </span>
          </div>
        </div>

        <div className="atb-center">
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="progress-label">{current + 1} / {assessmentQuestions.length}</span>
        </div>

        <div className="atb-right">
          {streak >= 2 && (
            <div className="streak-badge">
              🔥 {streak} Streak
            </div>
          )}
          <div className="xp-display">
            <span className="xp-icon">⚡</span>
            <span>{xp} XP</span>
            {showXpAnim && <div className="xp-pop">+{q.xp} XP!</div>}
          </div>
        </div>
      </div>

      {/* XP PROGRESS BAR */}
      <div className="xp-bar-wrap">
        <div className="xp-bar-fill" style={{ width: `${xpPercent}%` }} />
      </div>

      <div className="assessment-body">
        {/* SIDEBAR */}
        <div className="assessment-sidebar">
          <div className="sidebar-title">SPARK Dimensions</div>
          {DIMENSIONS.map((d, i) => {
            const answered = assessmentQuestions.slice(0, current + 1).some(q => q.dimension === d.key && answers[q.id]);
            const active = q.dimension === d.key;
            return (
              <div key={d.key} className={`sidebar-dim ${active ? "sidebar-dim--active" : ""} ${answered ? "sidebar-dim--done" : ""}`}
                style={active ? { borderColor: d.color, background: `${d.color}08` } : {}}>
                <span className="sidebar-dim-icon">{d.icon}</span>
                <span className="sidebar-dim-label" style={active ? { color: d.color } : {}}>{d.key}</span>
                {answered && <span className="sidebar-dim-check">✓</span>}
              </div>
            );
          })}

          <div className="sidebar-level">
            <div className="level-badge">
              <span>LVL</span>
              <span className="level-num">{Math.floor(xp / 60) + 1}</span>
            </div>
            <div className="level-info">
              <span>Level {Math.floor(xp / 60) + 1}</span>
              <div className="level-bar">
                <div className="level-bar-fill" style={{ width: `${(xp % 60) / 60 * 100}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* QUESTION */}
        <div className="assessment-main">
          <div className="question-card">
            <div className="question-num">Question {current + 1}</div>
            <h2 className="question-text">{q.question}</h2>

            <div className="options-grid">
              {q.options.map(opt => (
                <button
                  key={opt.id}
                  className={`option-btn ${selected === opt.id ? "option-btn--selected" : ""} ${answers[q.id] ? "option-btn--locked" : ""}`}
                  onClick={() => handleSelect(opt.id)}
                  style={selected === opt.id ? { borderColor: q.dimensionColor, background: `${q.dimensionColor}10` } : {}}
                >
                  <div className="option-icon">{opt.icon || "○"}</div>
                  <div className="option-content">
                    <span className="option-text">{opt.text}</span>
                    {opt.tags.length > 0 && (
                      <div className="option-tags">
                        {opt.tags.map(t => <span key={t} className="opt-tag">{t}</span>)}
                      </div>
                    )}
                  </div>
                  <div className="option-radio" style={selected === opt.id ? { borderColor: q.dimensionColor, background: q.dimensionColor } : {}} />
                </button>
              ))}
            </div>

            <div className="question-footer">
              <div className="xp-reward">
                <span>⚡</span>
                <span>+{q.xp} XP for this question</span>
                {streak >= 2 && <span className="streak-bonus">+{Math.floor(q.xp * 0.2)} streak bonus!</span>}
              </div>
              <button
                className="next-btn"
                disabled={!selected}
                onClick={handleNext}
                style={{ background: selected ? `linear-gradient(135deg, ${q.dimensionColor}, ${q.dimensionColor}bb)` : undefined }}
              >
                {current === assessmentQuestions.length - 1 ? "Finish & See Results" : "Next Question →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IntroScreen({ onStart }) {
  return (
    <div className="intro-screen">
      <div className="intro-bg">
        <div className="intro-orb intro-orb-1" />
        <div className="intro-orb intro-orb-2" />
      </div>
      <div className="intro-card">
        <div className="intro-icon">⚡</div>
        <h1>SPARK Assessment</h1>
        <p>A gamified, 5-dimensional career test that reveals your best-fit career paths. Complete all 5 sections to unlock your personalised career report.</p>

        <div className="intro-dims">
          {[
            { letter: "S", label: "Skills", color: "#0EB8A4" },
            { letter: "P", label: "Passion", color: "#6B21E8" },
            { letter: "A", label: "Aptitude", color: "#F59E0B" },
            { letter: "R", label: "Role-fit", color: "#F43F5E" },
            { letter: "K", label: "Knowledge", color: "#8B5CF6" },
          ].map(d => (
            <div key={d.letter} className="intro-dim-chip" style={{ borderColor: `${d.color}30`, background: `${d.color}10` }}>
              <span style={{ color: d.color, fontWeight: 800 }}>{d.letter}</span>
              <span>{d.label}</span>
            </div>
          ))}
        </div>

        <div className="intro-meta">
          <div className="intro-meta-item"><span>⏱</span><span>~15 mins</span></div>
          <div className="intro-meta-item"><span>❓</span><span>5 Questions</span></div>
          <div className="intro-meta-item"><span>🎯</span><span>Free</span></div>
          <div className="intro-meta-item"><span>⚡</span><span>Earn 275 XP</span></div>
        </div>

        <button className="cta-primary" style={{ width: "100%", justifyContent: "center", fontSize: "16px", padding: "16px" }} onClick={onStart}>
          Start SPARK Assessment ⚡
        </button>
      </div>
    </div>
  );
}

function ResultScreen({ xp, totalXp, answers }) {
  const careers = [
    { title: "UX Designer", match: 94, color: "#0EB8A4", icon: "🎨" },
    { title: "Product Manager", match: 87, color: "#6B21E8", icon: "🚀" },
    { title: "Content Strategist", match: 79, color: "#F59E0B", icon: "✍️" },
    { title: "Data Scientist", match: 71, color: "#F43F5E", icon: "📊" },
    { title: "UX Researcher", match: 68, color: "#8B5CF6", icon: "🔬" },
  ];

  return (
    <div className="result-screen">
      <div className="result-bg">
        <div className="result-orb" />
      </div>
      <div className="result-content">
        <div className="result-header">
          <div className="result-trophy">🏆</div>
          <h1>Assessment Complete!</h1>
          <p>Your SPARK profile has been generated. Here are your top career matches.</p>
          <div className="result-xp-badge">
            ⚡ {xp} XP earned — Level {Math.floor(xp / 60) + 2} Unlocked!
          </div>
        </div>

        <div className="result-grid">
          <div className="result-matches">
            <h3>Your Top Career Matches</h3>
            {careers.map((c, i) => (
              <div key={c.title} className="match-row">
                <div className="match-rank" style={{ color: i === 0 ? "#F59E0B" : "var(--text-muted)" }}>
                  #{i + 1}
                </div>
                <div className="match-icon" style={{ background: `${c.color}15` }}>{c.icon}</div>
                <div className="match-info">
                  <span className="match-title">{c.title}</span>
                  <div className="match-bar-track">
                    <div className="match-bar-fill" style={{ width: `${c.match}%`, background: c.color }} />
                  </div>
                </div>
                <div className="match-pct" style={{ color: c.color }}>{c.match}%</div>
              </div>
            ))}
          </div>

          <div className="result-sidebar-cards">
            <div className="profile-card">
              <h4>Your SPARK Profile</h4>
              {[
                { label: "Analytical", pct: 88, color: "#0EB8A4" },
                { label: "Creative", pct: 74, color: "#6B21E8" },
                { label: "Social", pct: 61, color: "#F59E0B" },
                { label: "EQ", pct: 82, color: "#F43F5E" },
              ].map(s => (
                <div key={s.label} className="profile-bar-row">
                  <span>{s.label}</span>
                  <div className="profile-bar-track">
                    <div className="profile-bar-fill" style={{ width: `${s.pct}%`, background: s.color }} />
                  </div>
                  <span style={{ color: s.color }}>{s.pct}%</span>
                </div>
              ))}
            </div>

            <div className="result-actions">
              <Link to="/dashboard" className="cta-primary" style={{ width: "100%", justifyContent: "center" }}>
                View Full Dashboard →
              </Link>
              <Link to="/careers" className="cta-secondary" style={{ textAlign: "center", display: "block", padding: "12px" }}>
                Explore Career Library
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
