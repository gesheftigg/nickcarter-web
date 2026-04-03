# nickcarter.ai Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a professional hiring interface at `nickcarter.ai` with artifact portfolio and professional summary.

**Architecture:** Next.js 15 static export with App Router, Tailwind CSS 4, deployed to Cloudflare Pages. Two pages: landing (`/`) and portfolio (`/portfolio`). Content lives in component files — no CMS, no markdown pipeline. Design quality is critical — use frontend-design skill.

**Tech Stack:** Next.js 16 (matching lorehaven-web), React 19, TypeScript, Tailwind CSS 4, Cloudflare Pages

**Spec:** `docs/superpowers/specs/2026-03-27-nickcarter-ai-design.md`

**Reference project:** `../lorehaven-web/` — same stack, same deployment target, same config patterns.

---

## File Structure

```
nickcarter-web/
├── app/
│   ├── layout.tsx              # Root layout: fonts, metadata, nav, footer
│   ├── page.tsx                # Landing page: hero + summary + artifact highlights
│   ├── portfolio/
│   │   └── page.tsx            # Portfolio page: full artifact details + external links
│   ├── globals.css             # Tailwind imports + custom styles
│   └── components/
│       ├── Nav.tsx             # Top navigation (simple: name + portfolio link)
│       ├── Footer.tsx          # Footer: links, contact
│       ├── Hero.tsx            # Hero section: name, positioning, engagement cards
│       ├── Summary.tsx         # Professional summary: 3 paragraphs
│       ├── ArtifactCard.tsx    # Reusable card for landing page artifact highlights
│       ├── ArtifactDetail.tsx  # Reusable expandable detail for portfolio page
│       └── SectionHeader.tsx   # Reusable section header ("How I Build" / "How I Create")
├── lib/
│   └── artifacts.ts            # Artifact data: titles, descriptions, skills, detail content
├── public/
│   └── favicon.ico             # Favicon
├── next.config.ts              # Static export config
├── postcss.config.mjs          # Tailwind PostCSS plugin
├── tsconfig.json               # TypeScript config
├── eslint.config.mjs           # ESLint config
├── package.json                # Dependencies and scripts
├── CLAUDE.md                   # Project context for AI assistants
└── .gitignore                  # Node, Next.js ignores
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `next.config.ts`, `postcss.config.mjs`, `tsconfig.json`, `eslint.config.mjs`, `.gitignore`, `CLAUDE.md`
- Create: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`

- [ ] **Step 1: Initialize Next.js project**

Run from `/Users/ncarter/gits/nickcarter-web/`:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*" --use-npm
```
Select defaults. This scaffolds the project matching lorehaven-web patterns.

- [ ] **Step 2: Configure static export**

Update `next.config.ts`:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

- [ ] **Step 3: Set dev port to avoid conflicts**

Update `package.json` scripts:
```json
"dev": "next dev --port 3003"
```
(lorehaven-web uses 3002)

- [ ] **Step 4: Verify it runs**

```bash
npm run dev
```
Expected: Dev server starts on http://localhost:3003, default Next.js page renders.

- [ ] **Step 5: Verify static build**

```bash
npm run build
```
Expected: Build succeeds, `out/` directory created with static files.

- [ ] **Step 6: Write CLAUDE.md**

Create `CLAUDE.md` with project context:
```markdown
# nickcarter.ai

Personal professional site for Nick Carter. Hiring-manager-facing artifact portfolio.

## Stack
- Next.js 16, React 19, TypeScript, Tailwind CSS 4
- Static export (`output: "export"`) deployed to Cloudflare Pages
- Domain: nickcarter.ai

## Structure
- `/` — Landing page: hero, professional summary, artifact highlights
- `/portfolio` — Full artifact details with anchor links, external links

## Design
- Design quality is critical — the site itself is a portfolio piece
- No generic AI aesthetic. Distinctive, polished, professional.
- Mobile-first responsive design

## Commands
- `npm run dev` — dev server on port 3003
- `npm run build` — static export to `out/`
- `npm run lint` — ESLint

## Spec
See `../ai-career/docs/superpowers/specs/2026-03-27-nickcarter-ai-design.md`
```

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js project with static export config"
```

---

### Task 2: Artifact Data

**Files:**
- Create: `lib/artifacts.ts`

All artifact content in one file. Each artifact has: id (for anchor links), title, oneLiner, skills array, section ("build" or "create"), detail (the expanded story), and optional links.

- [ ] **Step 1: Create artifact data file**

