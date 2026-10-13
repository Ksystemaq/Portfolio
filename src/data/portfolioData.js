export const portfolioData = {
  personal: {
    name: "John Alexis",
    fullName: "John Alexis Batuigas",
    brandName: "JohnAlexis_Portfolio",
    title: "BSIT Graduate & Web Developer",
    location: "Manila, Philippines",
    school: "National Teachers College (NTC)",
    degree: "Bachelor of Science in Information Technology (BSIT)",
    graduationYear: "2024",
    email: "johnalexisbatuigas22@gmail.com",
    phone: "+63 993 796 7094",
    github: "https://github.com/johnalexis",
    githubDisplay: "github.com/johnalexis",
    linkedin: "https://linkedin.com/in/john-alexis-batuigas",
    linkedinDisplay: "linkedin.com/in/john-alexis-batuigas",
    bio: "A recent BSIT graduate of National Teachers College (NTC), looking for opportunities that can make use of my tech-related skills",
    typewriterWords: [
      "John Alexis",
      "a Web Developer",
      "a BSIT Graduate",
      "a Frontend Engineer",
      "a Tech Problem Solver"
    ],
  },
  stats: [
    { label: "Graduated", value: "NTC Manila" },
    { label: "Degree", value: "BSIT" },
    { label: "Projects Completed", value: "15+" },
    { label: "Technologies", value: "12+" }
  ],
  about: {
    paragraphs: [
      "I am a passionate and driven Information Technology graduate from the National Teachers College (NTC). Throughout my academic journey, I discovered a profound enthusiasm for building clean, user-centric web applications and dependable digital solutions.",
      "My foundational coursework and hands-on capstone projects have equipped me with practical skills in modern front-end engineering (React, Tailwind CSS, JavaScript), back-end fundamentals (Node.js, Express, REST APIs), and database architectures (MySQL, MongoDB).",
      "I am eager to contribute my technical aptitude, problem-solving mindset, and continuous learning ethic to a collaborative engineering team where I can create real-world impact while sharpening my craft."
    ],
    highlights: [
      {
        title: "Academic Excellence at NTC",
        description: "Equipped with strong theoretical foundation in systems analysis, software engineering, and practical IT solutions."
      },
      {
        title: "Full-Stack Development Focus",
        description: "Experienced in building end-to-end web applications with React, Node.js, and SQL/NoSQL databases."
      },
      {
        title: "Clean Code & Modern UI",
        description: "Dedicated to crafting responsive, accessible, and aesthetically pleasing interfaces inspired by modern web standards."
      },
      {
        title: "Agile & Team-Oriented",
        description: "Accustomed to version control with Git/GitHub, agile collaboration, and iterative feature development."
      }
    ]
  },
  skills: {
    frontend: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 92 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 88 },
      { name: "TypeScript", level: 75 },
      { name: "Responsive Design", level: 92 }
    ],
    backend: [
      { name: "Node.js", level: 82 },
      { name: "Express.js", level: 80 },
      { name: "RESTful APIs", level: 85 },
      { name: "Python", level: 72 },
      { name: "PHP", level: 70 },
      { name: "Authentication / JWT", level: 78 }
    ],
    database: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Database Design & ERD", level: 85 },
      { name: "Firebase", level: 78 }
    ],
    tools: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 85 },
      { name: "Figma (UI Design)", level: 80 },
      { name: "Vite / Webpack", level: 85 },
      { name: "Agile / Scrum", level: 85 }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Campus IT Asset Management System",
      category: "IT Systems",
      description: "A comprehensive enterprise web application engineered to catalog, audit, and track hardware and software assets across campus labs with role-based access control.",
      tags: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
      demoUrl: "https://example.com/demo-asset-manager",
      githubUrl: "https://github.com/johnalexis/campus-it-assets",
      featured: true,
      accentColor: "teal",
      highlights: ["Real-time inventory status", "QR code scanning simulation", "Exportable PDF/Excel audit reports"]
    },
    {
      id: 2,
      title: "NTC Student Academic Portal & Evaluation Tool",
      category: "Web Applications",
      description: "An intuitive student dashboard offering real-time grade calculations, course prerequisite tracking, and graduation pathway projections for NTC students.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      demoUrl: "https://example.com/demo-portal",
      githubUrl: "https://github.com/johnalexis/student-academic-portal",
      featured: true,
      accentColor: "blue",
      highlights: ["GPA / GWA automated calculator", "Visual prerequisite roadmap", "Responsive dark/light UI"]
    },
    {
      id: 3,
      title: "DevPulse - Tech Community & Blog",
      category: "Web Applications",
      description: "A developer forum and blogging hub where tech enthusiasts can publish technical articles, discuss emerging software trends, and share code snippets.",
      tags: ["React", "Firebase", "Tailwind CSS", "Markdown Parser"],
      demoUrl: "https://example.com/demo-devpulse",
      githubUrl: "https://github.com/johnalexis/devpulse-community",
      featured: false,
      accentColor: "emerald",
      highlights: ["Live markdown preview", "Syntax highlighted snippets", "Real-time comment threads"]
    },
    {
      id: 4,
      title: "Network Latency & Server Health Monitor",
      category: "IT Systems",
      description: "A lightweight dashboard simulating server status pings, bandwidth usage monitoring, and alerting administrators of downtime or high response times.",
      tags: ["JavaScript", "React", "Node.js", "WebSockets"],
      demoUrl: "https://example.com/demo-network-monitor",
      githubUrl: "https://github.com/johnalexis/network-health-monitor",
      featured: false,
      accentColor: "cyan",
      highlights: ["WebSocket live metrics", "Custom alerting thresholds", "Interactive uptime timeline"]
    },
    {
      id: 5,
      title: "Zenith Modern E-Commerce Storefront",
      category: "Web Applications",
      description: "A high-performance modern tech gear store with lightning-fast search, dynamic filtering, persistent shopping cart, and simulated checkout.",
      tags: ["React", "Context API", "Tailwind CSS", "Vite"],
      demoUrl: "https://example.com/demo-zenith-store",
      githubUrl: "https://github.com/johnalexis/zenith-ecommerce",
      featured: true,
      accentColor: "purple",
      highlights: ["Instant category filters", "Persistent cart with localStorage", "Mobile-optimized drawer navigation"]
    },
    {
      id: 6,
      title: "Smart Task & Project Kanban Board",
      category: "Tools",
      description: "A drag-and-drop workflow productivity tool built for tech teams to organize sprint tasks, assign milestones, and monitor project burn-down.",
      tags: ["React", "Tailwind CSS", "Lucide Icons", "LocalStorage"],
      demoUrl: "https://example.com/demo-kanban",
      githubUrl: "https://github.com/johnalexis/smart-kanban-board",
      featured: false,
      accentColor: "indigo",
      highlights: ["Smooth drag & drop", "Custom tag labels", "Task progress breakdown"]
    }
  ],
  resume: {
    summary: "Dedicated and motivated BS Information Technology (BSIT) graduate from National Teachers College (NTC) with hands-on proficiency in modern frontend web technologies, backend API development, and relational database systems. Looking for an entry-level Software Engineer or Web Developer role where I can apply technical skills and drive value.",
    education: {
      degree: "Bachelor of Science in Information Technology (BSIT)",
      institution: "National Teachers College (NTC)",
      campus: "Manila, Philippines",
      period: "2020 – 2024",
      highlights: [
        "Specialization in Web & Application Development / Enterprise IT Systems",
        "Completed Capstone Project on Campus IT Asset Automation",
        "Active member of the Student Information Technology Society"
      ]
    },
    certifications: [
      { name: "Responsive Web Design Certification", issuer: "freeCodeCamp", year: "2023" },
      { name: "JavaScript Algorithms & Data Structures", issuer: "freeCodeCamp", year: "2023" },
      { name: "Foundational C# / Modern Web Fundamentals", issuer: "Microsoft Learn", year: "2024" }
    ],
    experience: [
      {
        role: "IT Intern / Junior Web Developer Trainee",
        company: "Tech Solutions Manila",
        period: "Feb 2024 – May 2024",
        responsibilities: [
          "Assisted in developing and maintaining client-facing React web components.",
          "Collaborated with senior engineers to diagnose and resolve API response latency issues.",
          "Created technical documentation for internal database schemas and user workflows."
        ]
      }
    ]
  }
};
