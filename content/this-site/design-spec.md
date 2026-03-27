# nickcarter.ai — Design Spec

**Created:** 2026-03-27
**Status:** Approved
**Goal:** A professional hiring interface that demonstrates how Nick works with AI — through artifacts, not assertions.

---

## Problem

Nick has 18 years of engineering leadership, hands-on AI building skills, and artifacts that demonstrate both. None of this is visible to hiring managers. His resume compresses it into bullet points. LinkedIn compresses it further. The market pays $150K-$400K for the seven AI skills (Nate Jones framework), and Nick has 5+ at depth — but nobody can see that from a two-page PDF.

## Solution

A standalone site at `nickcarter.ai` that presents Nick's professional identity through artifacts and expanded context, not resume claims. The site itself is an artifact — its design quality demonstrates what Nick brings to products.

## Audience

Two visitors:
- **Cold:** Found through Nate's Network, Google, or a referral. Knows nothing. Needs orientation in 5 seconds.
- **Warm:** Recruiter or hiring manager who received the link. Has a rough idea, wants to go deeper.

The site works for both: quick orientation above the fold, depth below.

## Core Message

"This is what your teams could be doing." Nick doesn't just use AI. He builds AI systems that produce real output — functional and artistic. He can lead the org AND show the teams how to do it.

## Technical Architecture

- **Framework:** Next.js 15 (static export for MVP via `output: 'export'`)
- **Future migration:** When AI chat and fit assessment features are added, migrate from static export to `@cloudflare/next-on-pages` for server-side rendering and API routes. This is a configuration change, not a rewrite — but it IS a migration. Document it here so it's not a surprise.
- **Styling:** Tailwind CSS 4
- **Hosting:** Cloudflare Pages
- **Domain:** `nickcarter.ai`
- **Repo:** New standalone repo (`nickcarter-web` or similar)
- **Design quality:** High. Use frontend-design skill. The site must look distinctive, not generic AI-aesthetic. A hiring manager should think "this is what he'd bring to our products."

## Pages

### Landing Page (`/`)

#### Hero (above the fold)
- Name: Nick Carter
- Title/positioning: "Engineering leader who builds AI systems — and teaches teams to build them too"
- Three engagement mode cards:
  1. **See What I Build** — scrolls to artifact portfolio below
  2. **Ask AI About Me** — placeholder, "Coming soon"
  3. **Check Fit** — placeholder, "Coming soon"

#### Professional Summary
Three paragraphs, human voice, not resume-speak:

1. **Who I am now.** 18 years in engineering leadership. Regulated medical devices (BD, Dexcom). Director-level, managing managers. But hands-on with AI — building real systems, not advising from slides.

2. **What I'm looking for.** I'd rather be an IC at a company that adopts AI than a leader at one that doesn't. Ideally both — a hands-on Director who brings AI fluency to the job and onboards teams who are struggling to adopt it.

3. **What makes me different.** The regulated-industry + AI intersection. I know what it takes to keep systems audit-ready AND move fast with AI. Most people have one or the other.

What the summary does NOT include: job history with dates, buzzword lists, anything that sounds like a cover letter.

#### Artifact Portfolio (featured highlights)

