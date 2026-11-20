export const personalInfo = {
  name: "Mahmoud Atef Abdelaziz",
  displayName: "Mahmoud Atef",
  firstName: "Mahmoud",

  title: "AI & Software Engineer",
  subtitle: "AI & SOFTWARE ENGINEER",

  roles: [
    "AI & Software Engineer",
    "Machine Learning Developer",
    "Azure Cloud Architect",
    "ACPC & ECPC Finalist",
    "Cross-Platform Developer",
  ],

  shortBio:
    "AI & Software Engineer who ships AI-powered products end-to-end—from training machine learning models and designing cloud infrastructure to building production-ready mobile and web applications.",

  fullBio:
    "AI & Software Engineer who ships AI-powered products end-to-end—from training machine learning models and designing cloud infrastructure on Microsoft Azure to building production-ready mobile and web applications. Selected for Egypt's national AI/ML program (Digilians) from over 50,000 applicants (top 4% acceptance) and represented Egypt as an ACPC Finalist in the Africa and Arab Collegiate Programming Championship. Hands-on experience developing multi-agent RAG architectures, LLM orchestration, predictive ML models, scalable REST APIs, and cross-platform apps using Python, LangChain, Azure, FastAPI, ASP.NET Core MVC, and Flutter. Passionate about algorithmic rigor, clean software architecture, and delivering measurable real-world outcomes.",

  location: "Cairo, Egypt",

  email: "mah.atef.abdelaziz@gmail.com",

  phone: "+201014241013",

  socialLinks: {
    github: "https://github.com/Mah-Atef-Abdelaziz",
    linkedin: "https://www.linkedin.com/in/mah-atef/",
    youtube: "https://www.youtube.com/@mah.atef.abdelaziz",
    whatsapp: "https://wa.me/201014241013",
    email: "mailto:mah.atef.abdelaziz@gmail.com",
  },

  cvUrl: "./assets/resume_mahmoud_atef.pdf",
};


// ------------------------------------------------------------
// STATS
// ------------------------------------------------------------

export const statsData = [
  {
    label: "National Program Acceptance",
    value: "Top 4%",
    icon: "Sparkles",
  },
  {
    label: "Algorithmic Championship",
    value: "ACPC Finalist",
    icon: "Code2",
  },
  {
    label: "End-to-End Projects",
    value: "12+",
    icon: "FolderCode",
  },
  {
    label: "Cloud & AI Credentials",
    value: "Azure Certified",
    icon: "CheckCircle2",
  },
];


// ------------------------------------------------------------
// SKILLS
// ------------------------------------------------------------

