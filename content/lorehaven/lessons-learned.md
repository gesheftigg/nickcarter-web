# Lore Haven — Lessons Learned

## Context Architecture

- **Omission beats inclusion.** The product was initially designed to hold everything. The breakthrough was realizing that AI tools read everything you give them with equal attention — so every piece of context dilutes every other piece. A focused 500-word Lore document outperforms a 5,000-word archive. The design principle became: what you leave out matters more than what you put in.
- **The Lore document is the product, not the app.** Users who never use the full Haven still get value from a well-structured Lore document they copy-paste into AI tools. The app is infrastructure. The Lore is the artifact. Building infrastructure before proving the Lore's value would have been the wrong sequence.
- **Language shapes adoption.** Calling the core document a "system prompt" would have lost the non-technical audience immediately. "Your Lore" created a mental model that users understood and cared about. The vocabulary decision was as important as any architectural decision.

## The Pivot

- **Kill your architecture when the constraint disappears.** The original Electron desktop app existed because Claude Desktop only supported local MCP servers. When remote MCP support launched, the desktop app became a liability — more engineering surface area, worse cross-device experience, higher user friction. The hardest part wasn't deciding to pivot; it was accepting that weeks of desktop architecture design were sunk cost.
- **Non-technical users don't install desktop apps from indie developers.** The Electron plan assumed users would download and trust a side-loaded app. In practice, the target audience (non-technical AI enthusiasts) barely installs apps from the App Store. A web app they can try in their browser without committing to anything is the only realistic entry point.
- **Cloud-first isn't a trade-off for this product.** Lore Haven isn't a privacy tool — the Lore is 300-600 words the user explicitly wants AI to see. Cross-device access is a feature, not a compromise. Moving to cloud storage simplified the architecture and improved the user experience simultaneously. When "simpler" and "better" point in the same direction, you're probably making the right call.

## Product Design

- **The wizard IS the product for non-technical users.** The vault structure, the storage layer, the API — these are invisible infrastructure. The wizard that asks "What does a typical week look like?" and produces a Lore document — that's the thing users talk about. For consumer AI products, the onboarding experience and the core value proposition are the same thing.
- **Starter packs solve the blank-page problem twice.** First, they solve category selection ("which boxes do I check?"). Second, they solve follow-up questions ("what do I say about my work?"). Without starter packs, the wizard is a better blank page. With them, it's a guided conversation. The difference in completion rates is the difference between a product that launches and one that doesn't.
- **Manual copy-paste is the right MVP delivery.** The temptation was to build MCP connectors or browser extensions before launching. But manual copy-paste proves the Lore has value with zero infrastructure dependencies. If users won't copy-paste a document they love, they won't install a connector either. The manual path is both the simplest test and the permanent escape hatch.
