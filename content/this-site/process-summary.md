# nickcarter.ai — Process Summary

This site was designed, built, and deployed in a single session alongside drafting three chapters of a novel. The pivot happened mid-conversation — an article about AI career skills arrived, a self-assessment revealed the novel-drafting system was itself a portfolio piece, and the decision to build a professional site followed within minutes.

The session covered:

- **Read and analyzed Nate Jones's seven AI skills article** — mapped Nick's existing skills against the framework, identified 5 of 7 at depth, diagnosed the gap as packaging and visibility (not skill acquisition)
- **Created an action plan** with specific artifacts to build, publish, and present
- **Read Nate's "escape the application pile" article** — extracted the key insight: build an interface hiring managers can explore, not a resume they filter
- **Brainstormed the site architecture** — audience (cold vs. warm visitors), content structure (artifacts over assertions), two-section portfolio ("How I Build" / "How I Create"), deep-dive pages per artifact
- **Chose the approach** — Next.js static export on Cloudflare Pages, same stack as existing projects, no new infrastructure to learn
- **Wrote the design spec** — automated spec review caught 4 issues (static export vs. API routes contradiction, bootstrap problem with self-referential artifact, unspecified expand mechanism, non-measurable success criteria), all fixed before build
- **Wrote the implementation plan** — 8 tasks from scaffolding through deploy
- **Built the site using subagent-driven development** — fresh AI agent per task, with the orchestrator providing curated context to each
- **Designed the visual identity interactively** — three design directions presented in a browser companion (warm minimal, dark technical, editorial), user selected editorial. Then refined: bold editorial hero, accent bar cards, all six animation packages
- **Added AI-agent-readable endpoints** — llms.txt and llms-full.txt for forward-compatible agent consumption
- **Built the Agentic novel deep-dive** — 8 sub-pages with actual process documents as the first fully fleshed artifact

Total time from "let's brainstorm" to running site: approximately 3 hours. The site, the spec, the plan, and the process documentation all exist as artifacts demonstrating the seven skills.
