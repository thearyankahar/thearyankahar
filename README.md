# ARYAN KAHAR — Unified Editorial & 3D Spatial Developer Portfolio

> An experimental monochrome editorial Artboard seamlessly unified with an interactive 3D WebGL spatial environment, presenting verified engineering case studies, real software architectures, and clean technical foundations for **Aryan Shyamlal Kahar**.

[![React](https://img.shields.io/badge/React-19.3-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Three.js](https://img.shields.io/badge/Three.js-0.186-000000?logo=threedotjs&logoColor=white)](https://threejs.org)
[![React Three Fiber](https://img.shields.io/badge/R3F-9.8-black)](https://docs.pmnd.rs/react-three-fiber)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.3-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)

---

## 1. Unified Architecture & Creative Direction

The portfolio unifies two visual references into **one continuous interaction system**:

### A. Integrated Artboard & Spatial Viewport
* **Palette:** Deep near-black (`#0F0F11`), charcoal canvas (`#141417`), warm white (`#EDEAE2`), and muted gray (`#8E8E93`), accented by a single restrained teal (`#2DD4BF`) and occasional warm amber (`#E5A93C`).
* **Visual Language:** Asymmetric editorial panel composition, fine dividing borders (`#27272A`), cropped oversized typography (`Syne`), and monospace metadata (`JetBrains Mono`).
* **Persistent 3D Viewport:** Rather than acting as a separate demo page, the WebGL 3D spatial scene is embedded directly inside the Artboard entrance as an interactive live viewport, and can be expanded into full-screen exploration seamlessly without reloading the WebGL context.
* **Accessible Foundation:** The conventional project archive, about statement, technical capabilities matrix, and direct communication channels are always accessible directly via standard HTML.

### B. Custom 3D Architectural Monuments (Replacing Generic Boxes)
Each verified software project features a distinct, custom architectural monument:
1. **Dixit Lending Solution:** A monolithic brutalist financial vault with cantilevered graphite slabs, recessed illuminated teal channels, and dual interlocking counter-rotating calibration rings.
2. **Smart Curriculum Attendance:** An open architectural academic lattice with structural pillars, horizontal timetable trays, and a floating rotating 3D wireframe scheduling matrix.
3. **Livestock Breed Recognition:** A stepped cylindrical contour scanner pedestal reflecting OpenCV contour analysis, topped with an optical vision scanner prism.
4. **Online Movie Ticket Booking:** A tiered cinema amphitheater with a vertical rear projection pylon, horizontal cinema slit, and rotating anamorphic aperture ring.
5. **CLN AI Loan Calling System (Prototype):** A brutalist telecom transmission tower with acoustic baffling fins, radial GSM antenna blades, and a pulsating radio wave transmitter ring.

---

## 2. Verified Project Repository

*Note: `CLN Lending Suite` and `Dixit Lending Solution` are consolidated as one real project: **Dixit Lending Solution**.*

| # | Project | Stack | Category & Status | Verified Implementation Highlights |
| :---: | :--- | :--- | :--- | :--- |
| **01** | **Dixit Lending Solution** | Node.js, Express, Next.js, MySQL, AWS SDK (S3/R2), Baileys WhatsApp, XLSX | Fintech / Operations CRM & Web Platform (Commercial Platform) | Operational CRM backend (CLN) with role-based Admin & Employee portals, loan origination, S3/R2 document vaulting, field attendance logs, Baileys WhatsApp transactional receipts, and Next.js customer origination portal with dynamic client-side EMI calculator. |
| **02** | **Smart Curriculum Attendance** | React, TypeScript, Vite, Firebase Auth, Cloud Firestore | EdTech / Operations Platform (Web Application) | Lecture timetable scheduler, student and faculty role dashboards, attendance marking, and real-time Firestore ledger. |
| **03** | **Livestock Breed Recognition** | Python, Flask, Hugging Face API, OpenCV, NumPy | Applied ML / Computer Vision (Machine Learning Service) | Cattle/buffalo breed prediction from uploads, OpenCV contour-based morphological measurement fallback, and agricultural climate/breeding trait tagging. |
| **04** | **Online Movie Ticket Booking** | Node.js, Express, MongoDB, Mongoose, AngularJS, Bootstrap | Web Application / Reservation Engine (Web Application) | Modular RESTful CRUD controllers (`movie-crud`, `theatre-crud`, `showtime-crud`, `bookings-crud`), cinema seat selection, and customer reservation logs. |
| **05** | **CLN AI Loan Calling System** | Node.js, Express, React, Vite, MySQL 8.0, Redis, Gammu SMSD | Outbound Telephony (Concept & Working Prototype) | Architectural design & developer prototype: USB GSM modem control via Gammu serial AT-commands, SIM rotation algorithms, Redis campaign queues, and audio handoff to OpenAI API. *(Clearly marked as prototype)*. |

---

## 3. Project Assets & Purpose

| Asset | Type | Purpose |
| :--- | :--- | :--- |
| `fintech_ledger_monochrome.jpg` | Generated Art | Minimalist architectural graphite composition representing ledger data architecture for Dixit Lending Solution. |
| `telephony_waveform_monochrome.jpg` | Generated Art | Abstract brutalist telecom monument and wave ripples representing GSM telephony for CLN AI Loan Calling. |
| `curriculum_matrix_monochrome.jpg` | Generated Art | Abstract structural timetable matrix representing modular scheduling for Smart Curriculum Attendance. |
| `cln-profile-banner.png` | Real Screenshot | Verified operational interface banner from the CLN CRM backend. |
| `Dixit Lending Solution Logo.png` | Real Brand Asset | Authentic logo for Dixit Lending Solution. |
| `breed-sample-murrah.jpg` | Real Image | Murrah buffalo sample from the actual Breed Recognition test dataset. |

---

## 4. Local Run & Production Build

### Install Dependencies
```bash
npm install
```

### Run Linter
```bash
npm run lint
```
*Expected: 0 warnings, 0 errors.*

### Build for Production
```bash
npm run build
```
*Compiled output in `dist/` with code-split Three.js bundle (initial bundle: ~89 kB gzip).*

### Run Development Server
```bash
npm run dev -- --port 5174
```
Access at [http://localhost:5174](http://localhost:5174).
