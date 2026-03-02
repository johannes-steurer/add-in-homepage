# Publishing This Site on GitHub Pages

## Prerequisites

- A GitHub account
- This repository pushed to GitHub under your account (e.g. `github.com/johannes-steurer/add-in-homepage`)

---

## Step 1 – Push the repository to GitHub

If you haven't done so yet:

```bash
git init                              # already done if this is a git repo
git add .
git commit -m "Initial site structure"
git remote add origin https://github.com/johannes-steurer/add-in-homepage.git
git push -u origin main
```

---

## Step 2 – Enable GitHub Pages

1. Open the repository on **github.com**.
2. Go to **Settings** → **Pages** (left sidebar).
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**.

GitHub will display a banner:
> "Your site is ready to be published at **https://johannes-steurer.github.io/add-in-homepage/**"

It usually takes **1–3 minutes** for the first deployment to go live.

---

## Step 3 – Access the live site

Once deployed, your page is publicly accessible at:

```
https://johannes-steurer.github.io/add-in-homepage/
```

Every subsequent `git push` to `main` will automatically redeploy the site (typically within 1–2 minutes).

---

## Optional – Use a custom domain

1. In **Settings → Pages**, enter your domain under **Custom domain** (e.g. `www.example.com`) and click **Save**.
2. Add a `CNAME` file to the repo root containing just your domain:
   ```
   www.example.com
   ```
3. At your DNS provider, add a CNAME record pointing `www` → `johannes-steurer.github.io`.
4. Enable **Enforce HTTPS** once DNS propagates (can take up to 24 h).

---

## File structure reference

```
add-in-homepage/
├── index.html              ← entry point loaded by GitHub Pages
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/             ← drop your screenshots/images here
└── GITHUB_PAGES_SETUP.md   ← this file
```

> **Tip:** GitHub Pages serves `index.html` automatically from the root, so no additional configuration is needed for a single-page site.
