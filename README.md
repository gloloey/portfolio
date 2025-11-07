# Gabriel Loloey — Portfolio

A clean, fast portfolio built with **Astro + Tailwind**.

## 0) Prerequisites
- **Node.js 18+** (download from https://nodejs.org)
- A **GitHub** account (for deployment)

## 1) Run locally
```bash
# 1. unzip this project
# 2. open a terminal in the project folder:
npm install
npm run dev
# open http://localhost:4321 in your browser
```

## 2) Customize your info
Edit these files:
- `src/data/site.ts` — your name, email, socials
- `src/data/projects.ts` — project list
- `src/data/experience.ts` — experience items
- `src/data/skills.ts` — programming/tools/languages

Your PDF résumé is at `public/Gabriel_Loloey_Resume.pdf`. Replace it any time.

## 3) Deploy (Vercel — easiest)
1. Create a new GitHub repository and push this folder.
2. Go to https://vercel.com, import the repo, framework = **Astro**.
3. Click **Deploy**. Your site is live.

## 4) Deploy (GitHub Pages)
1. Commit & push to GitHub.
2. In GitHub, go to **Settings → Pages**, choose **Build and deployment: GitHub Actions**.
3. Add the workflow below to `.github/workflows/deploy.yml`, commit & push:

```yaml
name: Deploy Astro site to Pages
on:
  push:
    branches: [ main ]
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: "pages"
  cancel-in-progress: false
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

If you deploy to `username.github.io/REPO`, set your site URL in `astro.config.mjs` later.

## 5) Tips for a great impression
- Keep GitHub links for each project (add them in `src/data/projects.ts`).
- Add screenshots in `public/` and link them inside project cards.
- Keep writing and polishing: clear blurbs, quantified outcomes, readable code.

---

**Made with ♥ using Astro.**
