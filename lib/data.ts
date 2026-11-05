// All site content lives here. Replace every "#" with your real link.
export const profile = {
  name: "'Arif Bin Isahak",
  roles: ["AI / ML Engineer", "Data Scientist", "Full-Stack Developer", "Android Developer"],
  tagline:
    "Computer Science student majoring in Intelligent Computing at USM. An award-winning innovator and national youth leader who turns data and AI into tools people actually use.",
  email: "arif05.isahak@gmail.com",
  linkedin: "https://www.linkedin.com/in/arif-isahak-7889082ab/", // TODO
  github: "https://github.com/arifisahakk", // TODO
  cv: "CV Internship ('ARIF ISAHAK).pdf", // TODO: add the PDF to /public
  stats: [
    { value: "3.52", label: "CGPA at USM" },
    { value: "2×", label: "Dean's List" },
    { value: "7", label: "Certifications" },
    { value: "Gold", label: "IIEC 2024" },
  ],
};

export const featuredSkills = [
  { name: "Python", note: "ML · Data · Backend" },
  { name: "Kotlin", note: "Android · Compose" },
  { name: "Next.js", note: "Full-stack web" },
  { name: "TensorFlow", note: "Deep learning" },
  { name: "LangChain", note: "LLM apps" },
];

export const skillGroups = [
  { title: "Programming Languages", items: ["Python", "C++", "Java", "JavaScript", "R"] },
  { title: "AI/ML & Data Science", items: ["LangChain", "MLOps", "Hugging Face", "TensorFlow", "Keras", "Pandas", "NumPy", "Streamlit", "Scikit-Learn", "Tableau"] },
  { title: "Web Development", items: ["Next.js", "React", "Node.js", "HTML", "CSS", "Vercel"] },
  { title: "Android Development", items: ["Android Studio", "Kotlin", "Jetpack Compose"] },
  { title: "Databases", items: ["MySQL", "Oracle APEX"] },
  { title: "Cloud, Networking & Backend", items: ["Java Servlets", "RESTful APIs", "Firebase"] },
  { title: "Tools & Version Control", items: ["Git", "GitHub", "Anaconda"] },
  { title: "Soft Skills", items: ["Strategic Leadership", "Teamworking", "Project Management", "Technical Documentation", "Problem-Solving", "Pitching Ideas"] },
];

export const experience = {
  company: "SmartLab Sdn. Bhd.",
  role: "Short Intern, Android Developer",
  period: "Feb 2026 – Mar 2026",
  stack: ["Android Studio", "Python", "Kotlin", "RESTful APIs", "Firebase", "LangChain", "Streamlit"],
  points: [
    { title: "AI Data Assistant", text: "Built an AI assistant that turns cargo staff check-in and check-out data at Penang International Airport into operational insight." },
    { title: "Client-specific design", text: "Shaped the system around the operational and logging requirements of Aviation Security for Malaysia Airports Sdn. Bhd." },
    { title: "Mobile implementation", text: "Used Android Studio to build a clean interface that brings mobile devices into staff monitoring and client workflows." },
  ],
};

export const education = [
  { school: "Universiti Sains Malaysia (USM)", degree: "Bachelor of Computer Science, Intelligent Computing", period: "2024 – 2028", note: "CGPA 3.52 (until Year 2 Sem 2) · 2× Dean's List" },
  { school: "Kolej MARA Kuala Nerang (YTP)", degree: "Foundation in Engineering and Technology", period: "2023 – 2024", note: "CGPA 3.96 · MUET Band 4.0" },
  { school: "Sekolah Menengah Islam Al-IKRAM", degree: "Sijil Pelajaran Malaysia (SPM)", period: "2022 – 2023", note: "11A's · Best Student 2023" },
];

