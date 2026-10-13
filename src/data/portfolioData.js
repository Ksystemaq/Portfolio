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
    github: "https://github.com/Ksystemaq",
    githubDisplay: "github.com/Ksystemaq",
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
      title: "Spendwise – Financial & Expense Tracker",
      category: "Web Applications",
      description: "A full-stack personal finance and expense management platform built with Next.js and TypeScript. Features robust database modeling with Prisma ORM, secure authentication with Auth.js, and budget analytics.",
      tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "Auth.js"],
      demoUrl: null,
      githubUrl: "https://github.com/Ksystemaq/Spendwise",
      featured: true,
      accentColor: "teal",
      highlights: [
        "Next.js App Router & server-side rendering architecture",
        "Prisma ORM schema migrations and database seeding",
        "Personalized budget tracking and category expense reports"
      ]
    },
    {
      id: 2,
      title: "SmartDental – Clinic Booking & Management",
      category: "IT Systems",
      description: "An end-to-end appointment scheduling and clinic operations management system powered by Supabase and React. Includes automated time-slot picking, notification center, and patient records management.",
      tags: ["React", "JavaScript", "Supabase", "Tailwind CSS", "PostgreSQL"],
      demoUrl: null,
      githubUrl: "https://github.com/Ksystemaq/SmartDental",
      featured: true,
      accentColor: "blue",
      highlights: [
        "Multi-step appointment booking wizard with live slot validation",
        "Supabase PostgreSQL backend with custom schema migrations",
        "Centralized notification manager and interactive patient dashboard"
      ]
    },
    {
      id: 3,
      title: "Modern Developer Portfolio",
      category: "Web Applications",
      description: "A sleek, high-performance portfolio application built with React, Vite, and Tailwind CSS. Features dynamic project showcases, smooth animations, dark/light theme switching, and interactive modals.",
      tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
      demoUrl: null,
      githubUrl: "https://github.com/Ksystemaq/Portfolio",
      featured: true,
      accentColor: "cyan",
      highlights: [
        "Full light and dark mode theme switching via Context API",
        "Responsive design with Lucide icons and particle effects",
        "Modular component hierarchy and optimized Vite build"
      ]
    },
    {
      id: 4,
      title: "Campus IT Asset Management System",
      category: "IT Systems",
      description: "A comprehensive enterprise web application engineered to catalog, audit, and track hardware and software assets across campus labs with role-based access control.",
      tags: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
      demoUrl: null,
      githubUrl: "https://github.com/Ksystemaq/campus-it-assets",
      featured: false,
      accentColor: "emerald",
      highlights: [
        "Real-time inventory status",
        "QR code scanning simulation",
        "Exportable PDF/Excel audit reports"
      ]
    },
    {
      id: 5,
      title: "DevPulse - Tech Community & Blog",
      category: "Web Applications",
      description: "A developer forum and blogging hub where tech enthusiasts can publish technical articles, discuss emerging software trends, and share code snippets.",
      tags: ["React", "Firebase", "Tailwind CSS", "Markdown Parser"],
      demoUrl: null,
      githubUrl: "https://github.com/Ksystemaq/devpulse-community",
      featured: false,
      accentColor: "purple",
      highlights: [
        "Live markdown preview",
        "Syntax highlighted snippets",
        "Real-time comment threads"
      ]
    },
    {
      id: 6,
      title: "Smart Task & Project Kanban Board",
      category: "Tools",
      description: "A drag-and-drop workflow productivity tool built for tech teams to organize sprint tasks, assign milestones, and monitor project burn-down.",
      tags: ["React", "Tailwind CSS", "Lucide Icons", "LocalStorage"],
      demoUrl: null,
      githubUrl: "https://github.com/Ksystemaq/smart-kanban-board",
      featured: false,
      accentColor: "indigo",
      highlights: [
        "Smooth drag & drop task sorting",
        "Custom tag labels and priority indicators",
        "Task progress breakdown and local storage persistence"
      ]
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
