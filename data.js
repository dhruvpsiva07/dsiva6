/* =========================================================
   data.js — single source of truth for project content.
   Edit here; index.html and projects.html both read from it.

   Fields:
     id        unique slug
     title     card + modal heading
     meta      short line under the title (year / status)
     group     which section it lands in on projects.html
     featured  true -> appears in the home page highlight reel
     blurb     1-2 sentences, used on cards + mobile stack
     body      array of paragraphs for the modal
     bullets   optional array of detail bullets for the modal
     tech      optional array of tags
     links     optional [{ label, url }]
     image     optional path, e.g. "static/img/buzzmatch.png"
     todo      true -> shows a "placeholder" note in the modal
   ========================================================= */

const PROJECTS = [
  {
    id: "buzzmatch",
    title: "Buzzmatch",
    meta: "2023 — Present · GT Web Dev Club",
    group: "software",
    featured: true,
    blurb: "A team-matching platform for builders looking for collaborators on hackathons, startups, and side projects.",
    body: [
      "Buzzmatch helps builders find the right collaborators for hackathons, startups, and personal projects. Rather than matching on skills and interests alone, the matching algorithm is being extended with ML to weigh working styles, goals, and experience level.",
      "I contribute to full-stack development on a 10+ person Georgia Tech Web Development Club team, working across the React front end, the Flask API, and the PostgreSQL data layer."
    ],
    bullets: [
      "Extending the matching algorithm to account for working styles, goals, and experience",
      "Full-stack work on a 10+ person team using React, Flask, and PostgreSQL",
      "Integrating AI/ML features to improve teammate compatibility beyond skills and interests"
    ],
    tech: ["React", "Flask", "PostgreSQL", "Python", "ML"],
    links: []
  },
  {
    id: "lan-deployment",
    title: "Multi-Classroom LAN Deployment",
    meta: "2023 — 2025 · ~70 devices",
    group: "infra",
    featured: true,
    blurb: "Designed and deployed a two-classroom local area network serving roughly 70 client devices, built for redundancy and scale.",
    body: [
      "A ground-up network build across two classrooms, serving about 70 client devices. I designed the topology and configured a central server, a managed switch, a router, and dual UPS units so the network stayed up through power events.",
      "The physical layer was done by hand: 70+ Ethernet runs terminated and tested to the T568B standard through a structured patch-panel system, with segmentation and cable management planned for reliability and future expansion."
    ],
    bullets: [
      "Central server, managed switch, router, and dual UPS units configured for redundancy",
      "70+ Ethernet runs terminated and tested to the T568B standard",
      "Structured patch-panel system with planned network segmentation and cable management"
    ],
    tech: ["Networking", "Linux", "T568B", "Patch panel", "UPS redundancy"],
    links: []
  },
  {
    id: "tools-dashboard",
    title: "Tools Dashboard",
    meta: "In progress · Flask",
    group: "software",
    featured: true,
    blurb: "A single dashboard that runs AI tools alongside general video and editing utilities — built to get deep practice with API integration.",
    body: [
      "A productivity dashboard that puts a set of AI tools and general video/editing utilities behind one interface, so routine tasks do not mean bouncing between five tabs.",
      "Built on the Flask microframework, primarily as a way to practice integrating and orchestrating third-party APIs cleanly: auth, rate limits, error states, and a consistent UI over inconsistent providers."
    ],
    tech: ["Python", "Flask", "REST APIs"],
    links: [],
    todo: true
  },
  {
    id: "sb-notebook",
    title: "SB Notebook",
    meta: "In progress",
    group: "software",
    featured: false,
    blurb: "Placeholder — a notebook project currently in development.",
    body: [
      "Placeholder description. Drop the real summary into data.js under the \"sb-notebook\" entry: what it does, who it is for, and what you built it with."
    ],
    tech: [],
    links: [],
    todo: true
  },
  {
    id: "world-dashboard",
    title: "World Dashboard",
    meta: "In progress",
    group: "software",
    featured: false,
    blurb: "A full-stack interactive dashboard for exploring world data through maps, charts, and filters.",
    body: [
      "A full-stack interactive dashboard for exploring country-level world data — population, economy, and development indicators — through maps, charts, and filters.",
      "Placeholder: add the data sources, the stack, and anything notable about how the front end renders and caches the data."
    ],
    tech: [],
    links: [],
    todo: true
  },
  {
    id: "3d-game",
    title: "3D Open-World Game",
    meta: "In progress · Browser-based",
    group: "software",
    featured: false,
    blurb: "A browser-based first-person 3D open-world game — rendering, movement, and world generation from the ground up.",
    body: [
      "A first-person 3D open-world game that runs in the browser, built as an exercise in rendering, camera and movement systems, collision, and world generation.",
      "Placeholder: add the engine or library, the scope of the world, and what currently works."
    ],
    tech: [],
    links: [],
    todo: true
  },
  {
    id: "dusty-days",
    title: "Dusty Days",
    meta: "Senior year",
    group: "creative",
    featured: false,
    blurb: "Placeholder — a senior-year project.",
    body: [
      "Placeholder description. Add what Dusty Days is, when it ran, and what your role was."
    ],
    tech: [],
    links: [],
    todo: true
  },
  {
    id: "capstone",
    title: "Capstone Project",
    meta: "Planned · Georgia Tech",
    group: "software",
    featured: false,
    blurb: "Placeholder — upcoming Georgia Tech capstone.",
    body: [
      "Placeholder for the Georgia Tech capstone. Fill in the problem, the team, and the technical approach once the project is scoped."
    ],
    tech: [],
    links: [],
    todo: true
  },
  {
    id: "web-scraper",
    title: "Web Scraper",
    meta: "2026 · Python",
    group: "software",
    featured: false,
    blurb: "A small, configurable web scraper built with Python and BeautifulSoup.",
    body: [
      "A lightweight scraper built with Python and BeautifulSoup for pulling structured data off pages that do not offer an API. It grew out of the scraping work I did during the BMore Funny internship."
    ],
    tech: ["Python", "BeautifulSoup"],
    links: [{ label: "View on GitHub", url: "https://github.com/dhruvpsiva07/Web-Scraping" }]
  }
];


