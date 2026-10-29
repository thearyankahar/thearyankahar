import { PersonalInfo, Project, SkillCategory } from '../types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "ARYAN KAHAR",
  role: "Full-Stack Web Developer",
  location: "Pune, Maharashtra, India",
  coordinates: "18.5204° N, 73.8567° E",
  timezone: "Asia/Kolkata (IST)",
  status: "OPEN FOR FULL-STACK ROLES & HIGH-IMPACT OPPORTUNITIES",
  bioHeadline: "PRECISION DATA SCHEMAS. TACTILE SPATIAL EXPERIENCES.",
  bioDescription:
    "Aryan Shyamlal Kahar is a Full-Stack Web Developer based in Pune, India. His experience spans backend REST APIs, relational MySQL and document MongoDB architectures, and responsive interactive web applications. He emphasizes disciplined data schemas, role-based workflows, and clean digital craft across both commercial client platforms and functional developer prototypes.",
  contact: {
    email: "thearyankahar@gmail.com",
    phone: "+91 8767470841",
    website: "https://aryan.me",
    websiteDisplay: "thearyankahar.dev",
    linkedin: "https://linkedin.com/in/thearyankahar",
    linkedinDisplay: "in/thearyankahar",
    github: "https://github.com/thearyankahar",
    githubDisplay: "github.com/thearyankahar",
  },
  education: {
    institution: "JSPM University Pune",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2023 – 2026",
    location: "Pune, India",
  },
};

