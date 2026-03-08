import { useState } from "react";
import { Link } from "react-router-dom";
import "./ParentDashboard.css";

const CHILD = {
    name: "Yahya",
    college: "PSNA College of Engineering and Technology",
    stream: "Information Technology",
    year: "4th Year",
    level: 4,
    xp: 240,
    maxXp: 300,
    lastActive: "Today",
    assessmentDone: true,
};

const SPARK_RESULTS = [
    { letter: "S", label: "Skills", score: 78, desc: "Strong problem-solving and technical ability. Excels at structured tasks.", color: "#0EB8A4" },
    { letter: "P", label: "Passion", score: 85, desc: "Highly motivated by creative work and building products people use.", color: "#6B21E8" },
    { letter: "A", label: "Aptitude", score: 72, desc: "Good analytical reasoning. Performs well in logical and numerical tasks.", color: "#F59E0B" },
    { letter: "R", label: "Role-fit", score: 80, desc: "Prefers collaborative environments. Works well in team-based settings.", color: "#F43F5E" },
    { letter: "K", label: "Knowledge", score: 88, desc: "Strong academic foundation. Consistently scores above average in core subjects.", color: "#8B5CF6" },
];

const CAREER_MATCHES = [
    { title: "UX Designer", match: 91, desc: "Designs digital interfaces and user experiences for apps and websites.", salary: "₹6–18 LPA", icon: "🎨", color: "#0EB8A4" },
    { title: "Product Manager", match: 86, desc: "Leads product development, bridging tech teams and business goals.", salary: "₹10–28 LPA", icon: "🚀", color: "#6B21E8" },
    { title: "Data Analyst", match: 79, desc: "Analyses data to find insights that help companies make better decisions.", salary: "₹5–15 LPA", icon: "📊", color: "#F59E0B" },
];

const SKILL_GAPS = [
    { skill: "UI/UX Design Tools", current: 55, required: 80, color: "#0EB8A4" },
    { skill: "Data Analysis", current: 60, required: 75, color: "#F59E0B" },
    { skill: "Communication Skills", current: 72, required: 85, color: "#6B21E8" },
    { skill: "Problem Solving", current: 78, required: 80, color: "#F43F5E" },
];

const WHAT_IT_MEANS = [
    { icon: "🎯", title: "High Passion score (85%)", plain: "Your child is genuinely excited about what they do — this is a great sign. Passion-driven students are 2x more likely to stay in their chosen career long-term." },
    { icon: "📚", title: "Strong Knowledge base (88%)", plain: "Your child has solid academic foundations. This means they're ready to pursue higher education or specialised training in their field of interest." },
    { icon: "🛠️", title: "Skills gap in Design Tools", plain: "Your child's top career match (UX Designer) requires design tool skills they're still building. Encouraging them to take a short online course now will help significantly." },
    { icon: "✅", title: "Best next step", plain: "Based on the assessment, your child should explore UX Design or Product Management. Both are high-growth careers well-matched to their personality and strengths." },
];

