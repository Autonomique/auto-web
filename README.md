# Autonomique website

Marketing website for **Autonomique**, physical AI for industrial robots (www.autonomique.ai). Visual language adapted from the Nemo page of the original Baral Labs site: sage/olive light surfaces, deep-green bands, lime accents, mono eyebrows.

Pages (each a real HTML entry point):

- `/`: home + platform (hero, reliability gap, Perceive/Reason/Act, Generalist–Specialist, tele-op, production proof, industries, latest news, partnership CTA)
- `/industries/`: automotive, electronics, aerospace, pharma & regulated
- `/news/`: all news posts, rendered in full with links to the originals
- `/company/`: story, principles, team, backers, careers

The site is static (React, Vite, Tailwind), with no analytics or tracking.

## Editing content

All copy that changes over time lives in `src/content.ts`: news articles (the "CMS"), industries, team, backers, hiring areas, and the contact email. To add a news post, add an entry at the top of `articles` (newest first).

### Photos

Illustrations stand in for photography by default. To use a photo, put the file in `public/images/` and set its name in `photos` in `src/content.ts` (`deployment`, `teleop`, `team`).

## Local development

Requires Node `^22.12.0 || >=24.0.0`.

```sh
npm ci
npm run dev        # http://localhost:5173/
```

## Validation

```sh
npm run lint
npm run build -- --base=/auto-web/   # GitHub project site
npm run build -- --base=/                      # custom domain
npx vite preview --base /auto-web/   # preview the project-site build
```

Every page is a real HTML entry point (`index.html`, `industries/`, `news/`, `company/`) and internal links use Vite's base path.

## Deployment

`.github/workflows/pages.yml` runs `npm ci`, lint, and a build on every pull request (no deploy). Pushes to `main` build with the base path reported by GitHub Pages, then deploy.

1. In **Settings → Pages**, set **Source** to **GitHub Actions**.
2. Merge to `main` (or run the workflow manually on `main`).
3. Confirm the deploy job succeeds.

### Custom domain (autonomique.ai)

1. In **Settings → Pages → Custom domain**, enter `www.autonomique.ai` and save.
2. At your DNS provider, add apex `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (optionally the matching `AAAA` records from GitHub's docs), and a `www` `CNAME` to `<owner>.github.io`.
3. Wait for the DNS check to pass, then enable **Enforce HTTPS**.
4. Re-run the workflow on `main`. Pages then reports an empty base path, so the site builds for `/`.

Consider verifying the domain in your GitHub account settings to prevent takeover.
