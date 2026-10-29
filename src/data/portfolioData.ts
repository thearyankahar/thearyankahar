import { PersonalInfo, Project, SkillCategory, Certification } from '../types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "ARYAN KAHAR",
  role: "Full-Stack Web Developer",
  location: "Pune, Maharashtra, India",
  coordinates: "18.5204° N, 73.8567° E",
  timezone: "Asia/Kolkata (IST)",
  status: "OPEN FOR FULL-STACK ROLES & HIGH-IMPACT OPPORTUNITIES",
  bioHeadline: "PRECISION DATA SCHEMAS. TACTILE SPATIAL EXPERIENCES.",
  bioDescription:
    "Aryan Kahar is a Full-Stack Web Developer based in Pune, India. His experience spans backend REST APIs, relational MySQL and document MongoDB architectures, and responsive interactive web applications. He emphasizes disciplined data schemas, role-based workflows, and clean digital craft across commercial platforms, data intelligence tools, and machine learning services.",
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
  internship: {
    company: "AV IT Business Solution Pvt. Ltd.",
    type: "Offline Internship",
    duration: "4 Months",
    status: "Completed",
    description: "Completed a four-month offline internship at AV IT Business Solution Pvt. Ltd., gaining practical workplace experience and exposure to a professional working environment.",
  },
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: "hackerrank-sql-advanced",
    issuer: "HackerRank",
    title: "SQL (Advanced)",
    date: "March 2026",
    category: "Database Engineering",
    skills: ["Complex Joins", "Recursive Queries", "Window Functions", "Query Plan Optimization", "Relational Schema Integrity"],
    description: "Verified advanced database problem-solving certification covering complex multi-table joins, subqueries, indexing performance, and analytical window functions.",
  },
  {
    id: "deloitte-data-analytics",
    issuer: "Deloitte",
    title: "Data Analytics Job Simulation",
    date: "April 2026",
    category: "Data Analytics & Intelligence",
    skills: ["Data Analysis", "Forecasting", "Business Intelligence", "Dashboard Architecture", "Data Storytelling"],
    description: "Practical simulation focusing on enterprise dataset analysis, statistical modeling, data quality checks, and executive dashboard presentation.",
  },
  {
    id: "aws-cloud-computing-101",
    issuer: "Amazon Web Services (AWS)",
    title: "AWS Educate: Cloud Computing 101",
    date: "April 2026",
    category: "Cloud Infrastructure",
    skills: ["Cloud Architecture", "AWS S3", "EC2 Instances", "IAM Security", "Cloud Cost Optimization"],
    description: "Fundamental cloud architecture certification validating core competencies in AWS object storage (S3), compute virtualization, and network security policies.",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "dixit-lending",
    number: "01",
    title: "Dixit Lending Solution",
    subtitle: "Commercial Lending CRM & Web Platform",
    tagline: "End-to-end commercial lending system uniting an operational Customer Loan Network Management (CLN) CRM backend with a public customer loan inquiry portal, S3/R2 document vaulting, and automated WhatsApp notifications.",
    category: "Fintech",
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
    image: "/assets/dixit_crm_dashboard.png",
    bannerImage: "/assets/dixit_crm_dashboard.png",
    evidenceLabel: "CRM Operations Console & Loan Origination Pipeline",
    summary:
      "A complete commercial lending platform developed for Dixit Lending Solution, uniting an operational Customer Loan Network Management (CLN) CRM backend with a modern customer-facing web application. The platform coordinates loan origination, KYC document uploads, field attendance logs, and client-side financial calculations.",
    problemStatement:
      "Micro-finance and regional lending operations frequently struggle with disconnected Excel spreadsheets, manual customer verification delays, and fragmented communication between field officers and administrators.",
    intendedUsers:
      "Branch lending administrators, field verification officers, loan underwriting staff, and prospective retail borrowers.",
    myContribution:
      "Architected the full-stack system: built the role-based Admin and Employee portals in Express.js, structured the normalized MySQL schema, integrated S3/R2 object storage for customer KYC documents, implemented automated WhatsApp alerts via Baileys, and built the Next.js customer application with interactive loan EMI calculators.",
    completedFeatures: [
      "Role-Based Separation: Isolated Admin and Employee CRM portals with strict JWT middleware route guards.",
      "Encrypted KYC Object Storage: S3/R2-compatible document upload pipelines via @aws-sdk/client-s3 and multer-s3.",
      "Customer Loan Inquiry Application: Next.js responsive web application with real-time client-side EMI mathematical calculators.",
      "Automated Transactional Notifications: Direct Baileys WhatsApp integration to send approval receipts without third-party SMS per-message fees.",
      "Field Attendance Logging: Employee shift attendance tracking with geolocation and timestamp verification.",
      "Accounting Synchronization: Excel batch importer and exporter for portfolio reconciliation via XLSX.",
    ],
    prototypeOrPlannedFeatures: [
      "Outbound Automated Dialing: Prototype integration with the CLN AI Loan Calling system (currently maintained as an independent hardware research prototype).",
      "Automated Credit Bureau Score API Scraper: Currently handled through manual document verification.",
    ],
    architectureLayers: [
      {
        layer: "Client & Presentation",
        components: ["Next.js Customer Web Application", "React Admin & Employee CRM Dashboards", "Tailwind CSS"],
        detail: "Customer-facing loan inquiries with client-side EMI mathematical calculations alongside role-separated administrative dashboards.",
      },
      {
        layer: "API Gateway & Security",
        components: ["Express.js REST API", "JWT Auth Middleware", "Bcrypt Password Encryption", "Multer-S3"],
        detail: "Strict route guards validating employee tokens, preventing unauthorized traversal, and streaming files directly to object buckets.",
      },
      {
        layer: "Data & Document Persistence",
        components: ["MySQL 8.0 Relational Engine", "Cloudflare R2 / AWS S3 Object Vault"],
        detail: "Indexed relational tables enforcing foreign key integrity across borrowers, loan accounts, and field logs, with decoupled document storage.",
      },
      {
        layer: "Automation & Background Workers",
        components: ["Baileys Headless WhatsApp Service", "XLSX Batch Processor"],
        detail: "Automated webhook dispatches for real-time customer status notifications and accounting spreadsheet generation.",
      },
    ],
    engineeringDecisions: [
      "Decoupled heavy identity file storage from the application server by streaming uploads directly to S3/R2-compatible storage via @aws-sdk/client-s3 and multer-s3.",
      "Modeled relational MySQL schema with primary and foreign key constraints across users, customers, loan accounts, and field attendance logs to eliminate orphan records.",
      "Engineered automated WhatsApp webhook dispatches via Baileys to transmit loan application updates without expensive third-party SMS per-message fees.",
      "Separated the public-facing marketing/inquiry portal (Next.js) from the internal operations CRM to maintain clean security boundaries.",
    ],
    tradeoffs: [
      {
        challenge: "Handling large identity document uploads without exhausting server memory buffers.",
        decision: "Streamed multipart uploads directly to S3/R2 object storage via multer-s3 instead of buffering files to local disk.",
      },
      {
        challenge: "High recurring SMS gateway costs for loan status alerts.",
        decision: "Implemented a self-hosted Baileys WhatsApp worker to dispatch direct transactional messages to borrower mobile numbers.",
      },
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
    accentColor: "#35D6C0",
  },
  {
    id: "commodity-chain",
    number: "02",
    title: "CommodityChain",
    subtitle: "Global Intelligence & Macroeconomic Shocks",
    tagline: "Real-time commodity intelligence platform tracking eight global markets with live WebSocket price streaming, a 30-day Pearson correlation heatmap, and Groq Llama 3.3 70B AI analysis.",
    category: "Data Intelligence",
    year: "2024",
    status: "Web Application",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "FastAPI",
      "WebSockets",
      "Twelve Data",
      "D3.js",
      "Azure App Service",
      "GitHub Actions",
    ],
    image: "/assets/commodity_chain_dashboard.png",
    bannerImage: "/assets/commodity_chain_dashboard.png",
    evidenceLabel: "Commodity Intelligence Terminal & Correlation Matrix",
    summary:
      "A real-time commodity intelligence platform tracking eight global markets with live WebSocket price streaming, a 30-day Pearson correlation heatmap, and an AI analyst powered by Groq Llama 3.3 70B with live price context. Features an India macroeconomic layer modeling crude-oil shocks on petrol and diesel prices, CPI, INR/USD, and fiscal deficit across 20+ cities.",
    problemStatement:
      "Traders and economic analysts frequently lack accessible tools that tie international commodity price movements directly to localized macroeconomic indicators, retail fuel shocks, and currency exchange impacts.",
    intendedUsers:
      "Commodity analysts, financial researchers, macroeconomic forecasters, and supply chain planners.",
    myContribution:
      "Architected the full-stack intelligence system: engineered the Next.js 14 client with responsive D3.js Pearson correlation heatmaps, developed the FastAPI backend with live WebSocket streams from Twelve Data, constructed the Indian macroeconomic shock simulation mathematical engine, and integrated Groq Llama 3.3 70B for real-time contextual market analysis.",
    completedFeatures: [
      "Live WebSocket Price Streaming: Real-time price tracking across eight international commodities via Twelve Data API.",
      "Pearson Correlation Heatmap: Interactive D3.js 30-day cross-asset correlation matrix showing positive/negative price dependencies.",
      "India Macroeconomic Impact Layer: Mathematical model simulating crude oil shocks on petrol and diesel prices, CPI inflation, INR/USD rates, and fiscal deficit across 20+ cities.",
      "Groq Llama 3.3 70B AI Analyst: High-throughput LLM integration synthesizing live price context and market shifts into actionable summaries.",
      "CI/CD Deployment: Automated GitHub Actions deployment pipeline provisioning Azure App Service instances.",
    ],
    prototypeOrPlannedFeatures: [
      "Automated Algorithmic Execution: Order execution currently simulated; live broker integration planned.",
      "Historical Multi-Year Tick Storage: Time-series database expansion for 10-year tick depth.",
    ],
    architectureLayers: [
      {
        layer: "Presentation Layer",
        components: ["Next.js 14", "TypeScript", "D3.js Heatmaps", "Tailwind CSS"],
        detail: "Interactive macroeconomic charts, correlation heatmaps, and streaming market ticker ribbons.",
      },
      {
        layer: "Data Ingestion & WebSockets",
        components: ["FastAPI Backend", "Twelve Data API", "WebSockets Engine"],
        detail: "Low-latency streaming server ingesting multi-market ticks and broadcasting price deltas to connected clients.",
      },
      {
        layer: "Intelligence & Shock Modeling",
        components: ["Groq Llama 3.3 70B Adapter", "Macroeconomic Simulation Math Engine"],
        detail: "Context-injected prompt synthesis and mathematical calculation of crude shock ripples on domestic retail indexes.",
      },
      {
        layer: "Cloud & DevOps",
        components: ["Azure App Service", "GitHub Actions CI/CD"],
        detail: "Containerized deployment with automated linting, test suite execution, and rolling zero-downtime releases.",
      },
    ],
    engineeringDecisions: [
      "Separated real-time ticker streaming into a dedicated FastAPI WebSocket process to prevent UI rendering bottlenecks on the Next.js frontend.",
      "Rendered the 30-day Pearson correlation matrix with client-side D3.js canvas calculations to ensure sub-millisecond hover responsiveness.",
      "Utilized Groq Llama 3.3 70B via low-latency inference endpoints to generate market summaries within 400ms of price events.",
    ],
    tradeoffs: [
      {
        challenge: "Managing rate-limits on external market data APIs across multiple client sessions.",
        decision: "Implemented an in-memory caching layer on FastAPI that broadcasts single API subscriptions out to multiple WebSocket subscribers.",
      },
    ],
    systemFlow: [
      { step: "01", label: "TICK INGESTION", description: "FastAPI stream engine ingests tick data from Twelve Data via secure WebSocket." },
      { step: "02", label: "CORRELATION CALC", description: "30-day moving window calculates Pearson coefficients across all 8 market assets." },
      { step: "03", label: "MACRO SHOCK MODEL", description: "Crude volatility runs through the Indian econometric model estimating city fuel impacts." },
      { step: "04", label: "AI SYNTHESIS", description: "Price deltas and macro metrics are formatted into context prompts for Groq Llama 3.3." },
      { step: "05", label: "CLIENT DISPATCH", description: "Live state is rendered on Next.js 14 D3.js heatmaps and streamed to user dashboards." },
    ],
    technicalNotes: [
      { label: "Streaming", detail: "FastAPI WebSocket server aggregating multi-source market ticks." },
      { label: "Inference", detail: "Sub-second Groq Llama 3.3 70B integration with price context injection." },
    ],
    accentColor: "#35D6C0",
  },
  {
    id: "fitoglobe",
    number: "03",
    title: "FitoGlobe",
    subtitle: "Multilingual Health & Nutrition SaaS",
    tagline: "Multilingual health and fitness SaaS supporting four languages with AI macro calculation, computer vision food logging, and normalized PostgreSQL persistence.",
    category: "Health & SaaS",
    year: "2024",
    status: "Web Application",
    technologies: [
      "React 18",
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "Prisma ORM",
      "i18next",
      "Google OAuth",
      "JWT",
      "Vercel",
      "Render",
    ],
    image: "/assets/fitoglobe_saas_dashboard.png",
    bannerImage: "/assets/fitoglobe_saas_dashboard.png",
    evidenceLabel: "Health & Nutrition SaaS Dashboard & Vision Logging",
    summary:
      "A full-stack multilingual health and fitness SaaS supporting English, Spanish, Japanese, and Korean. Features workout logging, an AI macro calculator, food-photo vision analysis, Google OAuth, JWT authentication, streak heatmaps, country-aware unit detection, a 100-plus-exercise library, and a normalized PostgreSQL schema across 20+ REST endpoints.",
    problemStatement:
      "Global fitness applications often impose single-language interfaces and rigid imperial/metric formats, creating friction for international users who want accurate localized nutrition and workout tracking.",
    intendedUsers:
      "Fitness enthusiasts, personal trainers, and nutrition-conscious individuals across global regions.",
    myContribution:
      "Engineered the full-stack architecture: designed the normalized PostgreSQL schema with Prisma ORM, implemented 20+ RESTful API endpoints across Node.js and FastAPI, integrated i18next multilingual translation engines, built computer vision meal estimation routines, and configured cloud deployments on Vercel and Render.",
    completedFeatures: [
      "Multilingual Architecture: Complete localized interface support for English, Spanish, Japanese, and Korean via i18next.",
      "Computer Vision Meal Logging: Food-photo analysis extracting estimated caloric and macronutrient values.",
      "AI Macro Calculator: Tailored caloric, protein, and carbohydrate goals calculated from user biometric metrics.",
      "20+ RESTful Endpoints: Modular API routing handling workout logs, nutrition history, and streak heatmaps.",
      "Normalized PostgreSQL Schema: Prisma ORM models covering users, workouts, nutrition, progress, AI conversations, and exercise libraries.",
      "Authentication: Google OAuth 2.0 social sign-in combined with secure stateless JWT session tokens.",
    ],
    prototypeOrPlannedFeatures: [
      "Wearable Device Bluetooth Sync: Direct Apple Watch / Fitbit BLE synchronization in research phase.",
      "Real-Time Social Leaderboards: Regional leaderboard synchronization planned.",
    ],
    architectureLayers: [
      {
        layer: "Client & Localization",
        components: ["React 18", "i18next (EN/ES/JA/KO)", "Tailwind CSS", "Vercel"],
        detail: "Multilingual responsive frontend with country-aware unit conversion (kg/lbs, km/miles) and streak heatmaps.",
      },
      {
        layer: "API & Microservices",
        components: ["Node.js / Express Core", "FastAPI Vision Service", "Google OAuth 2.0", "JWT"],
        detail: "20+ RESTful endpoints separating standard CRUD operations from computer-vision food photo analysis.",
      },
      {
        layer: "Data Store & ORM",
        components: ["PostgreSQL", "Prisma ORM", "Render Managed DB"],
        detail: "Strict normalized relational tables enforcing referential integrity across user profiles, logs, and exercise libraries.",
      },
    ],
    engineeringDecisions: [
      "Adopted Prisma ORM with PostgreSQL to guarantee type-safe database queries and automated schema migrations.",
      "Isolated the food-photo computer vision analysis in an asynchronous FastAPI service to prevent heavy image processing from blocking main Node.js user endpoints.",
      "Structured localized strings hierarchically with i18next to allow zero-downtime additions of new global languages.",
    ],
    tradeoffs: [
      {
        challenge: "Managing multi-language database text for a 100+ exercise library.",
        decision: "Stored exercise names and instructions as localized JSONB fields inside PostgreSQL, queried cleanly via Prisma.",
      },
    ],
    systemFlow: [
      { step: "01", label: "AUTH & LOCALE", description: "User signs in via Google OAuth; client detects browser locale and initializes i18next." },
      { step: "02", label: "MEAL UPLOAD", description: "User captures food photo; client sends image buffer to FastAPI computer-vision service." },
      { step: "03", label: "MACRO ESTIMATION", description: "Vision model estimates meal volume and returns calorie/protein/carb breakdown." },
      { step: "04", label: "POSTGRESQL COMMIT", description: "Logged meal is committed to user nutrition table in PostgreSQL via Prisma ORM." },
      { step: "05", label: "STREAK SYNC", description: "Streak heatmap and daily adherence metrics update on the React dashboard." },
    ],
    technicalNotes: [
      { label: "Localization", detail: "i18next framework covering English, Spanish, Japanese, and Korean." },
      { label: "Database", detail: "Normalized PostgreSQL schema with Prisma ORM powering 20+ REST endpoints." },
    ],
    accentColor: "#35D6C0",
  },
  {
    id: "smart-curriculum",
    number: "04",
    title: "Smart Curriculum Attendance",
    subtitle: "Academic Operations & Lecture Matrix",
    tagline: "Academic administration web application for managing daily lecture timetables, faculty assignments, and real-time student attendance records.",
    category: "EdTech",
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
    image: "/assets/smart_curriculum_dashboard.png",
    bannerImage: "/assets/smart_curriculum_dashboard.png",
    evidenceLabel: "Curriculum Timetable Scheduler & Attendance Ledger",
    summary:
      "A web application engineered to streamline university lecture tracking and attendance logs. It provides faculty members with timetable scheduling tools while offering administrative panels for role oversight and attendance verification.",
    problemStatement:
      "Paper-based attendance marking and static paper timetables frequently result in scheduling conflicts, unrecorded lecture substitutions, and administrative reconciliation delays across university departments.",
    intendedUsers:
      "University professors, department heads, administrative registrars, and enrolled students.",
    myContribution:
      "Built the responsive frontend using React, TypeScript, and Vite; structured role-based navigation and authentication using Firebase Auth; and designed Firestore NoSQL collections for live timetable updates and historical attendance ledgers.",
    completedFeatures: [
      "Timetable Matrix: Interactive scheduling interface displaying daily lecture timings, subjects, and assigned classrooms.",
      "Real-Time Attendance Marking: Faculty roster sheet allowing single-click status updates written directly to Cloud Firestore.",
      "Role-Based Authorization: Strict separation between student viewers, faculty markers, and department administrators.",
      "Cloud Firestore Synchronization: Real-time listener hooks updating timetable substitutions instantaneously without full page reloads.",
      "Department Provisioning: Administrative panel for configuring academic terms, semesters, and course codes.",
    ],
    prototypeOrPlannedFeatures: [
      "Biometric Scanner Hardware Integration: Planned hardware sync for automated classroom door card swipes.",
      "Automated University ERP Export: Manual CSV export currently available.",
    ],
    architectureLayers: [
      {
        layer: "Client Layer",
        components: ["React 18", "TypeScript", "Vite", "Tailwind CSS"],
        detail: "Modular component architecture enforcing strict prop types and providing instantaneous local state updates.",
      },
      {
        layer: "Identity & Security",
        components: ["Firebase Authentication", "Custom Role Claims"],
        detail: "Client-side route guards validating role tokens to restrict attendance manipulation to authorized faculty.",
      },
      {
        layer: "Data Store",
        components: ["Cloud Firestore NoSQL Database"],
        detail: "Hierarchically organized document collections: departments/{deptId}/timetables and attendance/{termId}/records.",
      },
    ],
    engineeringDecisions: [
      "Adopted TypeScript with Vite to enforce strict component prop interfaces and enable sub-second HMR during development.",
      "Separated user roles at the Firebase Authentication layer to prevent students from accessing faculty attendance marking functions.",
      "Organized Firestore documents by academic terms, departments, and course codes for low-latency queries.",
    ],
    tradeoffs: [
      {
        challenge: "Preventing concurrent timetable edits when multiple department heads adjust schedules simultaneously.",
        decision: "Utilized Firestore document transactions to guarantee atomic updates for specific classroom time-slots.",
      },
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
    accentColor: "#35D6C0",
  },
  {
    id: "breed-rec",
    number: "05",
    title: "Livestock Breed Recognition & Trait Analysis",
    subtitle: "Computer Vision & Agricultural Trait Analysis",
    tagline: "Machine learning service combining neural classification with OpenCV contour measurements for livestock breed prediction and practical trait guidance.",
    category: "Applied ML & Vision",
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
    bannerImage: "/assets/breed-sample-murrah.jpg",
    evidenceLabel: "Murrah Buffalo Model Test Dataset Sample",
    summary:
      "An agricultural computer vision system that analyzes cattle and buffalo photos to identify breeds and provide practical farm-management recommendations, utilizing a confidence-aware pipeline with OpenCV morphological measurement fallback.",
    problemStatement:
      "Smallholder livestock farmers often lack immediate veterinary or breed-specialist access to verify animal genetics, leading to suboptimal feed plans, poor climate adaptation, and mismatched breeding goals.",
    intendedUsers:
      "Smallholder dairy farmers, rural livestock advisors, and agricultural cooperative field workers.",
    myContribution:
      "Implemented the Flask application backend, image processing routines using OpenCV (contour detection and aspect ratios), integrated the Hugging Face Inference API for breed prediction, and constructed the trait taxonomy mapping breeds to climate and breeding utility tags.",
    completedFeatures: [
      "Image Ingestion Filter: Validates uploaded photos, rejecting non-animal images or corrupt image encodings.",
      "Neural Breed Prediction: Dispatches validated images to Hugging Face Vision Inference endpoints for top-k breed scoring.",
      "OpenCV Morphological Fallback: Computes body contour area, horn orientation, and head-to-body aspect ratios when neural confidence is low.",
      "Agricultural Trait Taxonomy: Maps identified breeds (e.g., Murrah, Sahiwal, Gir) to specific milk yield potential, heat tolerance, and feeding guidance.",
      "Dual Interface: Interactive browser upload form alongside a programmatic JSON REST API endpoint for third-party integration.",
    ],
    prototypeOrPlannedFeatures: [
      "Direct Mobile Edge Model Deployment: Currently runs as a server-side Flask service.",
      "Automated Weight Estimation: Morphological contour estimations currently provide preliminary guidance rather than certified scale weights.",
    ],
    architectureLayers: [
      {
        layer: "Image Pre-processing",
        components: ["Flask Endpoint", "OpenCV Image Pipeline", "NumPy"],
        detail: "Resizing, color space normalization, and feature validation before neural dispatch.",
      },
      {
        layer: "Inference Engine",
        components: ["Hugging Face Inference API Router"],
        detail: "Evaluates image against trained breed classification checkpoints and returns confidence probabilities.",
      },
      {
        layer: "Morphological Fallback",
        components: ["OpenCV Contours", "Canny Edge Detection"],
        detail: "Calculates geometric silhouette proportions if the neural confidence is beneath threshold (<65%).",
      },
      {
        layer: "Agronomic Knowledge Base",
        components: ["Trait Mapping Dictionary"],
        detail: "Enriches breed outputs with practical husbandry guidance, heat resistance metrics, and feed recommendations.",
      },
    ],
    engineeringDecisions: [
      "Added an initial verification stage to detect and reject non-animal photos before sending them to the inference API.",
      "Engineered an OpenCV contour detection fallback that estimates animal morphology if the neural inference API returns low confidence.",
      "Enriched API responses with actionable husbandry guidance, such as heat tolerance, dairy yield expectations, and regional adaptability.",
    ],
    tradeoffs: [
      {
        challenge: "Handling varied farm lighting conditions and field background clutter.",
        decision: "Combined neural classification with geometric contour aspect ratio boundaries to cross-validate predictions.",
      },
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
    accentColor: "#35D6C0",
  },
  {
    id: "animal-welfare",
    number: "06",
    title: "Animal Welfare Detection",
    subtitle: "NGO Computer Vision & Automated Reporting",
    tagline: "Computer vision capstone platform engineered in partnership with an animal welfare NGO to monitor animal conditions and generate automated field inspection reports.",
    category: "Applied ML & Vision",
    year: "2023",
    status: "Machine Learning Service",
    technologies: [
      "Python",
      "OpenCV",
      "Computer Vision",
      "NumPy",
      "Flask",
      "Matplotlib",
    ],
    image: "/assets/animal_welfare_inspection.png",
    bannerImage: "/assets/animal_welfare_inspection.png",
    evidenceLabel: "Computer Vision Inspection Overlays & Reporting Engine",
    summary:
      "A computer-vision capstone project developed in direct collaboration with an animal welfare NGO. It monitors animal-welfare conditions and generates automated compliance reports. Deployed during Semester 2 and actively used by the NGO to streamline field inspection workflows.",
    problemStatement:
      "Animal welfare inspection teams operating in high-volume shelters face severe staffing constraints and paper-based reporting delays, resulting in delayed medical intervention for animals under acute physical distress.",
    intendedUsers:
      "NGO field shelter inspectors, rescue volunteers, and veterinary care coordinators.",
    myContribution:
      "Engineered the Python computer vision image pipeline, implemented detection overlays and contour-based body condition scoring in OpenCV, built the automated report generation module, and deployed the service for NGO shelter trial usage.",
    completedFeatures: [
      "Computer Vision Inspection Pipeline: Image processing routines calculating posture symmetry, coat condition, and distress markers.",
      "Automated Compliance Reporting: Generates structured inspection summaries detailing detected conditions for shelter documentation.",
      "Detection Overlay Visualizations: Renders bounding inspection frames and anomaly heatmaps over field imagery.",
      "Lightweight Local Processing: Designed to operate on standard field laptops without requiring expensive GPU server infrastructure.",
      "NGO Deployment: Deployed and tested during Semester 2 for automated report generation.",
    ],
    prototypeOrPlannedFeatures: [
      "Live Video Stream Processing: Real-time CCTV stream analysis currently planned for shelter monitoring.",
    ],
    architectureLayers: [
      {
        layer: "Image Capture & Normalization",
        components: ["OpenCV Preprocessing", "Color Channel Alignment", "NumPy"],
        detail: "Normalizes lighting gradients and filters background artifacts from field shelter photography.",
      },
      {
        layer: "Detection & Anomaly Extraction",
        components: ["Contour Analysis", "Morphological Gradients", "OpenCV"],
        detail: "Extracts physical body condition markers and posture asymmetry indicators.",
      },
      {
        layer: "Reporting Engine",
        components: ["Python Report Generator", "Matplotlib Overlay Visualizer"],
        detail: "Synthesizes detected metrics into structured compliance records for NGO records.",
      },
    ],
    engineeringDecisions: [
      "Designed the pipeline using OpenCV CPU algorithms to ensure field inspectors could run the platform on entry-level hardware without GPU dependencies.",
      "Implemented automated timestamping and inspection ID tagging on generated report images to establish a verified audit trail.",
    ],
    tradeoffs: [
      {
        challenge: "Varied camera quality and resolution from field volunteers' phones.",
        decision: "Implemented an adaptive thresholding step in OpenCV that standardizes image contrast before running condition extraction.",
      },
    ],
    systemFlow: [
      { step: "01", label: "PHOTO UPLOAD", description: "Field inspector uploads shelter animal photo via inspection portal." },
      { step: "02", label: "ADAPTIVE PREPROCESSING", description: "Image undergoes contrast equalization and background noise suppression." },
      { step: "03", label: "CONDITION SCORING", description: "OpenCV algorithms extract contour symmetry and posture distress markers." },
      { step: "04", label: "REPORT GENERATION", description: "Structured report document is generated with annotated inspection overlays." },
    ],
    technicalNotes: [
      { label: "Deployment", detail: "Semester 2 capstone deployment used directly by NGO partner." },
      { label: "Stack", detail: "Python, OpenCV, NumPy, and lightweight Flask processing service." },
    ],
    accentColor: "#35D6C0",
  },
  {
    id: "movie-booking",
    number: "07",
    title: "Online Movie Ticket Booking",
    subtitle: "Cinema Discovery & Reservation Engine",
    tagline: "Full-stack reservation application managing theaters, screening showtimes, seat allocation, and customer ticket bookings.",
    category: "Reservation",
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
    image: "/assets/movie_booking_terminal.png",
    bannerImage: "/assets/movie_booking_terminal.png",
    evidenceLabel: "Cinema Seat Selection & Reservation Engine",
    summary:
      "A database-backed cinema booking platform providing theater administration, movie catalog scheduling, and an interactive customer seat reservation workflow across multiple cities.",
    problemStatement:
      "Cinema operators require clear data structures to prevent double-booking of auditorium seats while allowing administrators to schedule screening showtimes across multiple locations.",
    intendedUsers:
      "Movie theater administrators, box-office ticketing staff, and cinema customers.",
    myContribution:
      "Developed the Express.js REST API with modular controllers, designed Mongoose schemas for movies, theaters, showtimes, and booking tickets, and constructed the interactive seat selection view.",
    completedFeatures: [
      "City & Multi-Theater Management: Organization of theater screens across multiple metropolitan zones.",
      "Movie Catalog Scheduling: Administration tools for scheduling showtimes, runtimes, and auditorium assignments.",
      "Interactive 2D Seating Matrix: Client-side seat allocation grid indicating available, selected, and reserved states.",
      "Atomic Seat Reservation Check: Pre-commit vacancy check preventing duplicate booking commits for the same seat coordinates.",
      "Booking History Ledger: User profile view displaying reserved tickets, screening details, and transaction receipts.",
    ],
    prototypeOrPlannedFeatures: [
      "Live Payment Gateway Webhook: Mock transaction checkout implemented for reservation confirmation.",
      "Dynamic Ticket Pricing Engine: Flat tier pricing currently in effect.",
    ],
    architectureLayers: [
      {
        layer: "Client Interface",
        components: ["Interactive Seating Grid", "AngularJS Controllers", "Bootstrap 5"],
        detail: "Real-time seat selection map updating reservation state and computing order total.",
      },
      {
        layer: "API Controllers",
        components: ["Express.js REST Routing", "Modular CRUD Handlers"],
        detail: "Divided into dedicated controllers: movie-crud, theatre-crud, showtime-crud, and booking-crud.",
      },
      {
        layer: "Database",
        components: ["MongoDB Engine", "Mongoose Document Models"],
        detail: "Structured schemas linking theaters, screening slots, and multidimensional seat availability arrays.",
      },
    ],
    engineeringDecisions: [
      "Divided Express application routes into dedicated modules (movie-crud, theatre-crud, showtime-crud, bookings-crud) for maintainable controller separation.",
      "Modeled auditorium seating layouts as dimensional arrays stored within Mongoose showtime documents.",
      "Validated seat vacancy prior to booking commit to prevent duplicate reservations.",
    ],
    tradeoffs: [
      {
        challenge: "Preventing race conditions where two customers select the same seat simultaneously.",
        decision: "Enforced an atomic find-and-update check on the seat array before confirming the booking document.",
      },
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
    accentColor: "#35D6C0",
  },
  {
    id: "ai-loan-calling",
    number: "08",
    title: "CLN AI Loan Calling System",
    subtitle: "Outbound Dialing Telephony Engine",
    tagline: "Architecture specification and working developer prototype for automated outbound loan campaigns via USB GSM modem hardware pools.",
    category: "Prototype",
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
    image: "/assets/cln_ai_calling_console.png",
    bannerImage: "/assets/cln_ai_calling_console.png",
    evidenceLabel: "USB GSM Modem Telemetry & Campaign Queue Console",
    summary:
      "An architectural design specification and functional developer prototype engineered to explore automated outbound loan verification and recovery campaigns using USB GSM modems with SIM rotation and conversational AI handoff.",
    problemStatement:
      "Fintech companies handling large loan portfolios face substantial costs using proprietary cloud telephony per-minute APIs. This prototype explores whether local USB GSM modem hardware pools can reliably automate initial borrower contact campaigns.",
    intendedUsers:
      "Fintech collections engineers, loan verification operations, and telecommunication systems researchers.",
    myContribution:
      "Authored the complete system architecture, created the Docker Compose setup for MySQL and Redis, implemented Gammu SMSD modem control scripts using serial AT-commands, designed the SIM card rotation logic, and built the developer test dashboard in React.",
    completedFeatures: [
      "Serial AT-Command Driver: Node.js scripts executing dial (ATD) and hangup (ATH) commands to local USB GSM modems.",
      "SIM Rotation Logic: Load balancer distributing outbound call tasks across multiple SIM ports to prevent carrier throttling.",
      "Redis Priority Task Queue: Background task scheduling for campaign batches with configurable retry intervals.",
      "Docker Compose Infrastructure: Automated container orchestration running isolated MySQL and Redis services.",
      "Developer Testing Dashboard: React-based monitoring interface displaying active modem status, call queue depth, and live logs.",
    ],
    prototypeOrPlannedFeatures: [
      "Full Duplex Audio Bridge: Tested local audio greeting trigger on answer; bidirectional streaming conversation currently an experimental prototype.",
      "Production Cloud SIP Carrier Trunking: Designed as a future migration adapter for high-volume enterprise deployment.",
    ],
    architectureLayers: [
      {
        layer: "Job Orchestration",
        components: ["Redis Priority Queue", "BullMQ Task Worker"],
        detail: "Enqueues outbound loan verification contact lists and manages channel throttling.",
      },
      {
        layer: "Hardware Interface",
        components: ["Gammu SMSD", "Serial AT Controller", "Multi-Port USB GSM Modem Pool"],
        detail: "Executes hardware-level telephony commands across physical SIM cards with round-robin allocation.",
      },
      {
        layer: "Voice & Conversational Adapter",
        components: ["OpenAI Audio API Bridge", "IVR Audio Trigger"],
        detail: "Detects call answer and triggers automated verification dialogue.",
      },
      {
        layer: "Persistence & Logs",
        components: ["MySQL 8.0 Database", "Docker Compose Container"],
        detail: "Records call duration, modem port ID, disposition status, and borrower response notes.",
      },
    ],
    engineeringDecisions: [
      "Defined a strict prototype boundary distinguishing local multi-port USB modem testing from high-volume production cloud telephony.",
      "Used Redis task queues to schedule outbound dial tasks asynchronously and handle failure retries without blocking the web process.",
      "Isolated the telephony transport behind an adapter interface to allow future migration from serial AT-commands to SIP trunking if needed.",
    ],
    tradeoffs: [
      {
        challenge: "Handling serial port timeouts when a physical SIM card loses cellular registration.",
        decision: "Implemented an exponential backoff retry loop in the Redis worker that automatically reroutes the call to an alternate active SIM channel.",
      },
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
    accentColor: "#35D6C0",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "LANGUAGES & RUNTIMES",
    short: "LANG",
    skills: [
      { name: "JavaScript (ESNext)", area: "Core Language", verifiedIn: "Dixit Lending, FitoGlobe, Movie Booking" },
      { name: "TypeScript", area: "Typed Development", verifiedIn: "CommodityChain, Smart Curriculum, Dixit Lending" },
      { name: "Python", area: "Backend, ML & CV", verifiedIn: "CommodityChain, Animal Welfare, Breed Recognition" },
      { name: "Node.js", area: "Server Runtime", verifiedIn: "Dixit Lending Solution, FitoGlobe, Movie Booking" },
      { name: "SQL", area: "Database Querying", verifiedIn: "HackerRank SQL (Advanced), Dixit Lending, FitoGlobe" },
      { name: "HTML5 / CSS3", area: "Web Standards", verifiedIn: "All web projects" },
    ],
  },
  {
    title: "BACKEND & ARCHITECTURES",
    short: "BACK",
    skills: [
      { name: "FastAPI", area: "High-Perf Python API", verifiedIn: "CommodityChain, FitoGlobe" },
      { name: "Express.js", area: "REST Framework", verifiedIn: "Dixit Lending, Movie Booking, CLN AI Calling" },
      { name: "Next.js (App Router)", area: "Full-Stack Framework", verifiedIn: "CommodityChain, Dixit Lending Portal" },
      { name: "PostgreSQL & Prisma", area: "Relational ORM", verifiedIn: "FitoGlobe (20+ Endpoints)" },
      { name: "MySQL 8.0", area: "Relational Database", verifiedIn: "Dixit Lending Solution, CLN AI Calling" },
      { name: "MongoDB & Mongoose", area: "Document Database", verifiedIn: "Online Movie Ticket Booking" },
      { name: "Cloud Firestore", area: "NoSQL Realtime", verifiedIn: "Smart Curriculum Attendance" },
      { name: "Redis", area: "Task Queuing & Caching", verifiedIn: "CLN AI Loan Calling Prototype" },
      { name: "WebSockets", area: "Realtime Streaming", verifiedIn: "CommodityChain (Live Market Ticks)" },
    ],
  },
  {
    title: "FRONTEND & VISUALIZATION",
    short: "FRONT",
    skills: [
      { name: "React 18 / 19", area: "UI Library", verifiedIn: "FitoGlobe, Smart Curriculum, Portfolio" },
      { name: "D3.js", area: "Data Visualizations", verifiedIn: "CommodityChain (Correlation Heatmaps)" },
      { name: "Tailwind CSS", area: "Styling System", verifiedIn: "CommodityChain, Dixit Lending, Portfolio" },
      { name: "Three.js / R3F", area: "3D Interaction", verifiedIn: "Developer Portfolio" },
      { name: "GSAP", area: "Animation", verifiedIn: "Creative Developer Interfaces" },
      { name: "Vite", area: "Build Tooling", verifiedIn: "Portfolio, Smart Curriculum, CLN Calling" },
    ],
  },
  {
    title: "CLOUD, STORAGE & HARDWARE",
    short: "OPS",
    skills: [
      { name: "AWS SDK (S3 / R2)", area: "Cloud Object Storage", verifiedIn: "AWS Educate Certified, Dixit Lending" },
      { name: "Azure App Service", area: "Cloud Deployment", verifiedIn: "CommodityChain (GitHub Actions CI/CD)" },
      { name: "Docker Compose", area: "Containerization", verifiedIn: "CLN AI Loan Calling Prototype" },
      { name: "OpenCV", area: "Computer Vision", verifiedIn: "Animal Welfare Detection, Breed Recognition" },
      { name: "Groq Llama 3.3 70B", area: "Contextual LLM Inference", verifiedIn: "CommodityChain (AI Market Analyst)" },
      { name: "Baileys (WhatsApp)", area: "Messaging Automation", verifiedIn: "Dixit Lending Solution" },
    ],
  },
];
