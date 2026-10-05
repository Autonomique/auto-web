# Baral Labs website

Standalone website for **Baral Labs** (`/`, "AI experiments, in the open") and **Nemo** (`/nemo/`), an early-development native macOS launcher and AI assistant. iOS, agents, and Raycast-compatible extensions are planned, not available.

Nemo's source is public at [vktt/SuperSpot](https://github.com/vktt/SuperSpot), but Nemo is proprietary software, not open source. Product, build, license, and roadmap links point to that repository.

The site is static (React, Vite, Tailwind). It has no analytics, tracking, API-key collection, or real AI requests; the launcher previews are illustrations.

Default URLs once deployed:

- https://vktt.github.io/baral-labs-website/
- https://vktt.github.io/baral-labs-website/nemo/

## Local development

Requires Node `^22.12.0 || >=24.0.0`.

```sh
npm ci
npm run dev        # http://localhost:5173/
```

## Validation

```sh
npm run lint
npm run build -- --base=/baral-labs-website/   # GitHub project site
npm run build -- --base=/                      # custom domain
npx vite preview --base /baral-labs-website/   # preview the project-site build
```

Both pages are real HTML entry points (`index.html`, `nemo/index.html`) and internal links use Vite's base path.

## Deployment

`.github/workflows/pages.yml` runs `npm ci`, lint, and a build on every pull request (no deploy). Pushes to `main` build with the base path reported by GitHub Pages, then deploy.

1. In **Settings → Pages**, set **Source** to **GitHub Actions**.
2. Merge to `main` (or run the workflow manually on `main`).
3. Confirm the deploy job succeeds and open the URLs above.

### Custom domain (baral-labs.com)

1. In **Settings → Pages → Custom domain**, enter `baral-labs.com` and save.
2. At your DNS provider, add apex `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (optionally the matching `AAAA` records from GitHub's docs), and a `www` `CNAME` to `vktt.github.io`.
3. Wait for the DNS check to pass, then enable **Enforce HTTPS**.
4. Re-run the workflow on `main`. Pages then reports an empty base path, so the site builds for `/`.

Consider verifying the domain in your GitHub account settings to prevent takeover.