export const skillCategories = [
  {
    category: "AI, Machine Learning & LLMs",
    description:
      "Modern machine learning model development, agentic workflows, RAG architectures, and predictive analytics.",

    skills: [
      {
        name: "Python",
        level: "Advanced",
        icon: "FileCode",
      },
      {
        name: "Machine Learning",
        level: "Advanced",
        icon: "Cpu",
      },
      {
        name: "Deep Learning & ANN",
        level: "Intermediate",
        icon: "Sparkles",
      },
      {
        name: "LangChain & RAG",
        level: "Advanced",
        icon: "Layers",
      },
      {
        name: "FastAPI",
        level: "Advanced",
        icon: "Zap",
      },
      {
        name: "XGBoost & SHAP",
        level: "Intermediate",
        icon: "BarChart3",
      },
      {
        name: "NumPy & Pandas",
        level: "Advanced",
        icon: "Database",
      },
    ],
  },

  {
    category: "Cloud, Infrastructure & DevOps",
    description:
      "Enterprise cloud administration, virtual architecture, security policies, and system operations.",

    skills: [
      {
        name: "Microsoft Azure",
        level: "Advanced",
        icon: "Globe",
      },
      {
        name: "Active Directory (AD DS)",
        level: "Intermediate",
        icon: "Layers",
      },
      {
        name: "Computer Networks",
        level: "Intermediate",
        icon: "Radio",
      },
      {
        name: "Linux & AIX OS",
        level: "Intermediate",
        icon: "Laptop",
      },
      {
        name: "Git & GitHub",
        level: "Advanced",
        icon: "GitBranch",
      },
      {
        name: "Hugging Face Spaces",
        level: "Intermediate",
        icon: "Navigation",
      },
      {
        name: "Docker & Cloud Deploy",
        level: "Intermediate",
        icon: "Cpu",
      },
    ],
  },

  {
    category: "Software, Mobile & Web Engineering",
    description:
      "Cross-platform mobile applications, full-stack enterprise web services, and robust databases.",

    skills: [
      {
        name: "Flutter (Cross-Platform)",
        level: "Advanced",
        icon: "Smartphone",
      },
      {
        name: "Dart",
        level: "Advanced",
        icon: "Code2",
      },
      {
        name: "ASP.NET Core MVC",
        level: "Intermediate",
        icon: "Layers",
      },
      {
        name: "Node.js & Express",
        level: "Intermediate",
        icon: "Cpu",
      },
      {
        name: "Next.js & React",
        level: "Intermediate",
        icon: "Atom",
      },
      {
        name: "MS SQL Server",
        level: "Advanced",
        icon: "Database",
      },
      {
        name: "PostgreSQL",
        level: "Intermediate",
        icon: "Database",
      },
    ],
  },

  {
    category: "Core CS, Algorithms & Tools",
    description:
      "Competitive programming, low-level architecture, design mastery, and cutting-edge IDE toolchains.",

    skills: [
      {
        name: "C & C++",
        level: "Advanced",
        icon: "Code2",
      },
      {
        name: "C# (.NET)",
        level: "Intermediate",
        icon: "FileCode",
      },
      {
        name: "Data Structures & Algorithms",
        level: "Advanced",
        icon: "Zap",
      },
      {
        name: "Competitive Programming",
        level: "Advanced",
        icon: "Sparkles",
      },
      {
        name: "Adobe Photoshop",
        level: "Advanced",
        icon: "Palette",
      },
      {
        name: "VS Code & Antigravity",
        level: "Advanced",
        icon: "Laptop",
      },
    ],
  },
];


// ------------------------------------------------------------
// PROJECTS
// ------------------------------------------------------------