export const projects = [
  {
    title: "AI Data Assistant",
    tag: "LLM · Internship",
    period: "Feb – Mar 2026",
    summary: "A data assistant that lets airport operations staff ask questions about real-time attendance logs and get trends back instantly.",
    points: [
      "RESTful pipeline that ingests and retrieves live attendance logs as structured JSON.",
      "Google API integration that uses pre-trained LLMs, so no custom model training was needed.",
      "Dynamic prompts that feed raw database logs to the model and surface patterns such as peak check-in times.",
    ],
    stack: ["Python", "JavaScript", "Streamlit", "LangChain", "RESTful API"],
    repo: "#", // TODO: GitHub/AIDataAssistant
  },
  {
    title: "Seismic Bump Prediction",
    tag: "Machine Learning · University",
    period: "Apr – Jun 2026",
    summary: "A classification model that predicts hazardous seismic bumps in coal mines from historical seismic and acoustic data.",
    points: [
      "Cleaned the data and handled class imbalance and feature scaling with Pandas.",
      "Compared Support Vector Machines and Artificial Neural Networks to find the best architecture.",
      "Tuned hyperparameters to optimise Recall and F1-score so high-risk events are detected first.",
    ],
    stack: ["Python", "Scikit-Learn", "TensorFlow", "Pandas", "NumPy"],
    repo: "#", // TODO: GitHub/SeismicBumb
  },
  {
    title: "Clinic Queue Management App",
    tag: "Android · Internship",
    period: "Feb – Mar 2026",
    summary: "A native Android app that streamlines patient queuing and cuts wait-time bottlenecks in daily clinic operations.",
    points: [
      "Built with Kotlin and Jetpack Compose, backed by Firebase.",
      "Syncs in real time with physical queue hardware.",
      "Real-time queue tracking that improves patient flow.",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Android Studio", "Firebase"],
    repo: "#", // TODO: GitHub/ClinicQueueApp
  },
];

export const leadership = [
  {
    role: "National Executive Committee Member",
    org: "Persatuan Belia HARMONI Malaysia",
    period: "2026 – 2028",
    pillars: [
      { title: "National Operations", text: "Directed youth activism initiatives and centralised execution strategy across 8 state chapters and 25 higher education institution (IPT) branches." },
      { title: "Strategic Governance", text: "Co-authored the official organisational constitution and navigated complex chain-of-command structures with experienced regional leaders." },
      { title: "Stakeholder Engagement", text: "Managed high-level relationships and negotiations with the Ministry of Youth and Sports (KBS), national NGOs, and media and publication outlets." },
    ],
  },
  {
    role: "President",
    org: "Persatuan Belia HARMONI Pulau Pinang",
    period: "2025 – 2027",
    pillars: [
      { title: "Executive Team Leadership", text: "Led a diverse committee of student leaders from universities and colleges across Penang, handling conflict resolution and team optimisation." },
      { title: "STEM Initiative", text: "Spearheaded “World of Wonders”, a flagship project teaching secondary students drone operation, 3D modeling, 3D printing, robotics and programming." },
      { title: "Strategic Partnerships", text: "Built networks with the Penang Youth Development Corporation (PYDC), Pertubuhan IKRAM Malaysia and university Student Representative Councils (MPP)." },
    ],
  },
];

export const certifications = [
  { title: "AI Engineer For Developers Associate", issuer: "DataCamp", date: "Nov 2026" },
  { title: "Data Scientist Associate", issuer: "DataCamp", date: "Nov 2026" },
  { title: "Machine Learning with Python: Build Real-World ML Models", issuer: "IBM", date: "Nov 2026" },
  { title: "GenAI Powered Data Analytics Job Simulation", issuer: "Forage · TATA", date: "Nov 2026" },
  { title: "Data Analytics Job Simulation", issuer: "Forage · Deloitte", date: "Nov 2026" },
  { title: "MLOps Concepts", issuer: "DataCamp", date: "Nov 2026" },
  { title: "Natural Language Processing & Generative AI Technical Workshop", issuer: "UST", date: "Dec 2024" },
];

export const awards = [
  { title: "Gold Medalist", detail: "International Innovation & Entrepreneurship Carnival (IIEC), 2024" },
  { title: "1st Place, Pitching Project", detail: "Muharrik Zon vs Zon, HARMONI Malaysia, 2025" },
  { title: "5th Place, ECO-Challenge", detail: "Material Product and Design Eco-Challenge (MPDEC), 2024" },
  { title: "Best Student", detail: "Sekolah Menengah Islam Al-IKRAM, SPM 2023" },
];
