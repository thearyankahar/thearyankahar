# ARYAN KAHAR — Experimental Full-Stack Developer Portfolio

> An experimental monochrome editorial Artboard paired with an interactive 3D WebGL spatial environment, presenting verified engineering case studies, distributed system architectures, and authenticated academic credentials for **Aryan Shyamlal Kahar**.

[![React](https://img.shields.io/badge/React-19.3-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Three.js](https://img.shields.io/badge/Three.js-0.186-000000?logo=threedotjs&logoColor=white)](https://threejs.org)
[![React Three Fiber](https://img.shields.io/badge/R3F-9.8-black)](https://docs.pmnd.rs/react-three-fiber)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.3-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)

---

## 1. Project Philosophy & Visual Architecture

This portfolio combines two design paradigms:

### Reference A: The Editorial Artboard
* **Atmosphere:** Dark charcoal surroundings (`#202020`) framing a large, carefully composed editorial canvas (`#101010`).
* **Visual Language:** Asymmetric image panels, monochrome/grayscale photography, fine white and gray dividing lines (`#2C2C2C`), cropped oversized typography, and compact uppercase metadata.
* **Archive Architecture:** Structured curatorial environment where system designs and case studies can be explored via drag, hover, or click.

### Reference B: The 3D Spatial Environment
* **Spatial Design:** A dark WebGL world (`#08080B`) featuring depth, atmospheric fog, directional lighting, and subtle reflections on a glossy architectural floor.
* **Stepped Architectural Progression:** Five ascending monolithic pedestals connected by floating stairs with glowing cyan, teal, yellow, and violet neon edges.
* **Interactive Geometry:** Floating orbital emblems, 3D typography, hover states, camera lerp transitions to each stage, and direct modal inspection.

---

## 2. Verified Developer Profile

* **Name:** Aryan Shyamlal Kahar
* **Professional Focus:** Full-Stack Web Development, Distributed Microservices, Backend API Hardening, Database Architecture, and Creative Frontend Engineering.
* **Location:** Pune, Maharashtra, India (`18.5204° N, 73.8567° E`)
* **Timezone:** Asia/Kolkata (IST)
* **Status:** Available for Full-Stack Roles, Internships, & High-Impact Contracts.
* **Direct Contact:**
  * **Email:** `thearyankahar@gmail.com`
  * **Phone:** `+91 8767470841`
  * **GitHub:** [github.com/thearyankahar](https://github.com/thearyankahar)
  * **LinkedIn:** [linkedin.com/in/thearyankahar](https://linkedin.com/in/thearyankahar)

### Academic Verification & Examination Status
* **Degree:** Bachelor of Computer Applications (BCA)
* **Institution:** JSPM University Pune (School of Computational Sciences)
* **Period:** 2023 – 2026
* **Status:** **Graduated — Result: PASS** (Declared: 27 May 2026, Issued: 18 June 2026)
* **Academic Highlights:**
  * Completed all 128 required academic credits.
  * **Grade A** in Final Capstone Software Project (Scheme B).
  * Semester VI SGPA: **7.23** (Highest semester score).
  * Cumulative CGPA: **6.47**.
  * **Convocation:** Registered (Payment confirmed via PhonePe UTR `719787774510`, ₹2,000 to JSPM University on 28 Oct 2026).
  * High-resolution scans of both the Official Grade Sheet and Convocation Receipt are inspectable directly in the application.

---

## 3. Engineering Case Studies

### 01. CLNM — Dixit Lending Solution
* **Category:** Fintech / Core Distributed Systems (Production Live)
* **Stack:** Node.js, Express.js, MySQL (Aiven Cloud), Cloudflare R2, JWT, Netlify, Render
* **Architectural Highlights:**
  * Deployed across 4 independent cloud services (Netlify CDN, Render Express API, Aiven Managed MySQL, Cloudflare R2).
  * Authenticated streaming proxy to isolate and stream encrypted customer KYC documents from Cloudflare R2 without public bucket exposure.
  * Security penetration audit remediating 11 vulnerabilities (brute-force rate limits, token hijacking, path traversal) and eliminating 21 stored-XSS injection vectors.
  * Self-healing migration system with cascading foreign keys for zero-downtime relational updates.
  * Live field officer GPS attendance tracking and automated WhatsApp notification webhooks.

### 02. DocAppointment Telehealth Platform
* **Category:** Healthcare / Distributed Microservices (Active Microservice)
* **Stack:** FastAPI, Django REST Framework, PostgreSQL, Redis, Docker, AWS ECS, Twilio, WebRTC
* **Architectural Highlights:**
  * Dual-engine backend: Asynchronous FastAPI microservice for calendar availability and high-frequency booking state machines; Django core for clinical records and audit trails.
  * Atomic Redis TTL mutex locking preventing concurrent slot double-booking collisions during checkout.
  * Peer-to-peer encrypted WebRTC video rooms for HIPAA-minded clinical consultations.
  * Containerized Docker deployment running on AWS ECS with automated GitHub Actions CI/CD.

### 03. MediSync Global Health SaaS
* **Category:** HealthTech / Applied AI (Live Platform)
* **Stack:** React 18, Node.js, FastAPI, PostgreSQL, Prisma ORM, i18next, Google OAuth 2.0, Tailwind CSS
* **Architectural Highlights:**
  * Deep internationalization supporting 4 languages (English, Spanish, Japanese, Korean) with locale-aware unit conversions (kg/lbs, kcal/kJ).
  * Computer-vision photo diagnostics estimating food macronutrient proportions from smartphone uploads.
  * Type-safe Prisma ORM schema on normalized PostgreSQL across 20+ documented REST endpoints.
  * Gamified GitHub-style activity streak heatmap and achievement unlock engine.

### 04. CLN AI Loan Calling Telephony Engine
* **Category:** Fintech Telephony / Architecture Specification & Working Prototype
* **Status Notice:** Clearly distinguished as an architectural specification and functional developer prototype (hardware GSM modem control via serial AT-commands) rather than live production telephony scale.
* **Stack:** Node.js, Express.js, React 18, Vite, MySQL 8.0, Redis, Gammu SMSD, OpenAI Speech Adapter, Docker Compose
* **Architectural Highlights:**
  * Controls multi-channel USB GSM modem hardware pools via Gammu SMSD and serial AT-commands.
  * Dynamic SIM card rotation to distribute carrier outbound traffic and mitigate carrier spam throttling.
  * Redis distributed campaign queue with automatic retry cascades and answer-detection handlers.
  * Audio handoff architecture: plays initial IVR loan briefing and hands off interested borrowers to an OpenAI conversational voice dialogue adapter.

---

## 4. Technology Stack & Key Decisions

| Domain | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | React 19.3 + TypeScript 7.0 | Modern concurrent primitives and strict compile-time safety. |
| **Build Tool** | Vite 8.3 | Sub-400ms HMR and optimized asset bundling. |
| **3D Engine** | Three.js + React Three Fiber 9.8 + Drei 10.7 | Declarative 3D spatial scene composition and lighting. |
| **Styling** | Tailwind CSS v4 | Zero-runtime CSS variable design tokens matching editorial art direction. |
| **Audio** | Procedural Web Audio API | Tactile synthesized UI clicks without external audio asset network overhead. |
| **Code Splitting** | `React.lazy` + `Suspense` | Initial bundle is only **94 kB** gzip; Three.js is deferred until 3D toggle. |

---

## 5. Project Directory Structure

```
thearyankahar/
├── public/
│   ├── assets/               # Verified credentials, grade sheet, and project media
│   └── favicon.svg           # Geometric brand favicon
├── src/
│   ├── components/
│   │   ├── artboard/         # Reference A editorial artboard canvas
│   │   │   └── ArtboardCanvas.tsx
│   │   ├── navigation/       # Editorial HUD navbar with live clock and mode toggle
│   │   │   └── Navbar.tsx
│   │   ├── projects/         # Detailed case study modal
│   │   │   └── ProjectModal.tsx
│   │   ├── sections/         # Accessible archive, skills, about, education, contact
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── EducationModal.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   └── WorkArchiveSection.tsx
│   │   ├── three/            # Reference B 3D spatial environment
│   │   │   ├── CameraController.tsx
│   │   │   ├── Pedestal.tsx
│   │   │   ├── PlatformStairs.tsx
│   │   │   ├── SpatialEnvironment.tsx
│   │   │   └── SpatialScene.tsx
│   │   └── ui/               # Icons and interface components
│   │       └── Icons.tsx
│   ├── data/                 # Centralized, strictly-typed verified portfolio data
│   │   └── portfolioData.ts
│   ├── types/                # TypeScript interface definitions
│   │   └── index.ts
│   ├── utils/                # Synthesized Web Audio feedback
│   │   └── audio.ts
│   ├── App.tsx               # Root application coordinator
│   ├── index.css             # Tailwind v4, design tokens, and scanlines
│   └── main.tsx              # DOM root mount
├── index.html                # Typography preconnect and metadata
├── vite.config.ts            # Vite configuration with Tailwind plugin
├── tsconfig.json             # Root TypeScript project references
└── tsconfig.app.json         # Application compiler settings with path aliases
```

---

## 6. Local Setup & Run Instructions

### Prerequisites
* **Node.js:** v18.0.0 or higher (v24 LTS recommended)
* **npm:** v9.0.0 or higher

### 1. Clone & Enter Directory
```bash
cd thearyankahar
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production
```bash
npm run build
```
The compiled output will be generated inside the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## 7. Deployment Instructions

### Deploying to Vercel
1. Install the Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root.
3. Accept default build settings (`npm run build`, output: `dist`).

### Deploying to Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Optional `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Deploying to Cloudflare Pages / Render Static
* **Framework Preset:** Vite
* **Build Command:** `npm run build`
* **Build Output Directory:** `dist`