/* ---------- quick facts (hero strip on desktop, intro on phone) ---------- */

const FACTS = [
  { k: "Studying",    v: "B.S. Computer Science", sub: "Georgia Tech" },
  { k: "Threads",     v: "Cybersecurity & Privacy", sub: "Artificial Intelligence" },
  { k: "Graduating",  v: "December 2028", sub: "4.0 GPA" },
  { k: "Looking for", v: "Summer 2027 internships" }
];

/* ---------- experience, leadership, awards, skills ---------- */

const EXPERIENCE = [
  {
    role: "Automation & Content Intern",
    org: "BMore Funny Entertainment",
    cat: "Automation",
    where: "Remote",
    when: "May — Oct 2025",
    bullets: [
      "Built Python automation with BeautifulSoup and Selenium to scrape venue and event data, replacing a manual research workflow and cutting research time by 4 hrs/week",
      "Automated repetitive content and research tasks, then edited long-form media into short-form clips for TikTok and Instagram, contributing to 70% follower growth"
    ]
  },
  {
    role: "IT Support Intern",
    org: "McKnight Doctoral Fellowship Foundation",
    cat: "IT & Events",
    where: "Tampa, FL",
    when: "Feb 2024",
    bullets: [
      "Directed all IT and A/V operations for a week-long national fellowship convention, providing live technical support across sessions",
      "Led a team of 15 student volunteers coordinating equipment setup and event technology"
    ]
  },
  {
    role: "Web Development Consultant",
    org: "Freelance",
    cat: "Web",
    where: "Tampa, FL",
    when: "Aug 2023 — Present",
    bullets: [
      "Delivered website builds and fixes for 3 clients, including remodeling the Middleton High School site for easier resource access using the Hillsborough County CMS",
      "Diagnosed and resolved an email-protocol issue and redesigned the STEAMA Academy site, improving user experience and content delivery"
    ]
  }
];

const LEADERSHIP = [
  {
    role: "President & Co-Founder",
    org: "Middleton Information Technology Club",
    cat: "Leadership",
    where: "Tampa, FL",
    when: "2022 — 2026",
    bullets: [
      "Founded and grew the club to 80+ members and launched Capture-the-Flag cybersecurity teams",
      "Established the MIT Technician Program: CompTIA A+ certified students providing IT support to school faculty and local Tampa Bay startups, including STEAMA Academy",
      "Launched a volunteer program teaching computer and network fundamentals to elementary and middle school students 8 hrs/week"
    ]
  }
];

const AWARDS = [
  {
    role: "4th Place — Highest Difficulty Tier",
    org: "Lockheed Martin CyberQuest",
    cat: "Competition",
    when: "2026",
    bullets: ["Competed in the top tier of the Lockheed Martin CyberQuest cybersecurity competition."]
  },
  {
    role: "3rd Place — State Level",
    org: "CyberFlorida / Cyberlaunch",
    cat: "Competition",
    when: "2025 — 2026",
    bullets: [
      "Qualified through the November 2025 virtual preliminary round and placed at the April 2026 in-person state competition at USF, competing with the Middleton IT Club."
    ]
  },
  {
    role: "Competitor",
    org: "University of Alabama CTF (UACTF)",
    cat: "Competition",
    when: "2026",
    bullets: ["Competed in the 2026 UACTF virtual capture-the-flag competition."]
  },
  {
    role: "Competitor",
    org: "Cyberlaunch — Hillsborough County",
    cat: "Competition",
    when: "2023",
    bullets: ["Attended the first Hillsborough County Cyberlaunch alongside 14 peers — did not place, but it started the CTF track."]
  }
];

const CERTS = [
  "LPIC-1 (Linux Professional Institute)",
  "Microsoft Azure Fundamentals (AZ-900)",
  "CompTIA A+",
  "CompTIA IT Fundamentals+",
  "IT Specialist: Java",
  "IT Specialist: HTML & CSS",
  "IT Specialist: Python",
  "Windows OS",
  "PMI",
  "WordPress Certified Editor"
];

const SKILLS = [
  { label: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "C#", "SQL"] },
  { label: "Frameworks & Libraries", items: ["React", "Flask", "Spring Boot"] },
  { label: "Databases & Web", items: ["PostgreSQL", "MySQL", "SQLite", "HTML/CSS"] },
  { label: "Tools & Platforms", items: ["Microsoft Azure", "Linux", "Power Automate / BI", "WordPress"] }
];
