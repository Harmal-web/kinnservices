# Kinn Services — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS site for Kinn Services,
a security guarding & commercial cleaning provider in Manchester.

This is a **different design system** from the earlier Aston Services build:
light paper background (not dark navy), a Space Grotesk + IBM Plex Sans
typographic pairing (not the earlier corporate sans), an asymmetric
"ID badge" hero photo treatment instead of a full-bleed dark hero, a
two-column checklist-style service list instead of a numbered marquee grid,
and a real vertical process timeline instead of a stat-counter strip. See
`aston-services-site-teardown.md` (from the earlier conversation) for the
full comparison if you want it side by side.

## Stack

- Next.js 14 App Router, React 18, TypeScript (strict)
- Tailwind CSS (custom palette/tokens in `tailwind.config.ts`)
- `next/font` for self-hosted Google Fonts (Space Grotesk, IBM Plex Sans)
- JSON-LD structured data: `LocalBusiness`, `BreadcrumbList`, `Service`
- No client-side JS beyond the header mobile-nav toggle and the quote form

## Project structure

```
app/                Route segments (App Router)
  layout.tsx         Root layout, fonts, metadata, Organization schema
  page.tsx            Home
  security/page.tsx   Security services (anchor sections per sub-service)
  cleaning/page.tsx    Cleaning services (anchor sections per sub-service)
  about/page.tsx
  areas/page.tsx
  contact/page.tsx     Quote form
  sitemap.ts / robots.ts
components/          Reusable UI components
data/business.ts     Central business config — name, contact, placeholders
data/services.ts     Service list, process steps, value pillars
lib/metadata.ts      Per-page Metadata helper
lib/schema.ts         JSON-LD builders
```

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Client Content & Assets Required

Everything below is a placeholder — the site is structurally complete but
these need real client-confirmed values before launch:

- Real business phone number, email, and registered address
  (`data/business.ts` — `phoneDisplay`, `phoneHref`, `email`, `addressLine`)
- Company registration number (`data/business.ts` — `companyNumber`)
- Production domain (`data/business.ts` — `siteUrl`, used in canonical URLs,
  sitemap and Open Graph tags)
- Logo (currently a plain "K" mark in `components/Header.tsx`)
- Real photography to replace every `<ImagePlaceholder>` instance (hero
  officer/cleaning shots, per-service images on `/security` and `/cleaning`,
  the about-page team photo)
- Confirmed service area list (`data/business.ts` — `serviceAreas`; only
  add towns the client has actually confirmed)
- A genuine testimonial to replace the sample quote in
  `components/Testimonial.tsx`
- Any certifications/accreditations the business actually holds (none are
  currently shown — do not add badges without written confirmation)
- A real form backend: `components/QuoteForm.tsx` has a marked integration
  point (`// Integration point:`) where you wire up an endpoint, e.g. a
  Next.js Route Handler at `app/api/enquiry/route.ts`, or a provider like
  Formspree/Resend

## Deploying: GitHub → Vercel

### 1. Push this project to GitHub

From the folder containing this project:

```bash
git init
git add .
git commit -m "Initial commit: Kinn Services website"
git branch -M main
git remote add origin https://github.com/<your-username>/kinn-services.git
git push -u origin main
```

If you don't have a repo yet, create an empty one first at
https://github.com/new (don't initialise it with a README, so the push
above doesn't conflict).

### 2. Deploy on Vercel

**Option A — Vercel dashboard (recommended for a first deploy)**
1. Go to https://vercel.com/new
2. Import the GitHub repository you just pushed
3. Framework preset: Vercel auto-detects **Next.js** — leave the default
   build command (`next build`) and output settings as-is
4. Add any environment variables your form backend needs (e.g. an API key
   for Formspree/Resend) under **Environment Variables** — never commit
   secrets into the repo
5. Click **Deploy**

**Option B — Vercel CLI**
```bash
npm i -g vercel
vercel login
vercel        # first deploy, links the project
vercel --prod # subsequent production deploys
```

### 3. After first deploy

- Update `siteUrl` in `data/business.ts` to the real production domain,
  commit, and push — this feeds canonical URLs, the sitemap, and Open
  Graph metadata
- Connect the custom domain in the Vercel dashboard under
  **Project → Settings → Domains**
- Submit `https://<your-domain>/sitemap.xml` in Google Search Console once
  the real domain is live