Create `lib/artifacts.ts` with the full artifact data structure and content for all artifacts. Source content from:
- LoreHaven MCP: `../lorehaven-client/` repo structure, `../lorehaven-specs/` decisions
- IEC 62304: `../ai-career/resumes/RESUME_AUDIT.md` and Nick's BD accomplishments
- Dexcom Platform: same resume files — 99.9% uptime, 1.7B events/day, 60 microservices, 22% cloud spend reduction
- CLAUDE.md Systems: `../ai-career/.claude/` and `../chapworks/.claude/` for examples
- Ship With Intent: `../chapworks/ShipWithIntent/` specs and POV
- Agentic Novel: `../ai-career/content/books/agentic/` — the drafting skill, bible, style guide
- Until The Day Is Over: placeholder detail, marked as "coming soon" with short description
- nickcarter.ai: omit from MVP data (post-launch artifact)

Type definition:
```typescript
export interface Artifact {
  id: string;           // anchor link target: "lorehaven-mcp"
  title: string;
  oneLiner: string;
  skills: string[];
  section: "build" | "create";
  detail: string;       // the real story — multiple paragraphs, markdown-ish
  links?: { label: string; url: string }[];
}
```

- [ ] **Step 2: Populate all artifact content**

Write the real expanded content for each artifact. This is the most important content on the site — it's the "View AI Context" that proves depth. Each detail section should be 2-4 paragraphs of specific, concrete content. Not resume bullet points. The real story.

Read the source files listed above to write accurate, specific content.

- [ ] **Step 3: Commit**

```bash
git add lib/artifacts.ts
git commit -m "feat: add artifact data with expanded detail content"
```

---

### Task 3: Shared Components

**Files:**
- Create: `app/components/Nav.tsx`, `app/components/Footer.tsx`, `app/components/SectionHeader.tsx`
- Modify: `app/layout.tsx`, `app/globals.css`

- [ ] **Step 1: Clean out default styles and layout**

Replace `app/globals.css` with Tailwind imports and any custom base styles. Remove all default Next.js styling.

Replace `app/layout.tsx` with root layout: HTML metadata for `nickcarter.ai`, font choices (use a clean sans-serif — Inter or similar via next/font), body wrapper.

- [ ] **Step 2: Build Nav component**

Simple top nav: "Nick Carter" on the left (links to `/`), "Portfolio" on the right (links to `/portfolio`). Clean, minimal. Mobile-responsive.

- [ ] **Step 3: Build Footer component**

Links to: Substack, YouTube, LinkedIn, email (nick.carter@hey.com). Copyright line. Minimal.

- [ ] **Step 4: Build SectionHeader component**

Reusable section divider with title and optional subtitle. Used for "How I Build with AI" and "How I Create with AI" sections on both pages.

- [ ] **Step 5: Wire Nav and Footer into layout**

Add Nav and Footer to `app/layout.tsx` so they appear on every page.

- [ ] **Step 6: Verify dev server shows clean layout**

```bash
npm run dev
```
Expected: Clean page with nav and footer, no default Next.js content.

- [ ] **Step 7: Commit**

```bash
git add app/
git commit -m "feat: add nav, footer, section header, clean layout"
```

---

### Task 4: Landing Page — Hero and Summary

**Files:**
- Create: `app/components/Hero.tsx`, `app/components/Summary.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Build Hero component**

Name: **Nick Carter**
Positioning line: "Engineering leader who builds AI systems — and teaches teams to build them too"

Three engagement cards below:
1. "See What I Build" — anchor link to `#artifacts` section below
2. "Ask AI About Me" — grayed out, "Coming soon" label
3. "Check Fit" — grayed out, "Coming soon" label

Design should be distinctive and polished. Not a generic hero with gradient background. Think: clean, confident, professional but with personality. The site's first impression.

- [ ] **Step 2: Build Summary component**

Three paragraphs of professional summary. Human voice, not resume-speak. Content from the spec:

1. Who I am now — 18 years, regulated medical devices (BD, Dexcom), Director-level but hands-on with AI.
2. What I'm looking for — hands-on AI implementing Director, would rather be IC at AI-forward company than leader at one that doesn't adopt.
3. What makes me different — regulated-industry + AI intersection. Audit-ready AND fast.

- [ ] **Step 3: Wire Hero and Summary into landing page**

Update `app/page.tsx` to render Hero and Summary.

- [ ] **Step 4: Verify rendering**

```bash
npm run dev
```
Expected: Hero with name, positioning, three cards. Summary below. Clean and polished.

- [ ] **Step 5: Commit**

```bash
git add app/
git commit -m "feat: add hero and professional summary to landing page"
```

---

### Task 5: Landing Page — Artifact Cards

**Files:**
- Create: `app/components/ArtifactCard.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Build ArtifactCard component**

A card showing: title, one-liner description, skill tags (small, subtle), and a "View Details" link that points to `/portfolio#artifact-id`.

Should look like a portfolio piece — clean, with enough visual weight to invite clicking but not cluttered. Cards should work in a responsive grid (2-3 columns on desktop, 1 on mobile).

- [ ] **Step 2: Wire artifact cards into landing page**

Import artifacts from `lib/artifacts.ts`. Render two sections on the landing page:
- **"How I Build with AI"** — filter artifacts where `section === "build"`
- **"How I Create with AI"** — filter artifacts where `section === "create"`