Each artifact is a card with:
- Title and one-sentence description
- Subtle skill tags (maps to Nate's seven skills without being explicit)
- Each card links to its full detail on the portfolio page (anchor link: `/portfolio#lorehaven-mcp`). The portfolio page is the canonical detail location. Landing page cards are hooks — the portfolio page is the proof. Deep-linkable so hiring managers can share a specific artifact.

**Section A: "How I Build with AI"**

1. **LoreHaven MCP Server**
   - "A context architecture system that gives AI structured access to a personal knowledge vault."
   - Skills: context architecture, decomposition, specification precision
   - Expanded: vault hierarchy design, persistent vs. per-session context, MCP protocol implementation, design decisions and rationale

2. **IEC 62304 Compliance Transition**
   - "Led the compliance transition of a live medical device product without disrupting clinical operations."
   - Skills: trust boundary design, evaluation, failure pattern recognition
   - Expanded: what was inherited, constraints (live product, clinical operations couldn't stop), process changes, outcome

3. **Platform Reliability (Dexcom)**
   - "Took a platform from ~90% to 99.9% uptime, processing 1.7B events/day across 60 microservices."
   - Skills: failure pattern recognition, cost economics, decomposition
   - Expanded: what was failing, diagnosis approach, 95% incident reduction, 22% cloud spend reduction, team structure

4. **CLAUDE.md & Memory System Design**
   - "A persistent context architecture for AI-assisted workflows across multiple projects."
   - Skills: context architecture, specification precision
   - Expanded: how the memory system works, what goes in vs. what doesn't, the layered approach, how it evolves

5. **Ship With Intent Content Operation**
   - "A content operation run through AI-augmented workflows — Substack, YouTube, LinkedIn."
   - Skills: specification precision, evaluation, decomposition
   - Expanded: how episodes and posts are produced, the workflow, quality bar, content standards

**Section B: "How I Create with AI"**

1. **Agentic (Novel)**
   - "AI drafting a 35-chapter thriller with consistent voice, style rules, and continuity across plotlines."
   - Skills: specification precision, decomposition, evaluation, context architecture
   - Expanded: the three-layer context loading protocol, plotline siloing, the ban list, voice calibration, how author and AI collaborate

2. **Until The Day Is Over (Album)**
   - "An album produced and released using AI-augmented music production."
   - Skills: evaluation, specification precision
   - Expanded: production process, AI's role, creative decisions, release
   - **Content source:** TBD — no written production notes exist in repos yet. Nick to provide details, or mark expanded section as post-MVP.

3. **nickcarter.ai (This Site)** *(post-launch addition — add after the site ships)*
   - "Designed and built with AI. Itself a portfolio piece."
   - Skills: specification precision, evaluation, frontend design
   - Expanded: how the site was designed through brainstorming sessions, built with Claude Code, design decisions
   - **Note:** This artifact cannot be written until the site exists. Add it after initial deployment. Do not ship with an empty expanded section.

### Portfolio Page (`/portfolio`)

Full inventory of everything Nick has built or published, organized into the same two sections:

**How I Build with AI:**
- All five artifacts from the landing page, with full detail
- Links to GitHub repos where appropriate
- Room for future published articles (failure post-mortem, IEC 62304 → AI trust boundaries piece)

**How I Create with AI:**
- All three artifacts from the landing page, with full detail
- Links to creative output

**External Links:**
- Ship With Intent (Substack)
- Ship With Intent (YouTube)
- LinkedIn (linkedin.com/in/yes-nick-carter) — **Note:** the "yes-" prefix is a known issue flagged in resume audit. Update the handle before or shortly after launch if possible. If not, ship with this URL and fix later.
- GitHub (if public repos exist or are created)

## Future Features (Not MVP)

### `/chat` — Ask AI About Me
- Claude API integration
- System prompt trained on Nick's real experience, projects, expertise
- Anti-sycophancy instructions per Nate's article
- Honest gap acknowledgment
- Demonstrates the AI chat skill itself

### `/fit` — Job Description Fit Assessment
- Paste a JD, get an honest assessment
- Structured output: "strong fit," "worth a conversation," or "probably not your person"
- Bidirectional — tells hiring managers NOT to hire Nick when the fit is weak
- The confidence to turn away bad fits is itself a signal

## Design Principles

1. **The site is an artifact.** Its design quality demonstrates what Nick brings to products. Generic AI-aesthetic is a failure state.
2. **Artifacts over assertions.** Everything claims something by showing it, not saying it.
3. **Honest about gaps.** The "How I Create" section isn't padding — it's a different, harder claim. But gaps (like cost & token economics depth) aren't hidden.
4. **Works for cold and warm visitors.** 5-second orientation above the fold. Depth for the person who wants to dig.
5. **Room to grow.** Static MVP now, interactive features later. Migration from static export to `@cloudflare/next-on-pages` required when adding API routes — documented and planned.

## Success Criteria

**Quality bar (subjective — guiding principles):**
- A hiring manager who spends 5 minutes on the site understands: who Nick is, what he builds, how he works with AI, and whether to reach out.
- The site itself looks good enough that a hiring manager thinks "this is what he'd bring to our products."
- The expanded artifact details sustain genuine investigation — they can't be faked, and they demonstrate real depth.

**Launch checklist (concrete — must pass before deploy):**
- [ ] Site deploys to Cloudflare Pages without errors
- [ ] All artifact cards on landing page have populated content (no placeholders except "This Site" which is post-launch)
- [ ] All artifact detail sections on portfolio page have real content, not stubs
- [ ] All external links (Substack, YouTube, LinkedIn) are valid and working
- [ ] Mobile layout renders correctly on iPhone and Android (check two breakpoints)
- [ ] Lighthouse performance score above 90
- [ ] `nickcarter.ai` domain resolves correctly

## Content Sources

All artifact content can be derived from existing files:
- `ai-career/` repo: resume audit, TASKS.md, action plans, CLAUDE.md, memory system
- `chapworks/` repo: Ship With Intent specs, LoreHaven specs, product docs
- `lorehaven-client/` repo: MCP server implementation
- `ai-career/content/books/agentic/`: drafting skill, bible, chapter outlines
- Nick's work history: BD and Dexcom accomplishments from resume files

## Timeline

- **This weekend (before camping Monday):** MVP shipped — landing page + portfolio page, deployed to Cloudflare Pages
- **After camping:** Add AI chat and fit assessment features
- **Ongoing:** Add published articles as they're written
