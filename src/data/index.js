export const careers = [
  { id: 1, title: "UX Designer", icon: "🎨", domain: "Design", demand: "High Demand", growth: "+34%", skills: ["Figma", "User Research", "Prototyping", "Empathy"], color: "#0EB8A4" },
  { id: 2, title: "AI/ML Engineer", icon: "🤖", domain: "Technology", demand: "High Demand", growth: "+48%", skills: ["Python", "TensorFlow", "Statistics", "Data Modeling"], color: "#6B21E8" },
  { id: 3, title: "Chartered Accountant", icon: "📊", domain: "Finance", demand: "Stable", growth: "+12%", skills: ["Accounting", "Taxation", "Auditing", "Finance Law"], color: "#F59E0B" },
  { id: 4, title: "Clinical Psychologist", icon: "🧠", domain: "Healthcare", demand: "Growing", growth: "+22%", skills: ["Counselling", "Research", "Empathy", "Assessment"], color: "#F43F5E" },
  { id: 5, title: "Data Scientist", icon: "📈", domain: "Technology", demand: "High Demand", growth: "+41%", skills: ["Python", "SQL", "ML", "Visualization"], color: "#0EB8A4" },
  { id: 6, title: "Civil Engineer", icon: "🏗️", domain: "Engineering", demand: "Stable", growth: "+15%", skills: ["AutoCAD", "Structural Design", "Project Mgmt", "Mathematics"], color: "#6B21E8" },
  { id: 7, title: "Content Strategist", icon: "✍️", domain: "Media", demand: "Growing", growth: "+28%", skills: ["Writing", "SEO", "Analytics", "Brand Voice"], color: "#F59E0B" },
  { id: 8, title: "Product Manager", icon: "🚀", domain: "Business", demand: "High Demand", growth: "+36%", skills: ["Strategy", "Agile", "Communication", "Analytics"], color: "#F43F5E" },
  { id: 9, title: "Environmental Scientist", icon: "🌿", domain: "Science", demand: "Growing", growth: "+19%", skills: ["Research", "GIS", "Data Analysis", "Biology"], color: "#0EB8A4" },
];

export const assessmentQuestions = [
  {
    id: 1,
    dimension: "Interest",
    dimensionColor: "#0EB8A4",
    question: "Which of these activities would you most enjoy spending an entire afternoon doing?",
    xp: 50,
    options: [
      { id: "a", text: "Designing a logo or website layout", icon: "🎨", tags: ["Creative", "Visual"] },
      { id: "b", text: "Solving a complex math puzzle", icon: "🔢", tags: ["Analytical", "Logical"] },
      { id: "c", text: "Writing a short story or blog post", icon: "✍️", tags: ["Creative", "Expressive"] },
      { id: "d", text: "Building or fixing something mechanical", icon: "🔧", tags: ["Practical", "Technical"] },
    ]
  },
  {
    id: 2,
    dimension: "Personality",
    dimensionColor: "#6B21E8",
    question: "When you're given a group project at college, what role do you naturally take?",
    xp: 50,
    options: [
      { id: "a", text: "I take charge and organise the team", icon: "👑", tags: ["Leader", "Organised"] },
      { id: "b", text: "I quietly handle the most complex part alone", icon: "🎯", tags: ["Independent", "Deep Thinker"] },
      { id: "c", text: "I keep everyone motivated and positive", icon: "⚡", tags: ["Social", "Motivator"] },
      { id: "d", text: "I make sure everyone's voice is heard", icon: "🤝", tags: ["Collaborative", "Empathetic"] },
    ]
  },
  {
    id: 3,
    dimension: "Aptitude",
    dimensionColor: "#F59E0B",
    question: "A store sells 3 notebooks for ₹90. How many can you buy with ₹270?",
    xp: 75,
    options: [
      { id: "a", text: "6 notebooks", icon: "📓", tags: [] },
      { id: "b", text: "9 notebooks", icon: "📓", tags: [] },
      { id: "c", text: "12 notebooks", icon: "📓", tags: [] },
      { id: "d", text: "7 notebooks", icon: "📓", tags: [] },
    ],
    correct: "b"
  },
  {
    id: 4,
    dimension: "Orientation",
    dimensionColor: "#F43F5E",
    question: "Imagine your ideal work environment 5 years from now. Which feels most like 'you'?",
    xp: 50,
    options: [
      { id: "a", text: "A startup office buzzing with energy and new ideas", icon: "🏙️", tags: ["Dynamic", "Innovative"] },
      { id: "b", text: "A research lab with deep focused independent work", icon: "🔬", tags: ["Focused", "Scholarly"] },
      { id: "c", text: "Outdoors — fieldwork, travel, hands-on projects", icon: "🌍", tags: ["Active", "Adventurous"] },
      { id: "d", text: "Remote — creative freedom on your own schedule", icon: "💻", tags: ["Flexible", "Autonomous"] },
    ]
  },
  {
    id: 5,
    dimension: "EQ",
    dimensionColor: "#8B5CF6",
    question: "A close friend fails an important exam and calls you upset. What do you do?",
    xp: 50,
    options: [
      { id: "a", text: "Listen first, then help them make a comeback plan", icon: "💬", tags: ["Supportive", "Practical"] },
      { id: "b", text: "Immediately share resources and study strategies", icon: "📚", tags: ["Solution-focused"] },
      { id: "c", text: "Just be with them — sometimes presence is enough", icon: "🤗", tags: ["Empathetic", "Present"] },
      { id: "d", text: "Motivate them by sharing a personal failure story", icon: "💪", tags: ["Inspiring", "Relatable"] },
    ]
  },
];