Use SectionHeader for each. Use `id="artifacts"` on the container for the hero scroll link.

- [ ] **Step 3: Verify all cards render with correct content**

```bash
npm run dev
```
Expected: Two sections with artifact cards. All titles, one-liners, and skill tags populated. "View Details" links point to `/portfolio#id`.

- [ ] **Step 4: Commit**

```bash
git add app/
git commit -m "feat: add artifact cards to landing page"
```

---

### Task 6: Portfolio Page

**Files:**
- Create: `app/portfolio/page.tsx`, `app/components/ArtifactDetail.tsx`

- [ ] **Step 1: Build ArtifactDetail component**

Full artifact presentation with anchor `id` for deep linking. Shows: title, one-liner, skill tags, full expanded detail content, and any links. The detail content is the real story — rendered as formatted text (paragraphs, not a wall of text).

- [ ] **Step 2: Build portfolio page**

Two sections (same as landing): "How I Build with AI" and "How I Create with AI". Each renders ArtifactDetail components for all artifacts in that section.

Below the artifacts, an **External Links** section:
- Ship With Intent (Substack) — link
- Ship With Intent (YouTube) — link
- LinkedIn — link (yes-nick-carter, with note about pending handle update)
- Email — nick.carter@hey.com

- [ ] **Step 3: Verify portfolio page and anchor links**

```bash
npm run dev
```
Navigate to `/portfolio`. Verify all artifacts render with full detail. Test anchor links from landing page cards (`/portfolio#lorehaven-mcp` etc.) — they should scroll to the correct artifact.

- [ ] **Step 4: Commit**

```bash
git add app/
git commit -m "feat: add portfolio page with full artifact details and external links"
```

---

### Task 7: Design Polish

**Files:**
- Modify: all component files, `globals.css`

This task is where the site goes from functional to distinctive. Use the frontend-design skill.

- [ ] **Step 1: Apply design system**

Invoke frontend-design skill to review and polish the entire site. The brief:
- Professional but with personality. Not corporate, not startup-casual.
- The site is a portfolio piece — its quality demonstrates what Nick brings to products.
- No generic AI aesthetic (dark gradients, neon accents, "futuristic" vibes).
- Clean typography. Good whitespace. Cards that invite interaction.
- Mobile-first. Must look great on phone.
- Color palette should feel confident and distinctive without being loud.

- [ ] **Step 2: Verify mobile layout**

Check on iPhone-width viewport (375px) and tablet (768px). All content readable, no overflow, cards stack properly.

- [ ] **Step 3: Verify static build**

```bash
npm run build
```
Expected: Clean build, no errors, `out/` directory with all pages.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: apply design polish — typography, colors, spacing, mobile"
```

---

### Task 8: Deploy to Cloudflare Pages

**Files:**
- No file changes — deployment configuration

- [ ] **Step 1: Push repo to GitHub**

```bash
git remote add origin git@github.com:yesnickcarter/nickcarter-web.git
git push -u origin main
```
(Adjust remote URL if the repo name or org differs.)

- [ ] **Step 2: Create Cloudflare Pages project**

In Cloudflare dashboard:
- Connect to GitHub repo `nickcarter-web`
- Build command: `npm run build`
- Build output directory: `out`
- Node version: 20 (or match what lorehaven-web uses)

- [ ] **Step 3: Point domain**

In Cloudflare DNS, add `nickcarter.ai` as a custom domain for the Pages project. Cloudflare handles SSL.

- [ ] **Step 4: Verify live site**

Navigate to `https://nickcarter.ai`. Verify:
- Landing page renders correctly
- Portfolio page renders correctly
- Anchor links from landing → portfolio work
- External links (Substack, YouTube, LinkedIn) are valid
- Mobile layout works
- HTTPS active

- [ ] **Step 5: Run launch checklist from spec**

Verify all items from the spec's launch checklist:
- [ ] Site deploys without errors
- [ ] All artifact cards have populated content
- [ ] All artifact detail sections have real content
- [ ] All external links valid and working
- [ ] Mobile layout correct on two breakpoints
- [ ] Lighthouse performance score above 90
- [ ] `nickcarter.ai` resolves correctly

- [ ] **Step 6: Commit any fixes**

```bash
git add -A
git commit -m "fix: post-deploy adjustments"
git push
```

---

## Execution Notes

- **Task 2 (artifact data) is the most time-consuming** — writing the real expanded content for 7 artifacts requires reading source files across multiple repos. Budget extra time here.
- **Task 7 (design polish) is where quality lives.** Don't rush it. The site is an artifact.
- **Tasks 1-6 can be done by subagents.** Task 7 should involve Nick for design review. Task 8 requires Nick for Cloudflare dashboard access.
- **Total estimated tasks for subagent execution:** 6 implementation tasks + 1 design + 1 deploy = 8 tasks.
