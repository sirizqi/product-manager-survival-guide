# ⚡ PM Playbooks — The Real-World Product Management Guide

A high-performance, **Neobrutalist** interactive reading and documentation platform designed for Product Managers. Built with **React 19, TypeScript, Tailwind CSS, React Markdown, Fuse.js, and Docker**.

Synchronized with all 47 chapters across 9 core modules of the PM Playbooks compendium.

---

## 🎯 Features

- 🎨 **Neobrutalism UI**: High-contrast, bold borders, retro-vibrant accents, sharp typography (Space Grotesk + Plus Jakarta Sans + JetBrains Mono).
- 📖 **Docusaurus-like Documentation Layout**:
  - Collapsible left sidebar with module hierarchy & search filters.
  - Sticky right sidebar with "On This Page" scrollspy, estimated reading times, and font size adjuster.
  - Previous / Next chapter navigation cards.
  - Key Principles & Takeaways callout box for every chapter.
- ⚡ **Instant Spotlight Search (`Cmd+K` / `Ctrl+K`)**:
  - Full-text and heading fuzzy search powered by Fuse.js across 400+ indexed sections.
  - Keyboard navigation (Arrow keys + Enter + Esc) with category filtering pills.
- 💡 **User Experience & Retention**:
  - Reading progress tracking (Mark as read with celebratory confetti).
  - Bookmark system with slide-over drawer (stored in `localStorage`).
  - Top scroll reading progress indicator.
  - Light & Dark mode toggle.
- 🐳 **Dockerized Production Build**:
  - Multi-stage Dockerfile (Node 22 Alpine builder + Nginx Alpine runner with gzip compression and SPA routing).
  - Production & Coolify Ready: uses internal `expose: 80` without host port conflicts.

---

## 🚀 Getting Started

### Option 1: Run with Docker (Recommended)

```bash
# Build and run container in detached mode on http://localhost:8080
docker compose up -d --build
```

Access the app at: **`http://localhost:8080`**

### Deploying to Coolify:
- In Coolify, select **Docker Compose** or **Dockerfile** build pack.
- Set your domain in Coolify (e.g. `https://pm.yourdomain.com`).
- Coolify automatically routes traffic to internal port `80` with SSL and zero host port collisions.

To stop the container:
```bash
docker compose down
```

---

### Option 2: Local Development

```bash
# Install dependencies
npm install

# Run local dev server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📂 Content & Module Structure

The platform organizes 47 chapters across 9 modules:
1. **Module 1**: Foundations and Realities of The PM Profession (3 chapters)
2. **Module 2**: Hard Skills - Fundamental Toolkit (7 chapters)
3. **Module 3**: Soft Skills - The Invisible Game (7 chapters)
4. **Module 4**: Mindset and Mental Models (5 chapters)
5. **Module 5**: Context Matters - PM in Different Environments (6 chapters)
6. **Module 6**: Special Topics and Advanced Concepts (6 chapters)
7. **Module 7**: Dark Side and Pitfalls (5 chapters)
8. **Module 8**: Practice and Implementation (5 chapters)
9. **Module 9**: Future and Evolution (3 chapters)

To re-sync content from Obsidian:
```bash
npm run sync-playbooks
```

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + PostCSS (Custom Neobrutalism System)
- **Routing**: React Router v7
- **Markdown**: ReactMarkdown + remark-gfm + rehype-raw + rehype-slug
- **Search**: Fuse.js
- **Icons**: Lucide React
- **Container**: Docker + Nginx Alpine
