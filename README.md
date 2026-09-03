# 🚀 Roland Artmeladze — Interactive Web Developer Portfolio (v2.1)

A modern, high-performance developer portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and modern UI primitives. Designed with a dark glassmorphic UI, smooth micro-interactions, responsive grid layouts, and custom noise/line overlays.

🌐 **Live Demo:** [portfolio-inky-tau-14.vercel.app](https://portfolio-inky-tau-14.vercel.app/)

---

## 🎨 What's New in Version 2.1 (Key Updates)

In this major update, the portfolio was completely restructured and modernized across several architectural and UI layers:

- **Bento Grid Architecture:** Implemented standard desktop 3-column Bento layouts with responsive single-column fallbacks for mobile and tablet views.
- **Enhanced Education & Growth Section (`EducationSection.tsx`):**
  - Academic background at **Georgian Technical University (Computer Engineering)**.
  - Professional certifications with dynamic accent styling and direct verification links.
  - Interactive **Language Proficiency Progress Bars** (Georgian, English B2, Russian).
  - Extended **Currently Learning Tech Stack**: Integrated **AI Engineering**, **Python**, **Google Cloud & APIs**, GraphQL, Docker, Kubernetes, AWS, React Native, Rust, and WebAssembly.
- **Full Georgian Code Documentation:** Complete English-Georgian technical annotations added to core components (`HomePage`, `EducationSection`, etc.) for maintainability.
- **Modern Canvas & Noise Backgrounds:** Custom layered noise texture (`.noise-overlay`) and dynamic background grid lines (`.grid-bg-lines`) for high-end aesthetic depth.

---

## 🛠️ Tech Stack & Ecosystem

| Layer | Technologies Used |
| :--- | :--- |
| **Core Framework** | **Next.js 15** (App Router), **React 19**, **TypeScript** |
| **Styling & UI** | **Tailwind CSS**, PostCSS, Custom Utilities, Lucide Icons |
| **Package Manager** | `pnpm` (also compatible with `npm` / `yarn`) |
| **Deployment & Hosting** | **Vercel** with automatic GitHub CI/CD integration |
| **Code Quality & Formatting** | ESLint, Prettier, Husky |

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── assets/
│       └── images/             # Project screenshots, logos, and branding assets
├── src/
│   ├── app/
│   │   ├── components/         # Page sections & complex UI components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutStatsSection.tsx
│   │   │   ├── SkillsDashboard.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── EducationSection.tsx
│   │   ├── layout.tsx          # App Router root layout & metadata
│   │   └── page.tsx            # Portfolio landing page (HomePage)
│   ├── components/             # Global layout elements (Header, Footer)
│   └── styles/                 # Global CSS, noise overlays, and custom utilities
├── .eslintrc.json              # ESLint rules configuration
├── .prettierrc                 # Prettier code formatting setup
├── next.config.mjs             # Next.js runtime configuration
├── package.json                # Project dependencies and script runner
├── postcss.config.js           # PostCSS setup for Tailwind CSS
└── tailwind.config.js          # Tailwind design token overrides & theme configuration
```
----

## ⚡ Quick Start & Development Setup

### 1. Prerequisites
Ensure you have Node.js (v18+) and `pnpm` (or `npm`) installed.

### 2. Installation
Clone the repository and install project dependencies:

```bash
git clone [https://github.com/rolandiartmeladze/Portfolio.git](https://github.com/rolandiartmeladze/Portfolio.git)
cd Portfolio
pnpm install
# or: npm install

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## 🎨 Styling

This project uses Tailwind CSS for styling with the following features:
- Utility-first approach for rapid development
- Custom theme configuration
- Responsive design utilities
- PostCSS and Autoprefixer integration

## 📦 Available Scripts

- `npm run dev` - Start development server on port 4028
- `npm run build` - Build the application for production
- `npm run start` - Start the development server
- `npm run serve` - Start the production server
- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier

## 📱 Deployment

Build the application for production:

  ```bash
  npm run build
  ```

## 📚 Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial

You can check out the [Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