export default function ParentDashboard() {
    const [activeTab, setActiveTab] = useState("overview");
    const xpPct = (CHILD.xp / CHILD.maxXp) * 100;

    return (
        <div className="parent-page">

            {/* HEADER */}
            <div className="parent-header">
                <div className="ph-bg" />
                <div className="container">
                    <div className="ph-inner">
                        <div className="ph-left">
                            <span className="ph-badge">👨‍👩‍👧 Parent Dashboard</span>
                            <h1>Viewing <em className="gradient-text">{CHILD.name}'s</em> Profile</h1>
                            <p>{CHILD.college} · {CHILD.stream} · {CHILD.year}</p>
                        </div>
                        <div className="ph-status-card">
                            <div className="psc-row">
                                <span className="psc-label">Assessment</span>
                                <span className="psc-value psc-value--done">✓ Completed</span>
                            </div>
                            <div className="psc-row">
                                <span className="psc-label">Last Active</span>
                                <span className="psc-value">{CHILD.lastActive}</span>
                            </div>
                            <div className="psc-row">
                                <span className="psc-label">Level</span>
                                <span className="psc-value">Level {CHILD.level} · {CHILD.xp}/{CHILD.maxXp} XP</span>
                            </div>
                            <div className="psc-xp-bar">
                                <div className="psc-xp-fill" style={{ width: `${xpPct}%` }} />
                            </div>
                        </div>
                    </div>

                    {/* TABS */}
                    <div className="parent-tabs">
                        {[
                            { id: "overview", label: "📋 Overview" },
                            { id: "spark", label: "⚡ SPARK Results" },
                            { id: "careers", label: "🎯 Career Matches" },
                            { id: "plain", label: "💬 What This Means" },
                        ].map(t => (
                            <button key={t.id}
                                className={`ptab ${activeTab === t.id ? "ptab--active" : ""}`}
                                onClick={() => setActiveTab(t.id)}>
                                {t.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* TAB CONTENT */}
            <div className="container parent-body">

                {/* ── OVERVIEW ── */}
                {activeTab === "overview" && (
                    <div className="parent-tab-content">
                        <div className="overview-grid">

                            {/* SPARK SUMMARY */}
                            <div className="p-card">
                                <h3 className="p-card-title">⚡ SPARK Score Summary</h3>
                                <div className="spark-summary-bars">
                                    {SPARK_RESULTS.map(d => (
                                        <div key={d.letter} className="ssb-row">
                                            <div className="ssb-label">
                                                <span className="ssb-letter" style={{ color: d.color, background: `${d.color}15` }}>{d.letter}</span>
                                                <span>{d.label}</span>
                                            </div>
                                            <div className="ssb-track">
                                                <div className="ssb-fill" style={{ width: `${d.score}%`, background: d.color }} />
                                            </div>
                                            <span className="ssb-pct" style={{ color: d.color }}>{d.score}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* TOP CAREER MATCH */}
                            <div className="p-card">
                                <h3 className="p-card-title">🎯 Top Career Match</h3>
                                <div className="top-match-card" style={{ borderColor: `${CAREER_MATCHES[0].color}30`, background: `${CAREER_MATCHES[0].color}06` }}>
                                    <div className="tmc-icon">{CAREER_MATCHES[0].icon}</div>
                                    <div className="tmc-info">
                                        <h4>{CAREER_MATCHES[0].title}</h4>
                                        <p>{CAREER_MATCHES[0].desc}</p>
                                        <span className="tmc-salary">Avg salary: {CAREER_MATCHES[0].salary}</span>
                                    </div>
                                    <div className="tmc-match" style={{ color: CAREER_MATCHES[0].color }}>
                                        {CAREER_MATCHES[0].match}%
                                        <span>match</span>
                                    </div>
                                </div>
                                <div className="other-matches">
                                    <span>Other strong matches:</span>
                                    {CAREER_MATCHES.slice(1).map(c => (
                                        <span key={c.title} className="om-tag" style={{ color: c.color, background: `${c.color}10`, borderColor: `${c.color}20` }}>
                                            {c.icon} {c.title} · {c.match}%
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* SKILL GAP SNAPSHOT */}
                            <div className="p-card p-card--full">
                                <h3 className="p-card-title">📊 Skill Gap Snapshot</h3>
                                <p className="p-card-sub">How your child's current skills compare to what their top career requires.</p>
                                <div className="skill-gap-list">
                                    {SKILL_GAPS.map(s => (
                                        <div key={s.skill} className="sg-row">
                                            <span className="sg-label">{s.skill}</span>
                                            <div className="sg-bars">
                                                <div className="sg-bar-wrap">
                                                    <div className="sg-bar sg-bar--required" style={{ width: `${s.required}%` }} />
                                                </div>
                                                <div className="sg-bar-wrap">
                                                    <div className="sg-bar sg-bar--current" style={{ width: `${s.current}%`, background: s.color }} />
                                                </div>
                                            </div>
                                            <div className="sg-nums">
                                                <span style={{ color: s.color }}>{s.current}%</span>
                                                <span>/ {s.required}%</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="sg-legend">
                                    <span><span className="sg-dot sg-dot--required" /> Required Level</span>
                                    <span><span className="sg-dot sg-dot--current" /> Your Child's Level</span>
                                </div>
                            </div>

                        </div>
                    </div>
                )}

                {/* ── SPARK RESULTS ── */}
                {activeTab === "spark" && (
                    <div className="parent-tab-content">
                        <div className="spark-detail-grid">
                            {SPARK_RESULTS.map(d => (
                                <div key={d.letter} className="spark-detail-card" style={{ borderColor: `${d.color}20`, background: `${d.color}05` }}>
                                    <div className="sdc-top">
                                        <div className="sdc-letter" style={{ color: d.color, background: `${d.color}15`, borderColor: `${d.color}25` }}>{d.letter}</div>
                                        <div>
                                            <h4 style={{ color: d.color }}>{d.label}</h4>
                                            <span className="sdc-score">{d.score}%</span>
                                        </div>
                                    </div>
                                    <div className="sdc-bar-track">
                                        <div className="sdc-bar-fill" style={{ width: `${d.score}%`, background: `linear-gradient(90deg, ${d.color}, ${d.color}88)` }} />
                                    </div>
                                    <p>{d.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── CAREER MATCHES ── */}
                {activeTab === "careers" && (
                    <div className="parent-tab-content">
                        <div className="career-match-list">
                            {CAREER_MATCHES.map((c, i) => (
                                <div key={c.title} className="cm-card" style={{ borderColor: `${c.color}20` }}>
                                    <div className="cm-rank" style={{ color: c.color, background: `${c.color}10` }}>#{i + 1}</div>
                                    <div className="cm-icon">{c.icon}</div>
                                    <div className="cm-info">
                                        <h3>{c.title}</h3>
                                        <p>{c.desc}</p>
                                        <span className="cm-salary">💰 {c.salary}</span>
                                    </div>
                                    <div className="cm-match-circle" style={{ borderColor: `${c.color}40`, color: c.color }}>
                                        <span className="cmc-pct">{c.match}%</span>
                                        <span className="cmc-label">match</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="careers-note">
                            <span>🔍</span>
                            <p>These matches are based on your child's SPARK Assessment scores across all 5 dimensions. A higher match % means the career aligns closely with their skills, personality, and interests.</p>
                        </div>
                    </div>
                )}

                {/* ── WHAT THIS MEANS ── */}
                {activeTab === "plain" && (
                    <div className="parent-tab-content">
                        <div className="plain-intro">
                            <h2>Understanding <em className="gradient-text">{CHILD.name}'s</em> results — in plain English.</h2>
                            <p>No jargon. Here's what the assessment is telling you and what you can do to help.</p>
                        </div>
                        <div className="plain-cards">
                            {WHAT_IT_MEANS.map((item, i) => (
                                <div key={i} className="plain-card">
                                    <div className="plain-icon">{item.icon}</div>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.plain}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="plain-cta-card">
                            <h3>Want to explore career options together?</h3>
                            <p>Browse the full careers library to understand what each career path involves — salaries, required skills, and growth prospects.</p>
                            <Link to="/careers" className="cta-primary">Explore Careers →</Link>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