export const skillGapData = {
  career: "UX Designer",
  skills: [
    { name: "Figma / Design Tools", userLevel: 72, required: 85, category: "Technical" },
    { name: "User Research", userLevel: 45, required: 80, category: "Core" },
    { name: "Wireframing", userLevel: 60, required: 75, category: "Core" },
    { name: "Design Thinking", userLevel: 55, required: 90, category: "Core" },
    { name: "Prototyping", userLevel: 40, required: 70, category: "Technical" },
    { name: "Communication", userLevel: 80, required: 85, category: "Soft Skill" },
  ]
};

export const testimonials = [
  { name: "Uwais Abdul Salam", college: "PSNACET", text: "SkillPath helped me realise I was meant for UX design, not CS. Changed my entire college plan in the best way.", avatar: "U", career: "UX Designer" },
  { name: "Sridharan VG", college: "PSNACET", text: "The Skill Gap Tracker showed me exactly what to work on. Got placed at a top fintech firm after following the roadmap.", avatar: "S", career: "Data Analyst" },
  { name: "Santharam S", college: "PSNACET", text: "I had zero idea what career to choose. After SkillPath's SPARK assessment, I had 5 solid directions with clear reasoning.", avatar: "S", career: "Product Manager" },
];

export const stats = [
  { value: "50,000+", label: "Students Assessed" },
  { value: "150+", label: "Career Paths" },
  { value: "92%", label: "Satisfaction Rate" },
  { value: "500+", label: "College Partners" },
];

export const howItWorks = [
  { step: "01", title: "Take the SPARK Assessment", desc: "Complete our 5-dimensional test covering Skills, Passion, Aptitude, Role-fit & Knowledge. Gamified. Fun. Insightful.", icon: "⚡" },
  { step: "02", title: "Get Your Career Report", desc: "Receive a detailed report with your top 5 best-fit careers, personality profile, and strength zones.", icon: "📋" },
  { step: "03", title: "Explore the Skill Gap", desc: "See exactly where you stand vs. where you need to be for each career. No guesswork — just clarity.", icon: "📊" },
  { step: "04", title: "Connect with a Mentor", desc: "Book a 1-on-1 session with an expert mentor aligned to your shortlisted career path.", icon: "🎯" },
];
