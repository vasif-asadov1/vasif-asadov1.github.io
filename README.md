<div align="center">
  
  <h1>🚀 Data Science & AI Research Portfolio</h1>
  
  <p>
    <strong>A high-performance, statically generated personal portfolio and digital garden.</strong><br>
    Bridging the gap between rigorous academic research, data science, and production-ready engineering.
  </p>

  <p>
    <a href="https://astro.build"><img src="https://img.shields.io/badge/Astro-v5-FF5D01?style=for-the-badge&logo=astro&logoColor=white" alt="Astro"></a>
    <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"></a>
    <a href="https://github.com/features/actions"><img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions"></a>
  </p>

  <p>
    <a href="https://vasif-asadov1.github.io">View Live Website</a>
    ·
    <a href="https://github.com/vasif-asadov1/vasif-asadov1.github.io/issues">Report Bug</a>
  </p>
</div>

---

## 🌟 Overview

This repository hosts the source code for my professional portfolio and technical knowledge base. Built from scratch using **Astro** and **Tailwind CSS**, this platform serves as a structured digital garden to document my journey across:

- 📊 **Data Analysis:** Complex SQL queries (T-SQL, PL/SQL, DuckDB) and BI Dashboards.
- 🧠 **Data Science:** End-to-end ML pipelines, Predictive Modeling, and AI Architectures.
- 🔬 **Master's Thesis:** Academic research logs regarding Deep Learning Based Model Predictive Control of Nonlinear Systems.
- 🐧 **Linux World:** High-performance Linux architecture setups and automation.

## ✨ Key Features

- **Blazing Fast Performance:** SSG (Static Site Generation) powered by Astro.
- **Advanced Markdown/MDX Support:** Seamless integration of interactive UI components inside markdown files.
- **Mathematical Typography:** Integrated `remark-math` and `rehype-katex` for crisp, production-grade LaTeX equation rendering.
- **Custom ScrollSpy TOC:** IntersectionObserver-based dynamic Table of Contents for long-form technical articles.
- **Premium Code Blocks:** Syntax highlighting powered by Shiki (Dracula theme) with custom copy-to-clipboard functionality.
- **CI/CD Pipeline:** Fully automated deployments to GitHub Pages via GitHub Actions.
- **Responsive & Modern UI:** Crafted with Tailwind CSS v4 featuring glassmorphism, neon accents, and complex grid layouts.

## 🛠️ Tech Stack

- **Framework:** [Astro](https://astro.build/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Content:** Markdown, MDX, Astro Content Collections
- **Typography & Math:** KaTeX, Shiki
- **Deployment:** GitHub Pages & GitHub Actions

## 📂 Project Architecture

```text
📦 portfolio-website
 ┣ 📂 public               # Static assets (images, fonts, resume)
 ┣ 📂 src
 ┃ ┣ 📂 components         # Reusable UI elements (Navbar, Step Navigation)
 ┃ ┣ 📂 content            # Markdown/MDX collections (Data Science, Thesis, etc.)
 ┃ ┣ 📂 layouts            # Page wrappers (MainLayout, ArticleLayout)
 ┃ ┣ 📂 pages              # Dynamic routing ([...slug].astro)
 ┃ ┗ 📂 styles             # Global CSS & Tailwind configuration
 ┣ 📜 astro.config.mjs     # Astro & Integrations configuration
 ┣ 📜 package.json         # Node.js dependencies
 ┗ 📜 tailwind.config.js   # Tailwind theme settings
```

## 🚀 Local Development

To run this project locally, ensure you have Node.js (v22 or higher) installed.

**1. Clone the repository:**

```bash
git clone [https://github.com/vasif-asadov1/vasif-asadov1.github.io.git](https://github.com/vasif-asadov1/vasif-asadov1.github.io.git)
cd vasif-asadov1.github.io
```

**2. Install dependencies:**

```bash
npm install
```

**3. Start the development server:**

```bash
npm run dev
```

**4. Build for production:**

```bash
npm run build
```

## 🌐 Deployment Pipeline

This repository utilizes GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD).

Upon every push to the main branch, the .github/workflows/deploy.yml action triggers automatically. It configures Node.js v22, builds the Astro project statically, and deploys the generated artifacts directly to the root of the GitHub Pages environment.

## 👨‍💻 Author
Vasif Asadov Data Scientist | Control & Automation Engineer

- LinkedIn: [linkedin.com/in/vasif-asadov1](https://www.linkedin.com/in/vasif-asadov1/)
- GitHub: [github.com/vasif-asadov1](https://github.com/vasif-asadov1)
- YouTube: [Data Insights With Vasif](https://www.youtube.com/@data_insights_vasif)
