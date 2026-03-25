# Seigo Kitamura – Portfolio

This repository hosts my personal portfolio website built with **Next.js** and **Tailwind CSS**, and deployed using **GitHub Pages**.

## 🚀 Tech Stack
- **Framework:** Next.js 15+
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Pages (`next export`)
- **Language:** TypeScript

## 📁 Project Structure
```
seigokitamura-profile/
├── public/          # Static assets (favicon, images, etc.)
├── styles/          # Global CSS / Tailwind configuration
├── pages/           # Next.js pages
├── components/      # Reusable UI components
├── package.json
├── README.md
└── next.config.mjs
```

## 📦 Installation
```bash
npm install
```

If you encounter permission issues (`EACCESS`, `EEXIST`), clear the npm cache:
```bash
sudo rm -rf ~/.npm/_cacache
npm cache clean --force
npm install
```

## 🧪 Local Development
```bash
npm run dev
```
Then open:
```
http://localhost:3000
```

## 🏗️ Build & Export (for GitHub Pages)
Since Next.js 14 removed next export,
static export is automatically performed during the build when using:
```bash
npm run build
```

This generates a `out/` directory.
The generated `out/` directory is synced into the gh-pages branch.

## 🌐 Deploy to GitHub Pages
Commit and push your changes.  
Then go to:

**GitHub → Settings → Pages → Deploy from folder → `out/`**

## 📬 Contact
- GitHub: https://github.com/k5tar
- LinkedIn: https://www.linkedin.com/in/seigo-kitamura/
- Email: k5tar4biz@gmail.com

---