export const projectsData = [
  {
    id: "raaed",

    title: "Raaed – Multi-Agent Educational Assistant & Vision RAG",

    category: "ai",

    featured: true,

    isTeamProject: true,

    contribution:
      "AI & Cloud Engineer – LangChain Multi-Agent Architecture, Vision RAG, Azure Cloud Deployment",

    description:
      "An interactive AI learning platform built on Microsoft Azure, featuring a multi-agent architecture (Student Assistant and Professor Portal) that transforms complex lecture materials into an intelligent, searchable knowledge base.",

    fullDescription:
      "Developed an interactive AI learning platform using Python (LangChain) and deployed on Microsoft Azure. Features an advanced multi-agent architecture dividing responsibilities between a Student Assistant and Professor Admin Portal. Uses vision-augmented Retrieval-Augmented Generation (RAG) to seamlessly extract and index text, diagrams, equations, and tables from academic PDF lectures, providing verifiable answers with precise citations.",

    technologies: [
      "Python",
      "LangChain",
      "Microsoft Azure",
      "Multi-Agent",
      "Vision RAG",
      "FastAPI",
      "PostgreSQL",
    ],

    image: "/assets/projects/raaed-preview.png",

    githubUrl:
      "https://github.com/Mah-Atef-Abdelaziz",

    liveDemoUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7485036855017717761/",
  },

  {
    id: "ai-router",

    title: "AI Router – Intelligent LLM Routing & Proxy System",

    category: "ai",

    featured: true,

    isTeamProject: false,

    contribution:
      "Solo Developer – Dynamic LLM Routing, Fallback Mechanism & API Gateway Architecture",

    description:
      "Route it, optimize it, save on it. A lightweight proxy API designed to dynamically redirect LLM requests across free-tier inference endpoints with zero-downtime fallback switching.",

    fullDescription:
      "Designed and deployed a high-performance proxy API on Hugging Face Spaces using Python (FastAPI). The system intelligently routes user and developer LLM requests based on model availability, rate limits, and latency metrics. Guarantees zero downtime by seamlessly switching to fallback free-tier models whenever primary endpoints hit quotas.",

    technologies: [
      "Python",
      "FastAPI",
      "LLM APIs",
      "Hugging Face",
      "Reverse Proxy",
      "Docker",
    ],

    image: "/assets/projects/ai-router-preview.png",

    githubUrl:
      "https://github.com/Mah-Atef-Abdelaziz",

    liveDemoUrl:
      "https://github.com/Mah-Atef-Abdelaziz",
  },

  {
    id: "basirah",

    title: "Basirah – Intelligent Meal Demand Forecasting Platform",

    category: "ai",

    featured: true,

    isTeamProject: true,

    contribution:
      "Full Stack & ML Developer – XGBoost Demand Forecasting, SHAP Explainability & Next.js UI",

    description:
      "Predict it, optimize it, reduce the waste. An enterprise web application built using Next.js 16 and FastAPI, utilizing XGBoost and SHAP explainable AI to forecast daily meal demand.",

    fullDescription:
      "An end-to-end full-stack food optimization platform. Built with Next.js 16 (TypeScript) for the frontend and Python (FastAPI) for backend inference against a PostgreSQL database. Implemented XGBoost regression pipelines to forecast meal quantities with high accuracy and integrated SHAP explainable AI so kitchen and enterprise managers understand the predictive drivers behind every daily estimate.",

    technologies: [
      "Next.js 16",
      "TypeScript",
      "Python",
      "FastAPI",
      "XGBoost",
      "SHAP",
      "PostgreSQL",
    ],

    image: "/assets/projects/raaed-preview.png",

    githubUrl:
      "https://github.com/Mah-Atef-Abdelaziz",

    liveDemoUrl:
      "https://github.com/Mah-Atef-Abdelaziz",
  },

  {
    id: "sakanly",

    title: "Sakanly – Real Estate Rental & Housing Discovery App",

    category: "mobile",

    featured: true,

    isTeamProject: true,

    contribution:
      "Lead Mobile & Backend Developer – Flutter UI, Node.js API, Geo-search (Graduation Project - A+)",

    description:
      "Find it, love it, rent it. A cross-platform mobile application and backend designed to help university students and tenants seamlessly discover, inspect, and rent verified housing.",

    fullDescription:
      "Graduation Project evaluated with an A+ under the supervision of Dr. Ahmed Sharaf Eldin (Dean of the Faculty of IT & CS at Sinai University). Built with Flutter for smooth cross-platform mobile UX and Node.js for backend data handling. Features interactive map search, verified landlord property listings, real-time messaging, and multi-criteria price and amenities filtering.",

    technologies: [
      "Flutter",
      "Dart",
      "Node.js",
      "Express.js",
      "MongoDB / SQL",
      "REST APIs",
    ],

    image: "/assets/projects/sakanly-preview.png",

    githubUrl:
      "https://github.com/Mah-Atef-Abdelaziz?tab=repositories&q=Sakanly",

    liveDemoUrl:
      "https://github.com/Mah-Atef-Abdelaziz?tab=repositories&q=Sakanly",
  },

  {
    id: "booktea",

    title: "BookTea – Online Bookstore System",

    category: "fullstack",

    featured: false,

    isTeamProject: false,

    contribution:
      "Full-Stack Developer – ASP.NET Core MVC Architecture, Database & Session Handling",

    description:
      "A simplified web store using ASP.NET Core MVC, handling user interactions, server communications, catalog searches, and data storage efficiently.",

    fullDescription:
      "Engineered an online bookstore web application utilizing Microsoft ASP.NET Core MVC. Implemented clean architectural separation with models, views, and controllers, entity-relational database storage with SQL Server, user authentication, inventory management, and intuitive shopping cart functionality.",

    technologies: [
      "ASP.NET Core",
      "C#",
      "MVC Architecture",
      "SQL Server",
      "Bootstrap",
    ],

    image: "/assets/projects/booktea-preview.png",

    githubUrl:
      "https://github.com/Mah-Atef-Abdelaziz?tab=repositories&q=BookTea",

    liveDemoUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7245487444698030081/",
  },

  {
    id: "bookstore-mgmt",

    title: "Bookstore Management System – Arabic Desktop POS",

    category: "fullstack",

    featured: false,

    isTeamProject: false,

    contribution:
      "Solo Developer – Python Desktop Architecture, SQLite Database, Sales & Profit Reporting",

    description:
      "Offline, Arabic-language desktop application for small bookstores and stationery shops to manage inventory, sales transactions, profits, and generate financial reports.",

    fullDescription:
      "Designed and delivered an offline Arabic-language desktop software solution tailored for Egyptian stationery shops and small bookstores. Built with Python and SQLite, featuring fast point-of-sale receipt logging, inventory tracking with low-stock alerts, and one-click financial summaries.",

    technologies: [
      "Python",
      "Desktop GUI",
      "SQLite",
      "Data Analytics",
      "Reporting",
    ],

    image: "/assets/projects/system-product-preview.jpg",

    githubUrl:
      "https://github.com/Mah-Atef-Abdelaziz/aya-bookstore-management-system",

    liveDemoUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7339915388568113152/",
  },

  {
    id: "sorting-algorithms-tracer",

    title: "Sorting Algorithms Tracer – Interactive Complexity Visualizer",

    category: "fullstack",

    featured: false,

    isTeamProject: false,

    contribution:
      "Solo Developer – C & Web Algorithmic Tracer (Harvard CS50x Final Project)",

    description:
      "Visualizes classic data structures and sorting algorithms step-by-step, demonstrating algorithmic efficiency, time and space complexity in real time.",

    fullDescription:
      "Created as the final project for Harvard's CS50x course. Implements core sorting routines (Merge Sort, Quick Sort, Bubble Sort, Insertion Sort, Selection Sort) with step-by-step state logging and interactive visual tracing to explain algorithm mechanics and Big-O efficiency.",

    technologies: [
      "C",
      "JavaScript",
      "Algorithms",
      "Data Structures",
      "CS50x",
    ],

    image: "/assets/projects/portfolio-preview.jpg",

    githubUrl:
      "https://github.com/Mah-Atef-Abdelaziz/CS-50-Final-Project",

    liveDemoUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7166118694899724289/",
  },

  {
    id: "university-system",

    title: "University Management System – OOP Architecture",

    category: "fullstack",

    featured: false,

    isTeamProject: false,

    contribution:
      "1st Ranking Final Project – C++ Object-Oriented Architecture, File Persistence & Vectors",

    description:
      "1st Ranking C++ university management simulation implementing OOP, vector data structures, and file streams for comprehensive academic records.",

    fullDescription:
      "Honored with 1st Ranking at Sinai University. Built with pure C++ utilizing Object-Oriented Programming (encapsulation, inheritance, polymorphism), vectors, and file I/O persistence to manage doctors, teaching assistants, students, courses, and grade allocations.",

    technologies: [
      "C++",
      "OOP",
      "File Streams",
      "Vectors",
      "Data Structures",
    ],

    image: "/assets/projects/ammarha-preview.jpg",

    githubUrl:
      "https://github.com/Mah-Atef-Abdelaziz/University_System",

    liveDemoUrl:
      "https://github.com/Mah-Atef-Abdelaziz/University_System",
  },
];


