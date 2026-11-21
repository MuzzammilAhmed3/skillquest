const skillquest_categories = {
  office: {
    id: "office",
    name: "MS Office",
    fullname: "Microsoft Office",
    iconClass: "fa-solid fa-file-word",
    badgeClass: "office",
    themeColor: "var(--category-office)",
    tagline: "Master essential productivity tools",
    description:
      "Create professional documents, organize information, build presentations, and work efficiently.",
    stats: { topics: 5, questions: "150+" },
    subtopics: [
      {
        id: "word",
        name: "MS Word",
        icon: "fa-solid fa-file-word",
        level: "Beginner",
        questionCounts: 35,
        levelCounts: 3,
        description:
          "Create professional documents using formatting, layouts, tables, references, and advanced tools.",
        levels: [
          { id: "beginner", name: "Beginner", questions: 10 },
          { id: "intermediate", name: "Intermediate", questions: 15 },
          { id: "advanced", name: "Advanced", questions: 10 },
        ],
      },
      {
        id: "excel",
        name: "MS Excel",
        icon: "fa-solid fa-file-excel",
        level: "Beginner",
        questionCounts: 40,
        levelCounts: 3,
        description: "Work with spreadsheets, formulas, functions, charts, and data analysis.",
        levels: [
          { id: "beginner", name: "Beginner", questions: 15 },
          { id: "intermediate", name: "Intermediate", questions: 15 },
          { id: "advanced", name: "Advanced", questions: 10 },
        ],
      },
      {
        id: "powerpoint",
        name: "MS PowerPoint",
        icon: "fa-solid fa-file-powerpoint",
        level: "Beginner",
        questionCounts: 30,
        levelCounts: 3,
        description:
          "Design attractive presentations using slides, animations, themes, and multimedia.",
        levels: [
          { id: "beginner", name: "Beginner", questions: 10 },
          { id: "intermediate", name: "Intermediate", questions: 10 },
          { id: "advanced", name: "Advanced", questions: 10 },
        ],
      },
      {
        id: "access",
        name: "MS Access",
        icon: "fa-solid fa-table",
        level: "Intermediate",
        questionCounts: 25,
        levelCounts: 3,
        description: "Understand databases, tables, relationships, queries, forms, and reports.",
        levels: [
          { id: "beginner", name: "Beginner", questions: 10 },
          { id: "intermediate", name: "Intermediate", questions: 10 },
          { id: "advanced", name: "Advanced", questions: 5 },
        ],
      },
      {
        id: "outlook",
        name: "MS Outlook",
        icon: "fa-solid fa-envelope",
        level: "Beginner",
        questionCounts: 20,
        levelCounts: 3,
        description: "Manage emails, calendars, contacts, meetings, tasks, and communication.",
        levels: [
          { id: "beginner", name: "Beginner", questions: 10 },
          { id: "intermediate", name: "Intermediate", questions: 5 },
          { id: "advanced", name: "Advanced", questions: 5 },
        ],
      },
    ],
  },

  frontend: {
    id: "frontend",
    name: "Frontend",
    fullname: "Frontend Development",
    iconClass: "fa-solid fa-code",
    badgeClass: "frontend",
    themeColor: "var(--category-frontend)",
    tagline: "Build beautiful websites and interfaces",
    description:
      "Craft modern, responsive, and performant user interfaces using HTML, CSS, JavaScript, and modern frameworks.",
    stats: { topics: 5, questions: "180+" },
    subtopics: [
      {
        id: "html",
        name: "HTML5 Fundamentals",
        icon: "fa-brands fa-html5",
        level: "Beginner",
        questionCounts: 40,
        levelCounts: 3,
        description:
          "Learn HTML elements, semantic structure, forms, tables, multimedia, and modern HTML5.",
        levels: [
          { id: "beginner", name: "Beginner", questions: 15 },
          { id: "intermediate", name: "Intermediate", questions: 15 },
          { id: "advanced", name: "Advanced", questions: 10 },
        ],
      },
      {
        id: "css",
        name: "CSS3 & Modern Layouts",
        icon: "fa-brands fa-css3-alt",
        level: "Beginner",
        questionCounts: 45,
        levelCounts: 3,
        description:
          "Master selectors, colors, typography, layouts, Flexbox, Grid, animations, and responsive design.",
        levels: [
          { id: "beginner", name: "Beginner", questions: 15 },
          { id: "intermediate", name: "Intermediate", questions: 15 },
          { id: "advanced", name: "Advanced", questions: 10 },
        ],
      },
      {
        id: "javascript",
        name: "JavaScript Core & ES6+",
        icon: "fa-brands fa-js",
        level: "Intermediate",
        questionCounts: 50,
        levelCounts: 3,
        description:
          "Understand variables, functions, arrays, objects, DOM manipulation, events, and asynchronous JavaScript.",
        levels: [
          { id: "beginner", name: "Beginner", questions: 20 },
          { id: "intermediate", name: "Intermediate", questions: 15 },
          { id: "advanced", name: "Advanced", questions: 15 },
        ],
      },
      {
        id: "bootstrap",
        name: "Bootstrap",
        icon: "fa-brands fa-bootstrap",
        level: "Intermediate",
        questionCounts: 25,
        levelCounts: 3,
        description:
          "Build responsive interfaces using Bootstrap containers, grids, components, utilities, and layouts.",
        levels: [
          { id: "beginner", name: "Beginner", questions: 10 },
          { id: "intermediate", name: "Intermediate", questions: 10 },
          { id: "advanced", name: "Advanced", questions: 5 },
        ],
      },
      {
        id: "react",
        name: "React.js",
        icon: "fa-brands fa-react",
        level: "Advanced",
        questionCounts: 35,
        levelCounts: 3,
        description:
          "Learn components, JSX, props, state, hooks, events, routing, and reusable UI development.",
        levels: [
          { id: "beginner", name: "Beginner", questions: 10 },
          { id: "intermediate", name: "Intermediate", questions: 15 },
          { id: "advanced", name: "Advanced", questions: 10 },
        ],
      },
    ],
  },

  backend: {
    id: "backend",
    name: "Backend",
    fullname: "Backend Development",
    iconClass: "fa-solid fa-server",
    badgeClass: "backend",
    themeColor: "var(--category-backend)",
    tagline: "Power websites with server-side programming",
    description:
      "Learn server-side development, APIs, authentication, business logic, databases, and backend architecture.",
    stats: { topics: 5, questions: "175+" },
    subtopics: [
      {
        id: "nodejs",
        name: "Node.js",
        icon: "fa-brands fa-node-js",
        level: "Beginner",
        questionCounts: 40,
        levelCounts: 3,
        description:
          "Understand Node.js, modules, npm, file systems, asynchronous programming, and server development.",
      },
      {
        id: "express",
        name: "Express.js",
        icon: "fa-solid fa-route",
        level: "Intermediate",
        questionCounts: 35,
        levelCounts: 3,
        description:
          "Build backend applications using routes, middleware, controllers, request handling, and REST APIs.",
      },
      {
        id: "api",
        name: "REST APIs",
        icon: "fa-solid fa-plug",
        level: "Intermediate",
        questionCounts: 35,
        levelCounts: 3,
        description:
          "Learn HTTP methods, status codes, API endpoints, JSON, CRUD operations, and API testing.",
      },
      {
        id: "authentication",
        name: "Authentication",
        icon: "fa-solid fa-shield-halved",
        level: "Intermediate",
        questionCounts: 30,
        levelCounts: 3,
        description:
          "Understand registration, login, password hashing, sessions, JWT, authorization, and security.",
      },
      {
        id: "backend-architecture",
        name: "Backend Architecture",
        icon: "fa-solid fa-sitemap",
        level: "Advanced",
        questionCounts: 35,
        levelCounts: 3,
        description:
          "Explore MVC architecture, controllers, services, middleware, error handling, and application structure.",
      },
    ],
  },

  database: {
    id: "database",
    name: "Database",
    fullname: "Database Management",
    iconClass: "fa-solid fa-database",
    badgeClass: "database",
    themeColor: "var(--category-database)",
    tagline: "Organize, manage, and analyze data",
    description:
      "Learn database concepts, data modeling, SQL queries, relationships, database management, and optimization.",
    stats: { topics: 5, questions: "175+" },
    subtopics: [
      {
        id: "mysql",
        name: "MySQL",
        icon: "fa-solid fa-database",
        level: "Beginner",
        questionCounts: 40,
        levelCounts: 3,
        description:
          "Learn relational databases, tables, SQL commands, joins, constraints, and database operations.",
      },
      {
        id: "mongodb",
        name: "MongoDB",
        icon: "fa-solid fa-leaf",
        level: "Intermediate",
        questionCounts: 35,
        levelCounts: 3,
        description:
          "Understand NoSQL databases, documents, collections, CRUD operations, indexing, and aggregation.",
      },
      {
        id: "sql",
        name: "SQL",
        icon: "fa-solid fa-code",
        level: "Beginner",
        questionCounts: 40,
        levelCounts: 3,
        description:
          "Master SELECT, INSERT, UPDATE, DELETE, JOIN, GROUP BY, subqueries, and SQL functions.",
      },
      {
        id: "firebase",
        name: "Firebase",
        icon: "fa-solid fa-fire",
        level: "Intermediate",
        questionCounts: 30,
        levelCounts: 3,
        description:
          "Explore Firebase Authentication, Firestore, Realtime Database, Storage, and security rules.",
      },
      {
        id: "database-design",
        name: "Database Design",
        icon: "fa-solid fa-diagram-project",
        level: "Advanced",
        questionCounts: 30,
        levelCounts: 3,
        description:
          "Learn ER diagrams, relationships, normalization, primary keys, foreign keys, and indexing.",
      },
    ],
  },

  others: {
    id: "others",
    name: "Others",
    fullname: "General Knowledge & Technology",
    iconClass: "fa-solid fa-layer-group",
    badgeClass: "others",
    themeColor: "var(--category-others)",
    tagline: "Explore useful skills and general knowledge",
    description:
      "Expand your knowledge through essential computer skills, internet concepts, technology, communication, and digital productivity.",
    stats: { topics: 5, questions: "150+" },
    subtopics: [
      {
        id: "computer-basics",
        name: "Computer Basics",
        icon: "fa-solid fa-computer",
        level: "Beginner",
        questionCounts: 35,
        levelCounts: 3,
        description:
          "Understand computer hardware, software, operating systems, input devices, and output devices.",
      },
      {
        id: "internet",
        name: "Internet Basics",
        icon: "fa-solid fa-globe",
        level: "Beginner",
        questionCounts: 30,
        levelCounts: 3,
        description:
          "Learn browsers, websites, search engines, URLs, domains, hosting, and internet protocols.",
      },
      {
        id: "operating-systems",
        name: "Operating Systems",
        icon: "fa-brands fa-windows",
        level: "Intermediate",
        questionCounts: 30,
        levelCounts: 3,
        description:
          "Explore Windows, Linux, macOS, file management, processes, memory, and system settings.",
      },
      {
        id: "it-fundamentals",
        name: "IT Fundamentals",
        icon: "fa-solid fa-network-wired",
        level: "Intermediate",
        questionCounts: 30,
        levelCounts: 3,
        description:
          "Understand networking basics, IT infrastructure, troubleshooting, cloud computing, and technology concepts.",
      },
      {
        id: "communication",
        name: "Communication Skills",
        icon: "fa-solid fa-comments",
        level: "Beginner",
        questionCounts: 25,
        levelCounts: 3,
        description:
          "Improve professional communication, teamwork, problem-solving, presentations, and digital etiquette.",
      },
    ],
  },

  graphicDesign: {
    id: "graphicDesign",
    name: "Graphic Design",
    fullname: "Graphic Designing",
    iconClass: "fa-solid fa-pen-nib",
    badgeClass: "graphic-design",
    themeColor: "var(--category-graphic-design)",
    tagline: "Transform creative ideas into visual designs",
    description:
      "Learn graphic design principles, typography, color theory, branding, image editing, and professional design tools.",
    stats: { topics: 5, questions: "160+" },
    subtopics: [
      {
        id: "photoshop",
        name: "Adobe Photoshop",
        icon: "fa-solid fa-image",
        level: "Beginner",
        questionCounts: 40,
        levelCounts: 3,
        description:
          "Learn layers, selections, masks, retouching, photo manipulation, filters, and image editing.",
      },
      {
        id: "illustrator",
        name: "Adobe Illustrator",
        icon: "fa-solid fa-pen-nib",
        level: "Intermediate",
        questionCounts: 35,
        levelCounts: 3,
        description:
          "Master vector graphics, pen tools, shapes, typography, logos, illustrations, and design assets.",
      },
      {
        id: "canva",
        name: "Canva",
        icon: "fa-solid fa-palette",
        level: "Beginner",
        questionCounts: 30,
        levelCounts: 3,
        description:
          "Create social media posts, presentations, posters, flyers, documents, and marketing graphics.",
      },
      {
        id: "design-principles",
        name: "Design Principles",
        icon: "fa-solid fa-shapes",
        level: "Beginner",
        questionCounts: 30,
        levelCounts: 3,
        description:
          "Understand alignment, contrast, balance, hierarchy, proximity, repetition, and visual composition.",
      },
      {
        id: "branding",
        name: "Branding & Logo Design",
        icon: "fa-solid fa-star",
        level: "Advanced",
        questionCounts: 25,
        levelCounts: 3,
        description:
          "Learn brand identity, logo creation, brand guidelines, visual consistency, and color systems.",
      },
    ],
  },

  uiux: {
    id: "uiux",
    name: "UI/UX",
    fullname: "User Interface & User Experience Design",
    iconClass: "fa-solid fa-pen-ruler",
    badgeClass: "ui-ux",
    themeColor: "var(--category-uiux)",
    tagline: "Design user-friendly digital experiences",
    description:
      "Learn interface design, user experience, wireframing, prototyping, usability testing, and design systems.",
    stats: { topics: 5, questions: "160+" },
    subtopics: [
      {
        id: "figma",
        name: "Figma",
        icon: "fa-brands fa-figma",
        level: "Beginner",
        questionCounts: 40,
        levelCounts: 3,
        description:
          "Learn frames, components, auto layout, constraints, prototyping, collaboration, and design tools.",
      },
      {
        id: "ui-design",
        name: "UI Design",
        icon: "fa-solid fa-display",
        level: "Beginner",
        questionCounts: 35,
        levelCounts: 3,
        description:
          "Understand visual hierarchy, typography, spacing, colors, buttons, forms, and interface layouts.",
      },
      {
        id: "ux-design",
        name: "UX Design",
        icon: "fa-solid fa-users",
        level: "Intermediate",
        questionCounts: 35,
        levelCounts: 3,
        description:
          "Explore user research, personas, user journeys, information architecture, and user-centered design.",
      },
      {
        id: "wireframing",
        name: "Wireframing & Prototyping",
        icon: "fa-solid fa-object-group",
        level: "Intermediate",
        questionCounts: 25,
        levelCounts: 3,
        description:
          "Create low-fidelity wireframes, high-fidelity mockups, interactive prototypes, and user flows.",
      },
      {
        id: "usability-testing",
        name: "Usability Testing",
        icon: "fa-solid fa-vial",
        level: "Advanced",
        questionCounts: 25,
        levelCounts: 3,
        description:
          "Learn usability testing, accessibility, feedback collection, heuristic evaluation, and design improvements.",
      },
    ],
  },

  programming: {
    id: "programming",
    name: "Programming",
    fullname: "Programming & Software Development",
    iconClass: "fa-solid fa-laptop-code",
    badgeClass: "programming",
    themeColor: "var(--category-programming)",
    tagline: "Develop logical thinking and coding skills",
    description:
      "Learn programming languages, algorithms, data structures, object-oriented programming, and software development concepts.",
    stats: { topics: 5, questions: "175+" },
    subtopics: [
      {
        id: "python",
        name: "Python",
        icon: "fa-brands fa-python",
        level: "Beginner",
        questionCounts: 40,
        levelCounts: 3,
        description:
          "Learn Python syntax, variables, data types, conditions, loops, functions, modules, and file handling.",
      },
      {
        id: "cpp",
        name: "C++",
        icon: "fa-solid fa-code",
        level: "Beginner",
        questionCounts: 35,
        levelCounts: 3,
        description:
          "Understand C++ syntax, variables, operators, conditions, loops, functions, pointers, and classes.",
      },
      {
        id: "java",
        name: "Java",
        icon: "fa-brands fa-java",
        level: "Intermediate",
        questionCounts: 35,
        levelCounts: 3,
        description:
          "Explore Java syntax, object-oriented programming, classes, inheritance, interfaces, and exception handling.",
      },
      {
        id: "data-structures",
        name: "Data Structures",
        icon: "fa-solid fa-diagram-project",
        level: "Advanced",
        questionCounts: 35,
        levelCounts: 3,
        description:
          "Master arrays, linked lists, stacks, queues, trees, graphs, hash tables, and their applications.",
      },
      {
        id: "algorithms",
        name: "Algorithms",
        icon: "fa-solid fa-gears",
        level: "Advanced",
        questionCounts: 30,
        levelCounts: 3,
        description:
          "Learn searching, sorting, recursion, problem-solving strategies, time complexity, and space complexity.",
      },
    ],
  },

  cybersecurity: {
    id: "cybersecurity",
    name: "Cyber Security",
    fullname: "Cybersecurity & Information Security",
    iconClass: "fa-solid fa-shield-halved",
    badgeClass: "cybersecurity",
    themeColor: "var(--category-cybersecurity)",
    tagline: "Protect systems, networks, and digital information",
    description:
      "Understand cybersecurity principles, network security, ethical hacking, digital privacy, and threat protection.",
    stats: { topics: 5, questions: "160+" },
    subtopics: [
      {
        id: "security-fundamentals",
        name: "Security Fundamentals",
        icon: "fa-solid fa-lock",
        level: "Beginner",
        questionCounts: 35,
        levelCounts: 3,
        description:
          "Learn CIA triad, authentication, authorization, encryption, vulnerabilities, and security principles.",
      },
      {
        id: "network-security",
        name: "Network Security",
        icon: "fa-solid fa-network-wired",
        level: "Intermediate",
        questionCounts: 35,
        levelCounts: 3,
        description:
          "Understand firewalls, VPNs, secure protocols, network threats, intrusion detection, and protection.",
      },
      {
        id: "ethical-hacking",
        name: "Ethical Hacking",
        icon: "fa-solid fa-user-secret",
        level: "Advanced",
        questionCounts: 35,
        levelCounts: 3,
        description:
          "Explore authorized penetration testing, reconnaissance, vulnerability assessment, and security reporting.",
      },
      {
        id: "cryptography",
        name: "Cryptography",
        icon: "fa-solid fa-key",
        level: "Advanced",
        questionCounts: 30,
        levelCounts: 3,
        description:
          "Learn encryption, decryption, hashing, digital signatures, public keys, and cryptographic algorithms.",
      },
      {
        id: "digital-safety",
        name: "Digital Safety",
        icon: "fa-solid fa-user-shield",
        level: "Beginner",
        questionCounts: 25,
        levelCounts: 3,
        description:
          "Understand phishing, malware, password safety, social engineering, privacy, and online protection.",
      },
    ],
  },

  digitalMarketing: {
    id: "digitalMarketing",
    name: "Digital Marketing",
    fullname: "Digital Marketing & Online Advertising",
    iconClass: "fa-solid fa-bullhorn",
    badgeClass: "digital-marketing",
    themeColor: "var(--category-digital-marketing)",
    tagline: "Grow brands and businesses through digital channels",
    description:
      "Learn online marketing strategies, SEO, social media, content creation, email campaigns, and digital advertising.",
    stats: { topics: 5, questions: "165+" },
    subtopics: [
      {
        id: "seo",
        name: "SEO",
        icon: "fa-solid fa-magnifying-glass-chart",
        level: "Beginner",
        questionCounts: 40,
        levelCounts: 3,
        description:
          "Learn keyword research, on-page SEO, technical SEO, backlinks, search rankings, and optimization.",
      },
      {
        id: "social-media-marketing",
        name: "Social Media Marketing",
        icon: "fa-solid fa-hashtag",
        level: "Beginner",
        questionCounts: 35,
        levelCounts: 3,
        description:
          "Understand social media platforms, content calendars, audience engagement, analytics, and campaigns.",
      },
      {
        id: "content-marketing",
        name: "Content Marketing",
        icon: "fa-solid fa-pen-to-square",
        level: "Intermediate",
        questionCounts: 30,
        levelCounts: 3,
        description:
          "Learn content strategy, blogging, copywriting, storytelling, content planning, and audience targeting.",
      },
      {
        id: "email-marketing",
        name: "Email Marketing",
        icon: "fa-solid fa-envelope-open-text",
        levels: [
          {
            id: "beginner",
            name: "Beginner",
            questions: 10,
          },
          {
            id: "intermediate",
            name: "Intermediate",
            questions: 15,
          },
          {
            id: "advanced",
            name: "Advanced",
            questions: 10,
          },
        ],
        questionCounts: 35,
        levelCounts: 3,
        description:
          "Explore email campaigns, mailing lists, segmentation, automation, newsletters, and performance metrics.",
      },
      {
        id: "paid-advertising",
        name: "Paid Advertising",
        icon: "fa-solid fa-rectangle-ad",
        level: "Advanced",
        questionCounts: 30,
        levelCounts: 3,
        description:
          "Understand Google Ads, social media advertising, campaign budgets, targeting, CPC, CPM, and conversions.",
      },
    ],
  },
};
