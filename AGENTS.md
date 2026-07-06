# ODUS - Project Context for Agents

Welcome to the ODUS project. This document provides essential context for any AI agent joining the development process to ensure consistency, architectural alignment, and adherence to user preferences.

## 1. Project Overview & Vision

**ODUS** is a medical center ("Centro Médico"). The project is divided into two major phases:

- **Phase 1 (Current):** Develop a modern, high-performance Landing Page based on a provided design prototype.
- **Phase 2 (Future):** Completely rebuild an existing, legacy PHP-based clinic management system from scratch. This new system will include:
  - **Patient Portal:** Self-management of appointments (turnos) and medical studies.
  - **Intranet:** A dashboard for receptionists and doctors to manage operations.

## 2. Architecture & Monorepo Strategy

To ensure maximum scalability and code sharing between the landing page, the patient portal, and the backend API, the project uses a **Monorepo architecture**:

- **Tooling:** `pnpm workspaces` combined with `Turborepo` (v2 configuration using `tasks` in `turbo.json`).
- **Structure:**
  - `/apps/landing`: The Next.js landing page application.
  - `/apps/portal` (future): The patient management web app.
  - `/apps/api` (future): The NestJS backend API.
  - `/packages/*` (future): Shared UI components, utilities, and configurations.

## 3. Technology Stack

- **Framework:** Next.js (App Router) for the Frontend. NestJS for the Backend API.
- **Language:** **JavaScript (ES6+) ONLY**. The user explicitly requested **NO TypeScript**.
- **Styling:** Tailwind CSS v4.
- **Infrastructure:** Docker (for containerization and future deployments).

## 4. Design System & Aesthetics

- **Style:** "Warm Minimalism" - clean, modern, and accessible.
- **Typography:** `Manrope` (Headings) and `Inter` (Body).
- **Color Palette (Strict 4-color base):**
  - Primary: `#0B3B8C` (Deep Blue)
  - Secondary: `#52C7B8` (Teal/Aquamarine)
  - Tertiary: `#F8FAFC` (Off-white/Light Gray)
  - Neutral: `#64748B` (Slate/Gray)
- _Note: Ensure all global styles in `globals.css` adhere strictly to this palette to avoid redundancy._

## 5. Agent Guidelines & Rules

0. **Code Modification Workflow & Tool Usage:**
   - **DO NOT** output raw code blocks in the chat when asked to write or modify code. You must apply all changes directly to the workspace files using the appropriate file-editing tools (such as `replace_file_content`, `multi_replace_file_content`, or `write_to_file`).
   - These tool edits **MUST** trigger the IDE's native "Review / Pending Approval" split UI. Bypassing this approval gate is strictly prohibited; the user must always be able to click Accept or Reject in the IDE interface before changes are written.
1. **Language Policy:**
   - Write all code, file names, variables, and code comments in **English**.
   - **CRITICAL:** All user-facing UI text (copy, buttons, navigation, public content) must be strictly in **Spanish**.
   - Communication with the user in the chat can remain in Spanish.
2. **Next.js App Router Patterns:**
   - Use `app/layout.js` for global wrappers (e.g., `<Header />`).
   - Component logic should be separated into a `components/` folder either globally (`apps/landing/components/`) or scoped within a route (e.g., `apps/landing/app/specialties/components/`).
3. **Dependencies:** When installing new packages, ensure you use `pnpm` and filter by the specific workspace (e.g., `pnpm add package-name -F landing`).
4. **Living Context Document:** This `AGENTS.md` file is the source of truth for the project context. Whenever a relevant architectural decision, strict rule, or major change occurs during development, **you must update this file** to ensure future agents have the full, up-to-date context. **CRITICAL:** If the user points out a constant behavior or corrects a recurring workflow error (e.g., failing to update a README), the agent MUST proactively update this `AGENTS.md` file to record the new rule permanently.
5. **Git Commit Policy:**
   - Commits and pushes **MUST ONLY** be made by the user. The AI will suggest appropriate commit messages in Spanish when requested.
   - Commit messages **MUST** be written in **Spanish** (in lowercase after the type, and **MUST NOT** contain any accents/tildes).
   - **Pre-Commit Workflow:** When the user asks for a commit name suggestion, the agent **MUST ALWAYS** verify the current state of the project and **proactively update the respective `README.md` files**. There are NO exceptions to this rule; even for minor CSS or padding tweaks, the README must be updated (e.g., mentioning improvements in UI consistency or responsive alignment). **IMPORTANT:** The `README.md` files must not contain installation/running guides or implementation details, but rather describe strictly what the project/app is about, what technologies it uses, and how it is structured/built.
   - Commits must adhere strictly to the following semantic structure and types:
     - `feat`: New features.
     - `fix`: Bug fixes.
     - `refactor`: Code reorganization without changing behavior.
     - `style`: Visual changes or formatting.
     - `docs`: Documentation changes.
     - `test`: Test additions/modifications.
     - `chore`: Configurations, dependencies, scripts.
     - `perf`: Performance optimizations.
     - `build`: Build, deployment, or tooling changes.
     - `ci`: CI pipeline changes (GitHub Actions, etc.).
6. **Icon Usage:**
   - **ALWAYS** use icons from `react-icons` when an icon is needed. Do not use external icon stylesheets, local SVG copies, or Google Material symbols.
7. **Scroll Entrance Animation System:**
   - To keep the landing page highly performant and consistent with the "Warm Minimalism" aesthetics, ODUS uses a custom, once-off scroll reveal system.
   - **Hook (`apps/landing/components/useScrollReveal.js`)**: Uses native browser `IntersectionObserver` that automatically disconnects after the element is revealed to keep CPU overhead at zero.
   - **Classes**: Defines premium entrance styles in [globals.css](file:///c:/Users/Elmo/Desktop/ODUS/apps/landing/app/globals.css) under `.reveal-fade-up`, combined with staggered delays (`.transition-delay-75` to `.transition-delay-450`).
   - **Strict Rule**: Avoid installing third-party animation libraries (such as Framer Motion or GSAP) unless explicitly requested, as they bloat bundle size. Use the custom reveal hook and native CSS transitions.

---

<!-- BEGIN:nextjs-agent-rules -->

# Next.js Notice

This version of Next.js has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->