// ------------------------------------------------------------
// EXPERIENCE
// ------------------------------------------------------------

export const experienceData = [
  {
    id: "digilians",

    role: "AI & Machine Learning Developer",

    organization: "Digilians (National AI/ML Program)",

    location: "Military Academy – Heliopolis, Cairo, Egypt",

    period: "Jan 2026 – Jun 2026",

    type: "National Competitive Program (Top 4%)",

    highlights: [
      "Selected as one of 2,000 participants from over 50,000+ national applicants for Egypt's flagship AI/ML initiative.",
      "Focused on machine learning model development, data preprocessing, exploratory analysis, and feature engineering.",
      "Engineered Project Raaed: a multi-agent educational assistant with vision-augmented RAG deployed on Microsoft Azure.",
      "Collaborated with national and international technology leaders to build practical, production-ready AI solutions.",
    ],
  },

  {
    id: "depi",

    role: "Azure Cloud Solution Admin & Architect Trainee",

    organization: "Digital Egypt Pioneers Initiative (DEPI)",

    location: "Cairo, Egypt",

    period: "Oct 2024 – May 2025",

    type: "Government Initiative",

    highlights: [
      "Completed rigorous enterprise cloud training covering Microsoft Azure architecture, administration, and cloud security.",
      "Earned certifications and mastered curricula across AZ-900, AI-900, DP-900, AZ-104, AZ-305, AZ-500, and AZ-700.",
      "Implemented enterprise directory management with Active Directory (AD DS), hybrid cloud networking, and access policies.",
    ],
  },

  {
    id: "problem-solving-community",

    role: "Problem Solving Community Founder & Coach",

    organization: "ICPC SU Arish Community",

    location: "Sinai University – Arish Branch (Hybrid)",

    period: "Aug 2024 – Dec 2025",

    type: "Leadership & Community",

    highlights: [
      "Founded and led the premier problem-solving and competitive programming community at Sinai University Arish.",
      "Delivered coaching sessions on data structures, algorithmic paradigms, dynamic programming, and graph theory.",
      "Mentored and guided student teams preparing for national contest stages (ECPC and ACPC).",
    ],
  },

  {
    id: "qnb",

    role: "Information Technology Intern",

    organization: "QNB AlAhli Bank",

    location: "Head Office – Champollion IT Division, Cairo, Egypt",

    period: "Sep 2023 – Oct 2023",

    type: "Banking IT Internship",

    highlights: [
      "Rotated across enterprise IT divisions including Database Management, Linux & IBM AIX systems, and infrastructure.",
      "Gained practical exposure to core banking systems administration, network architecture, and security protocols.",
    ],
  },
];