export const PROJECTS: Project[] = [
  {
    id: "dixit-lending",
    number: "01",
    title: "Dixit Lending Solution",
    subtitle: "Lending Operations CRM & Web Application",
    tagline: "End-to-end commercial lending system combining multi-tier operations dashboards, KYC document vaulting, and customer-facing loan inquiry tools.",
    category: "Fintech / Operations CRM & Web App",
    year: "2024–2026",
    status: "Commercial Platform",
    technologies: [
      "Node.js",
      "Express.js",
      "Next.js",
      "React",
      "TypeScript",
      "MySQL",
      "AWS SDK (S3/R2)",
      "Tailwind CSS",
      "JWT",
      "Bcrypt",
      "Baileys (WhatsApp)",
      "XLSX",
    ],
    image: "/assets/Dixit Lending Solution Logo.png",
    bannerImage: "/assets/cln-profile-banner.png",
    summary:
      "A complete commercial lending platform developed for Dixit Lending Solution, uniting an operational Customer Loan Network Management (CLN) CRM backend with a modern customer-facing web application. The platform coordinates loan origination, KYC document uploads, field attendance logs, and client-side financial calculations.",
    problemStatement:
      "Micro-finance and regional lending operations frequently struggle with disconnected Excel spreadsheets, manual customer verification delays, and fragmented communication between field officers and administrators.",
    myContribution:
      "Architected the full-stack system: built the role-based Admin and Employee portals in Express.js, structured the normalized MySQL schema, integrated S3/R2 object storage for customer KYC documents, implemented automated WhatsApp alerts via Baileys, and built the Next.js customer application with interactive loan EMI calculators.",
    coreModules: [
      "Role-Based Dashboards (Separated Admin & Employee Portals)",
      "Loan Origination & Multi-Stage Application Approval Workflow",
      "Encrypted KYC Identity Storage via S3/R2-Compatible Object Storage",
      "Field Employee Shift Attendance & Geolocation Check-in Logging",
      "Interactive Client-Side EMI Loan Calculator (Principal, Rate, Tenure)",
      "Excel Batch Importer & Exporter for Portfolio Accounting",
      "Automated WhatsApp Transaction Receipts & Notifications (Baileys)",
    ],
    engineeringDecisions: [
      "Unified operational backend and customer web interfaces under consistent business logic and API contracts.",
      "Decoupled heavy identity file storage from the application server by streaming uploads directly to S3/R2-compatible storage via @aws-sdk/client-s3 and multer-s3.",
      "Modeled relational MySQL schema with primary and foreign key constraints across users, customers, loan accounts, and field attendance logs.",
      "Engineered automated WhatsApp webhook dispatches via Baileys to transmit loan application updates without third-party SMS per-message fees.",
    ],
    systemFlow: [
      { step: "01", label: "CUSTOMER INQUIRY", description: "Applicant reviews loan products and calculates EMI on the Next.js web application." },
      { step: "02", label: "APPLICATION SUBMISSION", description: "Identity records and KYC documents are uploaded through the validated API gateway." },
      { step: "03", label: "S3/R2 VAULT STORAGE", description: "Document buffers are streamed to isolated object storage buckets without exposing disk paths." },
      { step: "04", label: "ADMIN REVIEW", description: "Lending officers verify applicant documentation and approve loan terms in the CRM portal." },
      { step: "05", label: "WHATSAPP NOTIFICATION", description: "Baileys worker dispatches transactional confirmation and repayment schedule to the borrower." },
    ],
    technicalNotes: [
      { label: "Storage", detail: "S3/R2-compatible object storage via @aws-sdk/client-s3 and multer-s3." },
      { label: "Database", detail: "Relational MySQL tables with indexed customer and loan lifecycle records." },
      { label: "Automation", detail: "Direct Baileys WhatsApp integration and XLSX spreadsheet batch sync." },
    ],
    accentColor: "#2DD4BF", // Restrained teal
  },
  {
    id: "smart-curriculum",
    number: "02",
    title: "Smart Curriculum Attendance",
    subtitle: "Academic Schedule & Attendance Platform",
    tagline: "Academic administration web application for managing daily lecture timetables, faculty assignments, and real-time student attendance records.",
    category: "EdTech / Operations Platform",
    year: "2024",
    status: "Web Application",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Firebase Auth",
      "Cloud Firestore",
      "Tailwind CSS",
    ],
    summary:
      "A web application engineered to streamline university lecture tracking and attendance logs. It provides faculty members with timetable scheduling tools while offering administrative panels for role oversight and attendance verification.",
    problemStatement:
      "Paper-based attendance marking and static paper timetables frequently result in scheduling conflicts, unrecorded lecture substitutions, and administrative reconciliation delays.",
    myContribution:
      "Built the responsive frontend using React, TypeScript, and Vite; structured role-based navigation and authentication using Firebase Auth; and designed Firestore NoSQL collections for live timetable updates and historical attendance ledgers.",
    coreModules: [
      "Faculty Schedule Management (Subjects, Timings, Classrooms)",
      "Daily Student Attendance Marking & History Tracking",
      "Role-Based Separation for Students, Faculty, and Administrators",
      "Administrative User Provisioning & Permission Control",
      "Cloud Firestore Real-Time Data Synchronization",
    ],
    engineeringDecisions: [
      "Adopted TypeScript with Vite to enforce strict component prop interfaces and enable sub-second HMR during development.",
      "Separated user roles at the Firebase Authentication layer to prevent students from accessing faculty attendance marking functions.",
      "Organized Firestore documents by academic terms, departments, and course codes for low-latency queries.",
    ],
    systemFlow: [
      { step: "01", label: "AUTHENTICATION", description: "Faculty or student logs in via Firebase Authentication with role claim verification." },
      { step: "02", label: "SCHEDULE QUERY", description: "Client queries Firestore for active daily timetable based on department and term." },
      { step: "03", label: "ATTENDANCE RECORDING", description: "Faculty marks present/absent states on the responsive roster interface." },
      { step: "04", label: "FIRESTORE SYNC", description: "Attendance records are written to student and lecture sub-collections in real-time." },
    ],
    technicalNotes: [
      { label: "Backend", detail: "Firebase Authentication and Cloud Firestore NoSQL storage." },
      { label: "Architecture", detail: "Component-driven React 18 client with Tailwind CSS utility styling." },
    ],
    accentColor: "#2DD4BF",
  },
  {
    id: "breed-rec",
    number: "03",
    title: "Livestock Breed Recognition & Trait Analysis",
    subtitle: "Computer Vision & Agricultural Trait Analysis",
    tagline: "Machine learning service combining neural classification with OpenCV contour measurements for livestock breed prediction and trait guidance.",
    category: "Applied ML / Computer Vision",
    year: "2024",
    status: "Machine Learning Service",
    technologies: [
      "Python",
      "Flask",
      "Hugging Face API",
      "OpenCV",
      "NumPy",
      "HTML5 / CSS3",
    ],
    image: "/assets/breed-sample-murrah.jpg",
    summary:
      "An agricultural computer vision system that analyzes cattle and buffalo photos to identify breeds and provide practical farm-management recommendations, utilizing a confidence-aware pipeline with OpenCV morphological measurement fallback.",
    problemStatement:
      "Smallholder livestock farmers often lack immediate veterinary or breed-specialist access to verify animal genetics, leading to suboptimal feed plans, poor climate adaptation, and mismatched breeding goals.",
    myContribution:
      "Implemented the Flask application backend, image processing routines using OpenCV (contour detection and aspect ratios), integrated the Hugging Face Inference API for breed prediction, and constructed the trait taxonomy mapping breeds to climate and breeding utility tags.",
    coreModules: [
      "Image Ingestion & Livestock Verification (Filters non-livestock images)",
      "Neural Breed Prediction via Hugging Face Inference API",
      "OpenCV Contour-Based Morphological Measurement Fallback",
      "Agronomic Trait Tagging (Dairy, Draught, Dual-Purpose)",
      "Contextual Climate Adaptation & Management Guidance Output",
      "Dual Interface: Interactive Web Upload & Programmatic REST API",
    ],
    engineeringDecisions: [
      "Added an initial verification stage to detect and reject non-animal photos before sending them to the inference API.",
      "Engineered an OpenCV contour detection fallback that estimates animal morphology if the neural inference API returns low confidence.",
      "Enriched API responses with actionable husbandry guidance, such as heat tolerance, dairy yield expectations, and regional adaptability.",
    ],
    systemFlow: [
      { step: "01", label: "IMAGE UPLOAD", description: "User submits cattle or buffalo photo via web interface or REST API endpoint." },
      { step: "02", label: "PRE-VERIFICATION", description: "System verifies livestock features and screens out false positives." },
      { step: "03", label: "INFERENCE ROUTING", description: "Image dispatched to Hugging Face Inference Router; falls back to OpenCV contours if low confidence." },
      { step: "04", label: "METADATA ENRICHMENT", description: "Identified breed is mapped against agricultural database for origin, climate, and utility tags." },
    ],
    technicalNotes: [
      { label: "Pipeline", detail: "Confidence-aware fallback between neural model and OpenCV contour extraction." },
      { label: "Deployment", detail: "Lightweight Flask microservice with REST JSON response." },
    ],
    accentColor: "#E5A93C", // Restrained warm amber
  },
  {
    id: "movie-booking",
    number: "04",
    title: "Online Movie Ticket Booking",
    subtitle: "Cinema Discovery & Reservation Engine",
    tagline: "Full-stack reservation application managing theaters, screening showtimes, seat allocation, and customer ticket bookings.",
    category: "Web Application / Reservation Engine",
    year: "2023",
    status: "Web Application",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "AngularJS",
      "Bootstrap",
    ],
    summary:
      "A database-backed cinema booking platform providing theater administration, movie catalog scheduling, and an interactive customer seat reservation workflow across multiple cities.",
    problemStatement:
      "Cinema operators require clear data structures to prevent double-booking of auditorium seats while allowing administrators to schedule screening showtimes across multiple locations.",
    myContribution:
      "Developed the Express.js REST API with modular controllers, designed Mongoose schemas for movies, theaters, showtimes, and booking tickets, and constructed the interactive seat selection view.",
    coreModules: [
      "City & Theater Assignment Management",
      "Movie Catalog Listing & Showtime Scheduling",
      "Interactive Seat Selection & Booking Allocation",
      "User Authentication & Booking History Records",
      "Modular RESTful CRUD API Routing",
    ],
    engineeringDecisions: [
      "Divided Express application routes into dedicated modules (movie-crud, theatre-crud, showtime-crud, bookings-crud) for maintainable controller separation.",
      "Modeled auditorium seating layouts as dimensional arrays stored within Mongoose showtime documents.",
      "Validated seat vacancy prior to booking commit to prevent duplicate reservations.",
    ],
    systemFlow: [
      { step: "01", label: "THEATER & MOVIE SCAN", description: "User selects destination city, theater, and desired movie screening." },
      { step: "02", label: "SHOWTIME SELECTION", description: "System returns active showtimes and real-time seat availability map." },
      { step: "03", label: "SEAT RESERVATION", description: "Selected seats are validated against current booking ledger." },
      { step: "04", label: "BOOKING COMMIT", description: "Reservation is recorded in MongoDB and confirmation details are rendered." },
    ],
    technicalNotes: [
      { label: "Architecture", detail: "Modular Express.js CRUD API with MongoDB / Mongoose." },
      { label: "Persistence", detail: "Mongoose document schemas linking cinemas, auditoriums, and ticket logs." },
    ],
    accentColor: "#2DD4BF",
  },
  {
    id: "ai-loan-calling",
    number: "05",
    title: "CLN AI Loan Calling System",
    subtitle: "Outbound Dialing Telephony Engine",
    tagline: "Architecture specification and working developer prototype for automated outbound loan campaigns via USB GSM modem hardware pools.",
    category: "Telephony / Concept & Working Prototype",
    year: "2026",
    status: "Concept & Working Prototype",
    isConcept: true,
    technologies: [
      "Node.js",
      "Express.js",
      "React",
      "Vite",
      "MySQL 8.0",
      "Redis",
      "Gammu SMSD",
      "OpenAI API",
      "Docker Compose",
    ],
    summary:
      "An architectural design specification and functional developer prototype engineered to explore automated outbound loan verification and recovery campaigns using USB GSM modems with SIM rotation and conversational AI handoff.",
    problemStatement:
      "Fintech companies handling large loan portfolios face substantial costs using proprietary cloud telephony per-minute APIs. This prototype explores whether local USB GSM modem hardware pools can reliably automate initial borrower contact campaigns.",
    myContribution:
      "Authored the complete system architecture, created the Docker Compose setup for MySQL and Redis, implemented Gammu SMSD modem control scripts using serial AT-commands, designed the SIM card rotation logic, and built the developer test dashboard in React.",
    coreModules: [
      "USB GSM Modem Control via Gammu SMSD & Serial AT-Commands",
      "SIM Card Rotation Logic to Balance Outbound Channel Allocation",
      "Redis Priority Job Queue for Campaign Batches & Retries",
      "Automated IVR Audio Greeting Trigger on Call Answer",
      "Voice Bridge Handoff to OpenAI Conversational Dialogue Adapter",
      "Call Status, Dialing Logs & Response Transcript Recording in MySQL",
    ],
    engineeringDecisions: [
      "Defined a strict prototype boundary distinguishing local multi-port USB modem testing from high-volume production cloud telephony.",
      "Used Redis task queues to schedule outbound dial tasks asynchronously and handle failure retries without blocking the web process.",
      "Isolated the telephony transport behind an adapter interface to allow future migration from serial AT-commands to SIP trunking if needed.",
    ],
    systemFlow: [
      { step: "01", label: "CAMPAIGN INGEST", description: "Borrower contact list uploaded and enqueued into Redis priority queues." },
      { step: "02", label: "MODEM SELECTION", description: "SIM rotation logic allocates an available USB GSM channel and executes serial AT dial command." },
      { step: "03", label: "IVR GREETING", description: "When borrower answers, system plays introductory loan verification audio." },
      { step: "04", label: "AI HANDOFF", description: "Borrower responses triggering interest are bridged to OpenAI conversational dialogue adapter." },
      { step: "05", label: "DIAL LOG RECORDING", description: "Call duration, disposition, and conversation notes are recorded in MySQL." },
    ],
    technicalNotes: [
      { label: "Scope", detail: "Functional developer prototype testing serial AT-commands on USB GSM modems." },
      { label: "Concurrency", detail: "Redis campaign task queue coordinating channel throttling." },
    ],
    accentColor: "#E5A93C", // Restrained warm amber
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "LANGUAGES & RUNTIMES",
    short: "LANG",
    skills: [
      { name: "JavaScript (ESNext)", area: "Core Language", verifiedIn: "Dixit Lending, Movie Booking" },
      { name: "TypeScript", area: "Typed Development", verifiedIn: "Smart Curriculum, Dixit Lending, Portfolio" },
      { name: "Python", area: "Backend & ML", verifiedIn: "Livestock Breed Recognition" },
      { name: "Node.js", area: "Server Runtime", verifiedIn: "Dixit Lending Solution, Movie Booking" },
      { name: "SQL", area: "Database Querying", verifiedIn: "Dixit Lending Solution, MySQL" },
      { name: "HTML5 / CSS3", area: "Web Standards", verifiedIn: "All web projects" },
    ],
  },
  {
    title: "BACKEND & APIS",
    short: "SERVER",
    skills: [
      { name: "Express.js", area: "REST Services", verifiedIn: "Dixit Lending Solution, Movie Booking" },
      { name: "Flask", area: "Microservice APIs", verifiedIn: "Livestock Breed Recognition" },
      { name: "RESTful API Design", area: "Routing & Controllers", verifiedIn: "Dixit Lending, Movie Booking" },
      { name: "JWT & Bcrypt", area: "Authentication", verifiedIn: "Dixit Lending Solution" },
      { name: "Redis", area: "Task Queuing", verifiedIn: "CLN AI Calling Prototype" },
      { name: "Input Validation", area: "express-validator", verifiedIn: "Dixit Lending Solution" },
    ],
  },
  {
    title: "FRONTEND & INTERACTION",
    short: "CLIENT",
    skills: [
      { name: "React", area: "Component State", verifiedIn: "Smart Curriculum, Dixit Lending, Portfolio" },
      { name: "Next.js", area: "App Router & SSR", verifiedIn: "Dixit Lending Solution" },
      { name: "Three.js & R3F", area: "3D Spatial Scenes", verifiedIn: "Creative Portfolio" },
      { name: "Tailwind CSS", area: "Utility Architecture", verifiedIn: "Dixit Lending, Smart Curriculum" },
      { name: "Framer Motion", area: "UI Transitions", verifiedIn: "Dixit Lending Solution" },
    ],
  },
  {
    title: "DATABASES & STORAGE",
    short: "DATA",
    skills: [
      { name: "MySQL", area: "Relational Schemas", verifiedIn: "Dixit Lending Solution" },
      { name: "MongoDB / Mongoose", area: "Document Modeling", verifiedIn: "Movie Ticket Booking" },
      { name: "Cloud Firestore", area: "NoSQL Real-Time", verifiedIn: "Smart Curriculum Attendance" },
      { name: "AWS SDK (S3/R2)", area: "Object Storage", verifiedIn: "Dixit Lending Solution" },
    ],
  },
  {
    title: "DEV & TOOLING",
    short: "TOOLS",
    skills: [
      { name: "Git", area: "Version Control", verifiedIn: "All repositories" },
      { name: "Docker Compose", area: "Local Services", verifiedIn: "CLN AI Calling Prototype" },
      { name: "OpenCV", area: "Image Analysis", verifiedIn: "Livestock Breed Recognition" },
      { name: "Vite", area: "Build Tooling", verifiedIn: "Smart Curriculum, Portfolio" },
      { name: "Firebase Auth", area: "Identity Management", verifiedIn: "Smart Curriculum Attendance" },
    ],
  },
];
