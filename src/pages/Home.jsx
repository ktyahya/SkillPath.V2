import { Link } from "react-router-dom";
import { stats, howItWorks, testimonials, careers } from "../data";
import "./Home.css";

function HeroOrb({ size, top, left, color, delay }) {
  return (
    <div className="hero-orb" style={{
      width: size, height: size, top, left,
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      animationDelay: delay,
    }} />
  );
}

function StatCard({ value, label }) {
  return (
    <div className="stat-card">
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function StepCard({ step, title, desc, icon, index }) {
  return (
    <div className="step-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="step-num">{step}</div>
      <div className="step-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function TestimonialCard({ name, college, text, avatar, career }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">★★★★★</div>
      <p>"{text}"</p>
      <div className="testimonial-author">
        <div className="testimonial-avatar">{avatar}</div>
        <div>
          <strong>{name}</strong>
          <span>{college} · {career}</span>
        </div>
      </div>
    </div>
  );
}

function CareerPreviewCard({ title, icon, domain, demand, growth, color }) {
  return (
    <div className="career-preview-card">
      <div className="cpc-icon" style={{ background: `${color}18`, border: `1px solid ${color}30` }}>{icon}</div>
      <div className="cpc-info">
        <h4>{title}</h4>
        <span className="cpc-domain">{domain}</span>
      </div>
      <div className="cpc-meta">
        <span className="cpc-demand" data-type={demand.split(' ')[0].toLowerCase()}>{demand}</span>
        <span className="cpc-growth" style={{ color }}>{growth}</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <HeroOrb size="600px" top="-100px" left="-150px" color="rgba(14,184,164,0.12)" delay="0s" />
          <HeroOrb size="500px" top="100px" left="60%" color="rgba(107,33,232,0.10)" delay="1s" />
          <HeroOrb size="300px" top="50%" left="40%" color="rgba(14,184,164,0.06)" delay="2s" />
          <div className="hero-grid-lines" />
        </div>

        <div className="hero__content">
          <div className="hero__badge">
            <span className="badge-dot" />
            <span>India's Next-Gen Career Guidance Platform</span>
          </div>

          <h1 className="hero__title">
            <span className="hero__title-line1">Discover Your</span>
            <span className="hero__title-line2 gradient-text">Perfect Career Path</span>
          </h1>

          <p className="hero__subtitle">
            Take the SPARK Assessment — a science-backed, 5-dimensional career test.
            Find where your skills, passion & personality align to your best-fit career.
          </p>

          <div className="hero__ctas">
            <Link to="/assessment" className="cta-primary">
              Start Free Assessment
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link to="/careers" className="cta-secondary">
              Explore Careers →
            </Link>
          </div>

          <div className="hero__stats">
            {stats.map(s => <StatCard key={s.label} {...s} />)}
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero-card-float">
            <div className="hcf-header">
              <span className="hcf-dot" />
              <span>Your SPARK Profile</span>
            </div>
            {[
              { label: "Analytical", pct: 88, color: "#0EB8A4" },
              { label: "Creative", pct: 74, color: "#6B21E8" },
              { label: "Social", pct: 61, color: "#F59E0B" },
              { label: "Technical", pct: 92, color: "#F43F5E" },
            ].map(item => (
              <div key={item.label} className="hcf-bar-row">
                <span>{item.label}</span>
                <div className="hcf-bar-track">
                  <div className="hcf-bar-fill" style={{ width: `${item.pct}%`, background: item.color }} />
                </div>
                <span>{item.pct}%</span>
              </div>
            ))}
            <div className="hcf-matches">
              <span>Top Matches:</span>
              {["UX Designer", "Data Scientist", "PM"].map(m => (
                <span key={m} className="hcf-match-tag">{m}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Process</span>
            <h2>How SkillPath Works</h2>
            <p>From confusion to clarity in 4 simple steps.</p>
          </div>
          <div className="steps-grid">
            {howItWorks.map((step, i) => <StepCard key={step.step} {...step} index={i} />)}
          </div>
        </div>
      </section>

      {/* GUIDANCE PROGRAMS */}
      <section className="section programs-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Guidance Programs</span>
            <h2>Career guidance for <em className="gradient-text">every stage.</em></h2>
            <p>Whether you're choosing a stream, picking a career, or levelling up after graduation — SkillPath has a program built for you.</p>
          </div>

          <div className="programs-grid">
            {[
              {
                tag: "School · Class 8–10",
                tagColor: "#0EB8A4",
                icon: "📚",
                title: "Stream & Subject Selection",
                desc: "Confused about Science, Commerce or Arts? Our SPARK Assessment identifies your strengths and interests to help you choose the right stream and subjects that align with your future career.",
                features: ["Stream recommendation", "Subject compatibility test", "Career mapping by stream", "Parent-friendly report"],
                cta: "Explore Program",
                link: "/assessment",
                gradient: "rgba(14,184,164,0.06)",
                border: "rgba(14,184,164,0.15)",
              },
              {
                tag: "Class 11–12 & Aspirants",
                tagColor: "#6B21E8",
                icon: "🎯",
                title: "Career Selection & Planning",
                desc: "At the crossroads of choosing your college and course? Get expert-backed guidance with our 5-dimensional SPARK Assessment to discover your best-fit career and build your roadmap.",
                features: ["5D SPARK Assessment", "Top 5 career matches", "College & course guidance", "Entrance exam roadmap"],
                cta: "Start Assessment",
                link: "/assessment",
                gradient: "rgba(107,33,232,0.06)",
                border: "rgba(107,33,232,0.15)",
                highlight: true,
              },
              {
                tag: "College Students & Graduates",
                tagColor: "#F59E0B",
                icon: "🚀",
                title: "Career Development & Job Readiness",
                desc: "Already in college or recently graduated? Identify skill gaps, explore career pivots, and get matched with mentors to accelerate your professional growth and land your dream role.",
                features: ["Skill Gap Tracker", "Career pivot guidance", "Mentor matching", "LinkedIn & resume tips"],
                cta: "Get Started",
                link: "/assessment",
                gradient: "rgba(245,158,11,0.06)",
                border: "rgba(245,158,11,0.15)",
              },
            ].map((prog, i) => (
              <div key={i} className={`program-card ${prog.highlight ? "program-card--highlight" : ""}`}
                style={{ background: prog.gradient, borderColor: prog.border }}>
                {prog.highlight && <div className="program-popular-badge">Most Popular</div>}
                <div className="prog-tag" style={{ color: prog.tagColor, background: `${prog.tagColor}10`, borderColor: `${prog.tagColor}25` }}>
                  {prog.tag}
                </div>
                <div className="prog-icon">{prog.icon}</div>
                <h3>{prog.title}</h3>
                <p>{prog.desc}</p>
                <ul className="prog-features">
                  {prog.features.map(f => (
                    <li key={f} style={{ "--fc": prog.tagColor }}>
                      <span className="prog-check" style={{ color: prog.tagColor }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to={prog.link} className="prog-cta" style={{ background: prog.tagColor }}>
                  {prog.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS PREVIEW */}
      <section className="section careers-preview-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Career Explorer</span>
            <h2>150+ Career Paths. <em className="gradient-text">All Mapped.</em></h2>
            <p>From AI Engineering to Environmental Science — find your domain and dive deep.</p>
          </div>
          <div className="careers-preview-list">
            {careers.map(c => <CareerPreviewCard key={c.id} {...c} />)}
          </div>
          <div className="section-cta">
            <Link to="/careers" className="cta-primary">Explore All Careers →</Link>
          </div>
        </div>
      </section>

      {/* SPARK FEATURE HIGHLIGHT */}
      <section className="section spark-section">
        <div className="container">
          <div className="spark-inner">
            <div className="spark-text">
              <span className="section-badge">⚡ SPARK Assessment</span>
              <h2>Not just another career quiz.<br /><em className="gradient-text">A complete picture of you.</em></h2>
              <p>Our proprietary 5-dimension framework evaluates what truly matters — not just what you're good at, but who you are.</p>
              <div className="spark-dimensions">
                {[
                  { letter: "S", word: "Skills", desc: "What you're capable of", color: "#0EB8A4" },
                  { letter: "P", word: "Passion", desc: "What drives you", color: "#6B21E8" },
                  { letter: "A", word: "Aptitude", desc: "Your natural abilities", color: "#F59E0B" },
                  { letter: "R", word: "Role-fit", desc: "Your ideal work style", color: "#F43F5E" },
                  { letter: "K", word: "Knowledge", desc: "Your academic strengths", color: "#8B5CF6" },
                ].map(d => (
                  <div key={d.letter} className="spark-dim">
                    <div className="spark-dim-letter" style={{ color: d.color, background: `${d.color}15`, borderColor: `${d.color}30` }}>
                      {d.letter}
                    </div>
                    <div>
                      <strong style={{ color: d.color }}>{d.word}</strong>
                      <span>{d.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/assessment" className="cta-primary" style={{ marginTop: "8px", display: "inline-flex" }}>
                Take the SPARK Test — Free
              </Link>
            </div>
            <div className="spark-visual">
              <div className="spark-pentagon">
                <div className="pentagon-bg" />
                {["S", "P", "A", "R", "K"].map((l, i) => (
                  <div key={l} className="pentagon-node" style={{ "--i": i }}>
                    <span>{l}</span>
                  </div>
                ))}
                <div className="pentagon-center">SPARK</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Success Stories</span>
            <h2>Students who found their <em className="gradient-text">direction</em></h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(t => <TestimonialCard key={t.name} {...t} />)}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-banner-section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-banner-glow" />
            <h2>Your career clarity is <em className="gradient-text">one test away.</em></h2>
            <p>Join 50,000+ students who found their direction with SkillPath.</p>
            <div className="hero__ctas">
              <Link to="/assessment" className="cta-primary cta-large">
                Start Free SPARK Assessment
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
