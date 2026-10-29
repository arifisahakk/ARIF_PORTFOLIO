export const profile = {
  name: "'Arif Isahak",
  headline: "Computer Science student · Intelligent Computing",
  tagline:
    "Academically driven, award-winning innovator building AI, machine learning and mobile solutions that solve real operational problems.",
  email: "arif05.isahak@gmail.com",
  linkedin: "https://www.linkedin.com/in/arif-isahak-7889082ab/", // TODO: paste your LinkedIn URL
  github: "https://github.com/arifisahakk", // TODO: paste your GitHub URL
  cv: "CV ('Arif bin Isahak).pdf", // TODO: put your CV PDF in /public
  stats: [
    { label: "CGPA (USM)", value: "3.52" },
    { label: "Dean's List", value: "2×" },
    { label: "IIEC 2024", value: "Gold" },
    { label: "SPM", value: "11A's" },
  ],
};

export const featuredSkills = ["Python", "Kotlin", "Next.js", "TensorFlow", "LangChain"];

export const skillGroups = [
  { title: "Languages", items: ["Python", "C++", "Java", "JavaScript", "R"] },
  { title: "AI / ML & Data", items: ["TensorFlow", "Keras", "LangChain", "Hugging Face", "MLOps", "Pandas", "NumPy", "Streamlit"] },
  { title: "Web", items: ["Next.js", "React", "Node.js", "HTML/CSS", "Vercel"] },
  { title: "Mobile", items: ["Kotlin", "Android Studio", "Jetpack Compose"] },
  { title: "Backend & Data", items: ["RESTful APIs", "Java Servlets", "Firebase", "MySQL", "Oracle APEX"] },
  { title: "Tools", items: ["Git", "GitHub", "Anaconda"] },
];

export const experience = {
  company: "SmartLab Sdn. Bhd.",
  role: "Android Developer (Short Internship)",
  period: "Feb 2026 – Mar 2026",
  stack: ["Android Studio", "Kotlin", "Python", "RESTful APIs", "Firebase", "Streamlit"],
  points: [
    "Built an AI-driven data assistant that surfaces operational insights from cargo staff check-in and check-out data at Penang International Airport.",
    "Designed the system around the operational and logging requirements of Aviation Security for Malaysia Airports Sdn Bhd.",
    "Created an Android interface that simplifies staff monitoring and client workflows on mobile devices.",
    "Engineered a RESTful data pipeline (JSON payloads) and dynamic LLM prompts via the Google API to detect trends such as peak check-in times, with no custom model training.",
  ],
};

export const projects = [
  {
    title: "Seismic Bump Prediction",
    type: "Machine Learning · University Project",
    summary:
      "A classification model that predicts hazardous seismic bumps in coal mines from historical seismic and acoustic data.",
    points: [
      "Cleaned data and handled class imbalance and feature scaling with Pandas.",
      "Compared SVMs and Artificial Neural Networks to find the strongest architecture.",
      "Tuned hyperparameters to optimise Recall and F1-score, prioritising detection of high-risk events.",
    ],
    stack: ["Python", "Scikit-Learn", "TensorFlow", "Pandas", "NumPy"],
  },
  {
    title: "Clinic Queue Management App",
    type: "Android · Short Intern Project",
    summary:
      "A native Android app that streamlines patient queuing and reduces wait-time bottlenecks in daily clinic operations.",
    points: [
      "Built with Kotlin and Jetpack Compose, backed by Firebase.",
      "Synchronises in real time with physical queue hardware.",
      "Real-time queue tracking to improve patient flow.",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Android Studio", "Firebase"],
  },
];

export const leadership = {
  role: "National Executive Committee Member",
  org: "Persatuan Belia HARMONI Malaysia",
  period: "2026 – 2028",
  pillars: [
    {
      title: "National Operations",
      text: "Directed youth initiatives and centralised execution strategy across 8 state chapters and 25 higher education institution branches.",
    },
    {
      title: "Strategic Governance",
      text: "Co-authored the organisation's official constitution and worked within complex chain-of-command structures alongside experienced regional leaders.",
    },
    {
      title: "Stakeholder Engagement",
      text: "Managed high-level relationships and negotiations with the Ministry of Youth and Sports (KBS), national NGOs and media outlets.",
    },
  ],
  also: "Previously President, HARMONI Pulau Pinang (2025 – 2027): led a multi-university committee and the “World of Wonders” STEM programme teaching drones, 3D printing, robotics and programming to secondary students.",
};

export const awards = [
  { title: "1st Place, Pitching Project", detail: "Muharrik Zon vs Zon, HARMONI Malaysia 2025" },
  { title: "Gold Medal", detail: "International Innovation & Entrepreneurship Carnival, 2024" },
  { title: "5th Place, ECO-Challenge", detail: "Material Product and Design Eco-Challenge, 2024" },
  { title: "Best Student", detail: "SPM 2023 · 11A's" },
];
