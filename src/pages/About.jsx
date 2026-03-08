import { Link } from "react-router-dom";
import "./About.css";

const TEAM = [
    { name: "Yahya", role: "Full Stack Developer", dept: "Information Technology", avatar: "Y", color: "#0EB8A4" },
    { name: "Uwais Abdul Salam", role: "Frontend Developer", dept: "Information Technology", avatar: "U", color: "#6B21E8" },
    { name: "Sridharan VG", role: "Backend Developer", dept: "Information Technology", avatar: "S", color: "#F59E0B" },
    { name: "Santharam S", role: "UI/UX Designer", dept: "Information Technology", avatar: "S", color: "#F43F5E" },
];

const TECH_STACK = [
    { category: "Frontend", color: "#0EB8A4", items: ["React.js", "React Router", "CSS3", "Vercel"] },
    { category: "Backend", color: "#6B21E8", items: ["Node.js", "Express.js", "ASP.NET Core", "JWT Auth"] },
    { category: "Database", color: "#F59E0B", items: ["PostgreSQL", "Entity Framework Core", "Prisma ORM"] },
    { category: "Tools", color: "#F43F5E", items: ["VS Code", "Git & GitHub", "Postman", "Figma"] },
];

const MILESTONES = [
    { phase: "Review 1", date: "March 2025", label: "Static Frontend", desc: "Complete React frontend with all pages, routing, and UI components.", done: true },
    { phase: "Review 2", date: "May 2025", label: "Backend Integration", desc: "PostgreSQL database, REST API with Node.js & ASP.NET Core, JWT authentication.", done: false },
    { phase: "Review 3", date: "July 2025", label: "Full Product", desc: "Live deployment, real assessment scoring engine, mentor booking, institution dashboard.", done: false },
];

const WHY_CARDS = [
    { icon: "🎯", title: "Precision Matching", desc: "Unlike generic quizzes, SPARK uses 5 dimensions — Skills, Passion, Aptitude, Role-fit, and Knowledge — to give scientifically grounded career matches." },
    { icon: "📊", title: "Skill Gap Tracker", desc: "Students don't just get a career suggestion — they see exactly what skills they need to develop and by how much, compared to industry requirements." },
    { icon: "🏫", title: "Institution Ready", desc: "Colleges and schools get a dedicated dashboard with analytics on student career interests, assessment completion, and engagement trends." },
    { icon: "🎮", title: "Gamified Learning", desc: "XP points, level badges, and achievement unlocks make career exploration engaging — not a chore. Students actually want to come back." },
];

