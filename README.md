# ARYAN KAHAR — Full-Stack Developer Portfolio

> Personal developer portfolio and project case studies for Aryan Shyamlal Kahar, Full-Stack Web Developer based in Pune, India. Built with React 19, TypeScript, Vite, React Three Fiber, Three.js, and Tailwind CSS.

[![React](https://img.shields.io/badge/React-19.3-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Three.js](https://img.shields.io/badge/Three.js-0.186-000000?logo=threedotjs&logoColor=white)](https://threejs.org)
[![React Three Fiber](https://img.shields.io/badge/R3F-9.8-black)](https://docs.pmnd.rs/react-three-fiber)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.3-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)

---

## 1. Design System & Interaction Model

### A. Strict Monochromatic & Restrained Palette
* **Near-black:** `#0A0A0A` (Deep background canvas)
* **Charcoal:** `#151515` (Primary panels, modules, and surfaces)
* **Secondary Charcoal:** `#202020` (Pills, badges, and contrast elements)
* **Warm White:** `#F2F0EB` (Headings and high-contrast typography)
* **Muted Gray:** `#929292` (Subtext, captions, and secondary metadata)
* **Hairline Borders:** `#303030` (Structural grid dividers and module framing)
* **Restrained Teal:** `#35D6C0` (Single accent reserved strictly for active navigation states, link indicators, and subtle hover cues)

### B. Project Archive & Dual-View Presentation
* **Typographic List View (Default):** Clean, spacious rows featuring project index (`01`–`05`), title, concise summary, category, and direct case study drawer trigger.
* **Image View (Toggleable):** Editorial 2-column cards displaying high-contrast grayscale interface screenshots.
* **Category Filter Pills:** Filter by `All Projects`, `Fintech & SaaS`, `Systems & Operations`, `Applied ML & Vision`, and `Prototypes`.

### C. 3D Architectural Scene (WebGL)
* Features a minimalist exhibition environment with monolithic walls, structural ceiling portals, recessed linear downlights, dark matte floor, and a perspective floor datum line.
* **Camera Movement:** Transitions along the corridor synchronized with section navigation (`intro`, `work`, `about`, `skills`, `certifications`, `contact`) with subtle pointer parallax.

---

## 2. Project Repository

| # | Project | Stack | Category | Implementation Highlights |
| :---: | :--- | :--- | :--- | :--- |
| **01** | **Dixit Lending Solution** | Node.js, Express, Next.js, MySQL, AWS SDK (S3/R2), Baileys WhatsApp, XLSX | Fintech / Operations | Operational CRM backend (CLN) with role-based Admin & Employee portals, loan origination, S3/R2 document vaulting, field attendance logs, Baileys WhatsApp transactional receipts, and customer origination portal with dynamic client-side EMI calculator. |
| **02** | **CommodityChain** | Next.js 14, TypeScript, FastAPI, WebSockets, Twelve Data, D3.js | Data Intelligence | Real-time commodity intelligence platform tracking eight global markets with live WebSocket price streaming, 30-day Pearson correlation heatmap, India fuel shock simulation, and Groq Llama 3.3 70B analysis. |
| **03** | **FitoGlobe** | React, TypeScript, FastAPI, PostgreSQL, Prisma, Tailwind CSS | Health & Nutrition SaaS | Full-stack multilingual SaaS supporting 4 languages with workout logs, AI macro calculator, food vision analysis, Google OAuth, and normalized PostgreSQL schema. |
| **04** | **Smart Curriculum Attendance** | React, TypeScript, Vite, Firebase Auth, Cloud Firestore | EdTech / Operations Platform | Lecture timetable scheduler, student and faculty role dashboards, attendance marking, and real-time Firestore ledger. |
| **05** | **Livestock Breed Recognition** | Python, Flask, Hugging Face API, OpenCV, NumPy | Applied ML / Computer Vision | Cattle/buffalo breed prediction from uploads, OpenCV contour-based morphological measurement fallback, and agricultural climate/breeding trait tagging. |
| **06** | **Animal Welfare Inspection** | Python, Flask, OpenCV, NumPy, Matplotlib | Computer Vision / NGO Tooling | Field inspection image processing with automated morphological scoring and automated PDF report compilation. |
| **07** | **Online Movie Ticket Booking** | Node.js, Express, MongoDB, Mongoose, AngularJS, Bootstrap | Web Application | Modular RESTful CRUD controllers (`movie-crud`, `theatre-crud`, `showtime-crud`, `bookings-crud`), cinema seat selection, and customer reservation logs. |
| **08** | **CLN AI Loan Calling System** | Node.js, Express, React, Vite, MySQL 8.0, Redis, Gammu SMSD | Telephony Prototype | Architectural design & developer prototype: USB GSM modem control via Gammu serial AT-commands, SIM rotation algorithms, Redis campaign queues, and audio handoff to OpenAI API. |

---

## 3. Industry Certifications

1. **HackerRank — SQL (Advanced):** Relational database optimization, query performance tuning, index structuring, ACID transactions, and normalization.
2. **Deloitte — Data Analytics Job Simulation:** Enterprise dataset analysis, statistical modeling, data quality checks, and executive dashboard presentation.
3. **AWS Academy — Cloud Computing 101:** IAM security boundaries, EC2 compute virtualization, S3 object storage policies, VPC networking, and cloud high-availability design.

---

## 4. Local Development & Build

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Code quality check
npx oxlint

# Production build verification
npm run build
```