// ------------------------------------------------------------
// EDUCATION
// ------------------------------------------------------------

export const educationData = [
  {
    institution: "Sinai University",

    degree: "Bachelor in IT & CS (Information Technology)",

    period: "Jan 2021 – Jan 2025",

    location: "Arish, Egypt",

    grade: "3.1 (Very Good) · Project: A+",

    details:
      "Graduation Project: Sakanly (Real Estate Mobile App) evaluated with an A+ grade, supervised by Dr. Ahmed Sharaf Eldin (Dean of F-IT & CS). Honored with The College Exemplary Student Award (Dec '24) and 1st Ranking Sinai University Best Designer Award (Dec '23).",
  },
];


// ------------------------------------------------------------
// CERTIFICATES & ACHIEVEMENTS
// ------------------------------------------------------------

export const certificatesData = [
  {
    id: "azure-ai-900",

    title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",

    issuer: "Microsoft",

    description:
      "Official Microsoft credential validating foundational knowledge of machine learning, deep learning, computer vision, NLP, and conversational AI services on Microsoft Azure.",

    credentialUrl:
      "https://learn.microsoft.com/en-us/users/mahmoudatefabdelaziz-5807/credentials/e69206bde9f5eb17",
  },

  {
    id: "azure-az-900",

    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",

    issuer: "Microsoft",

    description:
      "Official Microsoft credential validating deep understanding of cloud computing models, core Azure architectural services, security, compliance, privacy, and identity management.",

    credentialUrl:
      "https://learn.microsoft.com/en-us/users/mahmoudatefabdelazizesmael-5868/credentials/606b07919f1a5891",
  },

  {
    id: "acpc-finalist",

    title: "ACPC Finalist (Africa & Arab Collegiate Programming Championship)",

    issuer: "ACPC / ICPC",

    description:
      "Qualified as a national finalist representing Egypt at the Africa and Arab Collegiate Programming Championship, solving high-level algorithmic problems under rigorous contest conditions.",

    credentialUrl:
      "https://www.linkedin.com/in/mah-atef/",
  },

  {
    id: "ecpc-finalist",

    title: "ECPC Finalist (Egyptian Collegiate Programming Contest)",

    issuer: "ECPC / ICPC",

    description:
      "Advanced to the finals of the Egyptian Collegiate Programming Contest, competing among Egypt's top university problem solvers in advanced data structures and algorithms.",

    credentialUrl:
      "https://www.linkedin.com/in/mah-atef/",
  },

  {
    id: "flutter-iti",

    title: "Mobile Development Using Flutter",

    issuer: "Information Technology Institute (ITI)",

    description:
      "Comprehensive professional training program covering cross-platform mobile app development with Dart, Flutter widgets, state management architectures, REST APIs, and native integrations.",

    credentialUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7132323615118680064/",
  },

  {
    id: "cs50x",

    title: "CS50x: Introduction to Computer Science",

    issuer: "Harvard University",

    description:
      "Harvard University's flagship computer science program covering C programming, memory allocation, pointers, data structures, algorithms, Python, SQL, and web technologies.",

    credentialUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7166118694899724289/",
  },
];
