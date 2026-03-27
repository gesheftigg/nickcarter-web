# nickcarter.ai — Process Narrative

## How a Career Article Became a Deployed Website in One Session

On Thursday afternoon, March 27, 2026, Nick was drafting chapters of a thriller novel with an AI-powered drafting system he'd built that morning. Then an article arrived from Nate Jones about the seven AI skills that pay $150K-$400K. The article wasn't about building websites. It was about the AI labor market — who's hiring, what they're hiring for, and why most people can't see the path from where they are to where the jobs are.

What happened next was unplanned: the article prompted a self-assessment, the assessment revealed that the novel-drafting system was itself a demonstration of five of the seven skills, and the decision to build a professional site followed within minutes. The site was designed, built, and running before dinner.

This is the story of how that happened.

## The Catalyst: Seven Skills Assessment

Nate Jones identified seven skills that appear consistently across AI job postings: specification precision, evaluation and quality judgment, decomposition for delegation, failure pattern recognition, trust boundary and security design, context architecture, and cost/token economics.

Nick mapped himself against all seven. The result: 5 of 7 at depth, with evidence from existing work — the novel-drafting skill demonstrated specification precision and decomposition, the LoreHaven MCP server demonstrated context architecture, the IEC 62304 compliance work demonstrated trust boundary design. The gap wasn't skill acquisition. It was packaging and visibility.

The question shifted from "what skills do I need?" to "how do I show what I already have?" That's when the second Nate Jones article became relevant.

## The Insight: Interface Over Resume

Nate's earlier article argued that the traditional hiring pipeline is broken on both sides. Candidates compress years of work into bullet points. ATS systems scan for keywords. Recruiters spend six seconds per resume. The entire infrastructure filters for volume, not understanding.

His alternative: build an interactive interface that demonstrates capability through use. Not assertions on a page — artifacts someone can explore, query, and investigate. The depth that emerges from genuine expertise can't be faked at scale.

Nick's situation was exactly the use case Nate described: eighteen years of deep expertise in regulated software and AI systems, compressed into a two-page PDF that couldn't convey any of it. The decision was to build a site at nickcarter.ai that presented his work through artifacts, not claims.

## The Brainstorming Process

The brainstorming followed a structured flow: explore context, clarify requirements one question at a time, propose approaches, present design, review, iterate.

Key decisions made through the brainstorming:

**Audience:** Both cold visitors (found through Nate's Network or Google) and warm visitors (received the link from a recruiter). The site needed to orient someone in 5 seconds and sustain investigation for 5 minutes.

**Two-section portfolio:** "How I Build with AI" for professional artifacts (LoreHaven, IEC 62304, Dexcom, CLAUDE.md systems, Ship With Intent) and "How I Create with AI" for artistic artifacts (Agentic novel, Until The Day Is Over album, this site). The creative section makes a harder claim than most portfolios: AI can produce things worth caring about, not just functional output.

**Deep-dive pages per artifact:** The portfolio page shows the summary. Each artifact links to its own page with the actual documents — specs, skills, style guides, process narratives. Three layers of depth: summary for scanners, detail for the interested, full documents for investigators.

**Separate from Chapworks:** The professional site lives at its own domain, not as a section of the company site. Different audiences, different purposes. Chapworks is about the company. nickcarter.ai is about the person.

## The Approach Decision

Three approaches were considered:

1. **Next.js on Cloudflare Pages** — same stack as existing projects (lorehaven-web), known deployment pipeline, room to add API routes later for AI chat and fit assessment features
2. **No-code builder (Framer/Carrd)** — fastest to visual polish, but the medium contradicts the message: a software engineer demonstrating AI skills shouldn't use Squarespace
3. **Piggyback on existing infrastructure** — add pages to lorehaven-web or a shared monorepo. Wrong coupling — personal site shouldn't depend on a product.

Approach 1 was chosen. The fact that Nick built it himself is part of the signal.

## The Design Spec

The spec was written collaboratively, then reviewed by an automated spec reviewer that caught four issues:

1. **Static export vs. API routes contradiction.** The spec said "static export for MVP, API routes later" — but static export in Next.js disables API routes entirely. Fixed by documenting the future migration explicitly.

2. **Bootstrap problem.** The "This Site" artifact can't describe how it was built before it's built. Marked as post-launch addition.

3. **Unspecified expand mechanism.** The spec said artifact cards "expand" but didn't say how. Fixed by specifying anchor links to the portfolio page as the canonical detail location.

4. **Non-measurable success criteria.** "A hiring manager who spends 5 minutes understands..." can't be tested. Added concrete launch checklist items alongside the qualitative goals.

All four issues were caught before any code was written. The spec review loop prevented implementation problems from becoming debugging problems.

## The Implementation Plan

Eight tasks, each self-contained:

1. Project scaffolding (Next.js, Tailwind, static export config)
2. Artifact data (all content in a typed TypeScript file)
3. Shared components (nav, footer, section headers)
4. Landing page hero and summary
5. Landing page artifact cards
6. Portfolio page with full details
7. Design polish
8. Deploy to Cloudflare Pages

Each task was dispatched to a fresh AI subagent with curated context — only the information that task needed, not the full session history. The orchestrator (the main AI session) managed coordination, reviewed output, and moved to the next task.

Task 2 was the most time-consuming: writing real, specific expanded content for seven artifacts required reading source files across four repositories. The content couldn't be generic. A hiring manager reading the Dexcom entry needs to see "1.7 billion events per day across 60 microservices" — not "led platform improvements."

## The Design Direction

The visual design was chosen through an interactive browser companion that showed mockups side-by-side:

**Direction:** Three options presented — Warm Minimal (stone palette, serif headings, Substack-meets-portfolio), Dark Technical (dark background, developer tool aesthetic), and Editorial (white space, strong typography, magazine-like). Nick chose Editorial.

**Hero refinement:** Two editorial hero variants — Classic (quiet authority, uppercase labels, thin rule divider) and Bold (name stacked large, left-border accent on positioning line, button-style actions). Nick chose Bold.

**Card style:** Three options — Ruled (top rule, no box), Bordered (subtle border box), Accent Bar (3px black left-border). Nick chose Accent Bar. This became the site's visual signature — the same left-border accent appears on the hero positioning line, artifact cards, and section accents throughout.

**Design principles:** No colors beyond black, white, and gray. Georgia serif for headings and names. Inter sans-serif for body and labels. Uppercase letter-spaced labels. Generous white space. The restraint IS the design.

## The Animation Package

Six animations were presented as additive options. Nick selected all six:

1. **Scroll reveal** — elements fade up as you scroll, staggered timing
2. **Hero entrance** — name fades up, positioning line slides from left, buttons stagger in
3. **Accent bar draw** — the signature left-border animates top-to-bottom as cards enter viewport
4. **Hover micro-interactions** — accent bar thickens, content shifts, arrows move, underlines draw
5. **Page transitions** — content fades in on navigation
6. **Subtle parallax** — hero scrolls at 95% speed, creating imperceptible depth

The animations use Framer Motion, carefully structured as client components to maintain compatibility with Next.js static export. The goal: the site should feel like a $10,000 build. Subtle, purposeful motion that signals someone thought about every detail.

## The Forward-Thinking Move: llms.txt

After the main build, Nick asked about making the site readable by AI agents — specifically Cloudflare's agentic web features. The solution was three files:

- `/llms.txt` — a summary version of the site in markdown. When a recruiter pastes the URL into Claude and asks "tell me about this candidate," the agent gets structured, substantive content instead of scraping HTML.
- `/llms-full.txt` — the complete version with all artifact details, career history, skills assessment, and anchor links for specific sections.
- `/.well-known/ai-agent.json` — a discovery file that tells AI crawlers where to find the markdown versions.

This costs almost nothing to maintain (the content mirrors what's already on the site) but signals that Nick is building for the world where agents consume the web, not just humans.

## What This Demonstrates

The site demonstrates the same skills it describes:

- **Specification precision:** The design spec defined audience, content structure, technical architecture, success criteria, and a launch checklist before any code was written.
- **Decomposition for delegation:** Eight tasks, each dispatched to a fresh AI agent with curated context. The orchestrator managed coordination; the agents did the work.
- **Evaluation and quality judgment:** Automated spec review caught four issues. Design decisions were made through visual comparison, not abstract discussion. Animation choices were presented as options and evaluated together.
- **Context architecture:** Each subagent received only the context it needed — not the full session history. This is the same principle as the novel-drafting skill's plotline siloing: irrelevant context degrades output.
- **Trust boundary design:** The spec explicitly documented what's MVP vs. future, what's static export vs. API routes, and where the migration boundary falls. Constraints named upfront, not discovered during debugging.

The meta-artifact: the site that presents Nick's AI skills was itself built using those skills. The process documentation proves it isn't a claim.

## Timeline

- 3:30 PM: Nate Jones article arrives, seven-skills assessment begins
- 3:45 PM: Self-assessment complete, action plan written, Nate's Network application submitted
- 4:00 PM: Second article read, brainstorming begins
- 4:20 PM: Design spec written and reviewed
- 4:30 PM: Implementation plan written
- 4:35 PM: Subagent-driven build begins
- 5:15 PM: Tasks 1-6 complete (scaffolding through portfolio page)
- 5:20 PM: Agentic deep-dive pages built (8 sub-pages)
- 5:45 PM: Design polish applied (editorial style, animations)
- 6:00 PM: llms.txt and AI-agent endpoints added
- 6:15 PM: This site deep-dive documentation written

From article to running site: approximately 3 hours.
