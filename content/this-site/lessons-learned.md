# nickcarter.ai — Lessons Learned

## Design Spec

- **Automated spec review caught issues human review missed.** Four problems found by a reviewer subagent: static export vs. API routes contradiction, bootstrap problem with the self-referential artifact, unspecified UX mechanism, unmeasurable success criteria. All four would have surfaced during build as confusion or rework. The 60-second review saved hours.
- **"Room to grow" is not free.** The spec said "static MVP now, interactive features later, no migration required." The reviewer correctly identified this as false — static export and API routes are mutually exclusive in Next.js. Naming the migration cost upfront prevents the team from discovering it at the worst possible time.
- **Success criteria need two layers.** Qualitative goals ("a hiring manager should think X") guide direction. Concrete checks ("all external links valid, Lighthouse above 90, mobile renders on two breakpoints") gate launch. The spec had only the first kind until the review forced the second.

## Subagent-Driven Development

- **Curated context beats shared context.** Each subagent got only what its task needed — not the full conversation history. Task 2 (artifact data) got source file locations. Task 3-6 (components) got the existing file contents and Tailwind patterns. The design polish agent got design direction keywords and mockup descriptions. Irrelevant context makes agents drift.
- **Combining tightly coupled tasks into one agent worked better than splitting them.** Tasks 3-6 (shared components, hero, cards, portfolio page) were dispatched as one agent instead of four sequential ones. The agent could see how layout decisions in Task 3 affected component decisions in Tasks 4-6. Artificial boundaries between dependent work create integration bugs.
- **The orchestrator's job is context curation, not management.** The main session didn't write code. It gathered source material, made design decisions, wrote prompts, and reviewed output. The value was in deciding what each agent needed to know — not in doing the work itself.

## Design Process

- **Interactive visual comparison eliminated "describe what you want" problems.** When three design directions were shown side by side in a browser, the choice took seconds. Describing the same options in text would have taken paragraphs and still been ambiguous. Visual decisions should be made visually.
- **One signature element is enough.** The left-border accent bar emerged from the Bold Editorial hero choice and carried through to cards, details, and document pages. One consistent element creates a design system. Two would compete. Three would be noise.
- **"Make it look expensive" has a specific answer: purposeful animation.** The gap between a $500 site and a $10,000 site isn't layout or typography — it's motion. Scroll reveals, entrance sequences, hover micro-interactions, and accent bar draws are what make a static site feel alive. The animations took less than 30 minutes to implement but transformed the perceived quality.

## Architecture

- **Static export is the right default for portfolios.** No server, no cold starts, no edge function costs. Cloudflare Pages serves static HTML for free with global CDN. The tradeoff (no API routes) is irrelevant until the AI chat and fit assessment features are built — and by then, the migration path is documented.
- **llms.txt is trivially cheap and disproportionately valuable.** Three static text files (llms.txt, llms-full.txt, ai-agent.json) took 20 minutes to write. They make the site agent-readable — when a recruiter pastes the URL into Claude, the response is substantive instead of garbled. Building for agents is the same skill as building for humans: structure the content for the consumer's attention patterns.
- **The content directory pattern works for document-heavy sites.** Putting markdown files in `content/` and reading them at build time with `fs.readFileSync` is simpler than a CMS, simpler than MDX, and produces the same result for a site this size. The content is version-controlled, diffable, and editable in any text editor. Complexity would add nothing.

## Process

- **The pivot from novel drafting to site building was seamless because the context system worked.** CLAUDE.md, memory files, and the seven-skills self-assessment were all in context. When the Nate Jones article arrived, the AI already knew Nick's background, skills, accomplishments, and current projects. The brainstorming started from full context, not from zero.
- **Shipping the meta-artifact (the site about the process) alongside the primary artifacts (novel, MCP server) is the strongest possible portfolio move.** Most portfolios show what you built. This one shows what you built, how you built it, and the documentation you produced along the way — including the documentation of building the documentation. The recursion is the point.
- **The entire site was built during a conversation that started with novel drafting.** No context switch. No new session. The AI maintained continuity across the novel work, the career assessment, the brainstorming, the spec, the plan, the build, the design, and the documentation. That continuity — enabled by the context architecture — is itself a demonstration of the skills the site describes.