export default function About() {
    return (
        <div className="about-page">

            {/* HERO */}
            <section className="about-hero">
                <div className="about-hero-bg">
                    <div className="ah-orb ah-orb-1" />
                    <div className="ah-orb ah-orb-2" />
                    <div className="ah-grid" />
                </div>
                <div className="container">
                    <div className="about-hero-inner">
                        <span className="section-badge">🎓 Final Year Project — PSNACET</span>
                        <h1>
                            Built to solve a real problem.<br />
                            <em className="gradient-text">Career confusion in India.</em>
                        </h1>
                        <p>
                            SkillPath is a next-generation career guidance platform designed and built by final year
                            Information Technology students at PSNA College of Engineering and Technology. We were tired
                            of seeing peers pick careers based on peer pressure, not potential — so we built the tool
                            we wish we had.
                        </p>
                        <div className="about-hero-ctas">
                            <Link to="/assessment" className="cta-primary">Try the SPARK Assessment →</Link>
                            <Link to="/careers" className="cta-secondary">Explore Careers</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* MISSION */}
            <section className="section about-mission-section">
                <div className="container">
                    <div className="mission-inner">
                        <div className="mission-text">
                            <span className="section-badge">Our Mission</span>
                            <h2>Every student deserves <em className="gradient-text">career clarity.</em></h2>
                            <p>
                                In India, over 93% of students feel underprepared when choosing their career path.
                                Most rely on what their parents suggest, what their friends choose, or what seemed
                                popular — not what aligns with who they actually are.
                            </p>
                            <p>
                                SkillPath changes that. We combine psychometric assessment science with a modern,
                                gamified interface so students at every stage — from Class 8 to fresh graduates —
                                can make informed, confident decisions about their future.
                            </p>
                            <div className="mission-stats">
                                {[
                                    { value: "5", label: "Assessment Dimensions" },
                                    { value: "150+", label: "Career Paths Mapped" },
                                    { value: "3", label: "User Segments Served" },
                                    { value: "1", label: "Goal: Your Clarity" },
                                ].map(s => (
                                    <div key={s.label} className="mission-stat">
                                        <span className="mission-stat-value gradient-text">{s.value}</span>
                                        <span className="mission-stat-label">{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mission-visual">
                            <div className="mv-card">
                                <div className="mv-card-header">
                                    <span className="mv-dot" />
                                    <span>Problem We're Solving</span>
                                </div>
                                {[
                                    { stat: "93%", desc: "students feel underprepared choosing a career", color: "#F43F5E" },
                                    { stat: "60%", desc: "graduates work in fields unrelated to their degree", color: "#F59E0B" },
                                    { stat: "1 in 3", desc: "students consider dropping out due to wrong stream", color: "#6B21E8" },
                                    { stat: "✓", desc: "SkillPath gives data-driven career direction", color: "#0EB8A4" },
                                ].map((item, i) => (
                                    <div key={i} className="mv-row" style={{ "--rc": item.color }}>
                                        <span className="mv-stat" style={{ color: item.color }}>{item.stat}</span>
                                        <span className="mv-desc">{item.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY SKILLPATH */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">Why SkillPath</span>
                        <h2>Not just another career quiz.<br /><em className="gradient-text">A complete guidance system.</em></h2>
                        <p>Here's what makes SkillPath different from every other tool out there.</p>
                    </div>
                    <div className="why-grid">
                        {WHY_CARDS.map((c, i) => (
                            <div key={i} className="why-card">
                                <div className="why-icon">{c.icon}</div>
                                <h3>{c.title}</h3>
                                <p>{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECH STACK */}
            <section className="section tech-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">⚙️ Tech Stack</span>
                        <h2>Built with <em className="gradient-text">production-grade</em> technology.</h2>
                        <p>Every technology choice was made with scalability, performance, and industry relevance in mind.</p>
                    </div>
                    <div className="tech-grid">
                        {TECH_STACK.map(t => (
                            <div key={t.category} className="tech-card" style={{ "--tc": t.color }}>
                                <div className="tech-card-header" style={{ borderColor: `${t.color}25`, background: `${t.color}08` }}>
                                    <span className="tech-category" style={{ color: t.color }}>{t.category}</span>
                                </div>
                                <div className="tech-items">
                                    {t.items.map(item => (
                                        <span key={item} className="tech-item" style={{ borderColor: `${item.color}20`, background: `${t.color}08`, color: t.color }}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROJECT TIMELINE */}
            <section className="section timeline-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">📅 Project Roadmap</span>
                        <h2>From idea to <em className="gradient-text">live product.</em></h2>
                        <p>A 3-phase development plan covering the full academic year.</p>
                    </div>
                    <div className="timeline">
                        {MILESTONES.map((m, i) => (
                            <div key={i} className={`timeline-item ${m.done ? "timeline-item--done" : ""}`}>
                                <div className="timeline-marker">
                                    <div className="tm-dot">{m.done ? "✓" : i + 1}</div>
                                    {i < MILESTONES.length - 1 && <div className="tm-line" />}
                                </div>
                                <div className="timeline-content">
                                    <div className="tc-top">
                                        <span className="tc-phase">{m.phase}</span>
                                        <span className="tc-date">{m.date}</span>
                                    </div>
                                    <h3>{m.label}</h3>
                                    <p>{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TEAM */}
            <section className="section team-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-badge">👥 The Team</span>
                        <h2>Built by students, <em className="gradient-text">for students.</em></h2>
                        <p>Final year Information Technology students at PSNA College of Engineering and Technology, Dindigul.</p>
                    </div>
                    <div className="team-grid">
                        {TEAM.map(member => (
                            <div key={member.name} className="team-card">
                                <div className="team-avatar" style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}88)` }}>
                                    {member.avatar}
                                </div>
                                <div className="team-info">
                                    <h4>{member.name}</h4>
                                    <span className="team-role" style={{ color: member.color }}>{member.role}</span>
                                    <span className="team-dept">{member.dept} · PSNACET</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="team-guide-card">
                        <div className="tgc-label">Project Guide</div>
                        <div className="tgc-inner">
                            <div className="team-avatar tgc-avatar" style={{ background: "linear-gradient(135deg, #6B21E8, #8B5CF6)" }}>A</div>
                            <div>
                                <h4>Dr. M. Anandaraj</h4>
                                <span>Department of Information Technology · PSNACET</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-banner-section">
                <div className="container">
                    <div className="cta-banner">
                        <div className="cta-banner-glow" />
                        <h2>Ready to explore <em className="gradient-text">SkillPath?</em></h2>
                        <p>Take the free SPARK Assessment and discover your best-fit career in 15 minutes.</p>
                        <div className="hero__ctas" style={{ justifyContent: "center", marginBottom: 0 }}>
                            <Link to="/assessment" className="cta-primary cta-large">
                                Start Free Assessment
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link to="/login" className="cta-secondary">Create Account →</Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
