import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const ROLES = [
  {
    id: "student",
    icon: "🎓",
    title: "Student",
    desc: "Discover your perfect career path",
    color: "#0EB8A4",
    features: ["SPARK Assessment", "Career Explorer", "Skill Gap Tracker", "XP & Badges"],
  },
  {
    id: "institution",
    icon: "🏫",
    title: "Institution",
    desc: "Manage career guidance for your students",
    color: "#6B21E8",
    features: ["Student Analytics Dashboard", "Bulk Assessment Management", "Progress Reports", "Counsellor Tools"],
  },
  {
    id: "parent",
    icon: "👨‍👩‍👧",
    title: "Parent",
    desc: "Understand your child's strengths & career direction",
    color: "#F59E0B",
    features: ["Child's SPARK Results", "Career Match Explained", "Skill Gap Overview", "Progress Tracker"],
  },
];

const STUDENT_STREAMS = ["Computer Science", "Electronics", "Mechanical", "Civil", "Commerce", "Arts", "Science", "Law", "Medicine", "Other"];
const STUDENT_YEARS = ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "1st Year", "2nd Year", "3rd Year", "4th Year", "Graduate"];

export default function Auth() {
  const [step, setStep] = useState("role");   // "role" | "form"
  const [role, setRole] = useState(null);
  const [tab, setTab] = useState("login");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", college: "", stream: "", year: "", institution: "", designation: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  function selectRole(r) { setRole(r); setStep("form"); setErrors({}); }

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    setErrors(err => ({ ...err, [e.target.name]: "" }));
  }

  function validate() {
    const errs = {};
    if (!form.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.password) errs.password = "Password is required";
    else if (form.password.length < 6) errs.password = "Min. 6 characters";
    if (tab === "register") {
      if (!form.name) errs.name = "Name is required";
      if (role?.id === "student" && !form.college) errs.college = "College is required";
      if (role?.id === "institution" && !form.institution) errs.institution = "Institution name is required";
      if (role?.id === "parent" && !form.name) errs.name = "Full name is required";
    }
    return errs;
  }

  function handleSubmit() {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (role?.id === "institution") navigate("/institution/dashboard");
      else if (role?.id === "parent") navigate("/parent/dashboard");
      else navigate("/dashboard");
    }, 1500);
  }

  const selectedRole = ROLES.find(r => r.id === role?.id);

  // ── STEP 1: ROLE SELECTOR ──────────────────────────────────────────
  if (step === "role") {
    return (
      <div className="auth-page">
        <div className="auth-bg">
          <div className="auth-orb auth-orb-1" />
          <div className="auth-orb auth-orb-2" />
          <div className="auth-grid" />
        </div>

        <Link to="/" className="auth-logo">
          <span className="auth-logo-icon">◈</span>
          Skill<em>Path</em>
        </Link>

        <div className="role-selector-page">
          <div className="rs-header">
            <h1>Welcome to <em className="gradient-text">SkillPath</em></h1>
            <p>Tell us who you are so we can personalise your experience.</p>
          </div>

          <div className="role-cards">
            {ROLES.map(r => (
              <button key={r.id} className="role-card" onClick={() => selectRole(r)}
                style={{ "--role-color": r.color }}>
                <div className="rc-icon" style={{ background: `${r.color}15`, border: `1px solid ${r.color}25` }}>
                  {r.icon}
                </div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
                <ul className="rc-features">
                  {r.features.map(f => (
                    <li key={f} style={{ color: r.color }}>
                      <span>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <div className="rc-cta" style={{ background: r.color }}>
                  Continue as {r.title} →
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ── STEP 2: LOGIN / REGISTER FORM ─────────────────────────────────
  return (
    <div className="auth-page">
      <div className="auth-bg">
        <div className="auth-orb auth-orb-1" />
        <div className="auth-orb auth-orb-2" />
        <div className="auth-grid" />
      </div>

      <Link to="/" className="auth-logo">
        <span className="auth-logo-icon">◈</span>
        Skill<em>Path</em>
      </Link>

      <div className="auth-container">
        {/* LEFT */}
        <div className="auth-left">
          <div className="auth-left-content">
            <button className="back-to-roles" onClick={() => setStep("role")}>
              ← Change role
            </button>

            <div className="auth-role-pill" style={{ background: `${selectedRole?.color}12`, borderColor: `${selectedRole?.color}30`, color: selectedRole?.color }}>
              {selectedRole?.icon} Signing in as <strong>{selectedRole?.title}</strong>
            </div>

            <h2>
              {role?.id === "student" && "Your career clarity starts here."}
              {role?.id === "institution" && "Empower your students' futures."}
              {role?.id === "parent" && "Stay involved in your child's future."}
            </h2>
            <p>
              {role?.id === "student" && "Join 50,000+ students who discovered their perfect career path using SkillPath's SPARK Assessment."}
              {role?.id === "institution" && "Give your students access to world-class career guidance tools, analytics, and personalised assessments."}
              {role?.id === "parent" && "See your child's career assessment results, understand their strengths, and support them with clear data — not guesswork."}
            </p>

            <div className="auth-features">
              {selectedRole?.features.map(f => (
                <div key={f} className="auth-feature-item">
                  <span className="af-icon" style={{ background: `${selectedRole.color}10`, borderColor: `${selectedRole.color}20` }}>✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT - FORM */}
        <div className="auth-right">
          <div className="auth-card">
            <div className="auth-tabs">
              <button className={`auth-tab ${tab === "login" ? "auth-tab--active" : ""}`}
                onClick={() => { setTab("login"); setErrors({}); }}>Log In</button>
              <button className={`auth-tab ${tab === "register" ? "auth-tab--active" : ""}`}
                onClick={() => { setTab("register"); setErrors({}); }}>Create Account</button>
              <div className="auth-tab-slider" style={{ transform: `translateX(${tab === "login" ? "0%" : "100%"})` }} />
            </div>

            <div className="auth-form">
              {/* NAME — register only */}
              {tab === "register" && (
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="name" placeholder="Your full name"
                    value={form.name} onChange={handleChange}
                    className={errors.name ? "input-error" : ""} />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>
              )}

              {/* EMAIL */}
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="you@email.com"
                  value={form.email} onChange={handleChange}
                  className={errors.email ? "input-error" : ""} />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              {/* PASSWORD */}
              <div className="form-group">
                <label>Password</label>
                <div className="input-password-wrap">
                  <input type={showPass ? "text" : "password"} name="password"
                    placeholder={tab === "register" ? "Min. 6 characters" : "Enter your password"}
                    value={form.password} onChange={handleChange}
                    className={errors.password ? "input-error" : ""} />
                  <button className="pass-toggle" onClick={() => setShowPass(s => !s)} type="button">
                    {showPass ? "🙈" : "👁️"}
                  </button>
                </div>
                {errors.password && <span className="form-error">{errors.password}</span>}
              </div>

              {/* STUDENT EXTRA FIELDS */}
              {tab === "register" && role?.id === "student" && (
                <>
                  <div className="form-group">
                    <label>College / School</label>
                    <input type="text" name="college" placeholder="Your institution name"
                      value={form.college} onChange={handleChange}
                      className={errors.college ? "input-error" : ""} />
                    {errors.college && <span className="form-error">{errors.college}</span>}
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Stream / Branch</label>
                      <select name="stream" value={form.stream} onChange={handleChange}>
                        <option value="">Select stream</option>
                        {STUDENT_STREAMS.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Year / Class</label>
                      <select name="year" value={form.year} onChange={handleChange}>
                        <option value="">Select year</option>
                        {STUDENT_YEARS.map(y => <option key={y}>{y}</option>)}
                      </select>
                    </div>
                  </div>
                </>
              )}

              {/* INSTITUTION EXTRA FIELDS */}
              {tab === "register" && role?.id === "institution" && (
                <>
                  <div className="form-group">
                    <label>Institution Name</label>
                    <input type="text" name="institution" placeholder="College or School name"
                      value={form.institution} onChange={handleChange}
                      className={errors.institution ? "input-error" : ""} />
                    {errors.institution && <span className="form-error">{errors.institution}</span>}
                  </div>
                  <div className="form-group">
                    <label>Your Designation</label>
                    <input type="text" name="designation" placeholder="e.g. Principal, HOD, Placement Officer"
                      value={form.designation} onChange={handleChange} />
                  </div>
                </>
              )}

              {/* PARENT EXTRA FIELDS */}
              {tab === "register" && role?.id === "parent" && (
                <>
                  <div className="form-group">
                    <label>Child's Name</label>
                    <input type="text" name="institution" placeholder="Your child's full name"
                      value={form.institution} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Child's School / College</label>
                    <input type="text" name="designation" placeholder="e.g. PSNACET, Delhi Public School"
                      value={form.designation} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Connect Code <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(optional — get this from your child)</span></label>
                    <input type="text" name="college" placeholder="6-digit code e.g. SP4821"
                      value={form.college} onChange={handleChange} />
                  </div>
                </>
              )}

              {tab === "login" && (
                <div className="form-forgot">
                  <a href="#">Forgot password?</a>
                </div>
              )}

              <button className={`auth-submit ${loading ? "auth-submit--loading" : ""}`}
                onClick={handleSubmit} disabled={loading}
                style={{ background: loading ? undefined : `linear-gradient(135deg, ${selectedRole?.color}, ${selectedRole?.color}bb)` }}>
                {loading ? <span className="auth-spinner" /> :
                  tab === "login" ? `Log In as ${selectedRole?.title} →` : `Create ${selectedRole?.title} Account →`}
              </button>

              <div className="auth-divider"><span>or continue with</span></div>

              <div className="auth-social">
                <button className="social-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Google
                </button>
                <button className="social-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </button>
              </div>

              <p className="auth-switch">
                {tab === "login"
                  ? <>Don't have an account? <button onClick={() => setTab("register")}>Sign up free</button></>
                  : <>Already have an account? <button onClick={() => setTab("login")}>Log in</button></>}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}