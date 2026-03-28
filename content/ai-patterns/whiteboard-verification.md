# Whiteboard Verification

## The Problem

You spend an hour explaining a system to an AI. The architecture, the data flow, the service boundaries, the edge cases. The AI says "Got it" and starts building. Two hours later you discover it misunderstood a fundamental assumption — the auth service doesn't call the API directly, it goes through a gateway. Now you're debugging architecture, not code.

The problem isn't that the AI is bad at listening. It's that complex systems are hard to describe in words, and there's no way to verify understanding before implementation starts. You can ask "do you understand?" and the AI will always say yes. That's not verification. That's politeness.

## The Pattern

Before the AI builds anything complex, it draws what it understands. Not a description in text — a visual diagram rendered in your browser. You look at the diagram the same way you'd look at a whiteboard sketch from a colleague. If something's wrong, you see it immediately. If it's right, you say "go" and the AI builds with confidence.

The key insight: misunderstandings in text are invisible. Misunderstandings in diagrams are obvious. A box with an arrow pointing the wrong direction jumps out at you. A paragraph that describes the same wrong relationship slides right past.

## Diagram Types

### Architecture Diagrams
System boundaries, services, and how they connect. The LoreHaven diagram is the canonical example — four layers (AI tools, MCP server, vault, cloud), each with clear responsibilities, connected by labeled arrows showing protocol and transport. The diagram caught the separation between "what the MCP server serves" and "what the cloud backs up" in a way that paragraphs of text couldn't communicate.

**Best for:** System design, service architecture, platform topology. Any time the question is "what talks to what, and how."

### Sequence Diagrams
Who calls whom, in what order. The OAuth flow in the LoreHaven client — browser opens, user authenticates, redirect to localhost, exchange code for tokens, store in keychain — is a sequence that's error-prone to describe in prose but obvious in a diagram.

**Best for:** Authentication flows, API call chains, multi-step processes where order matters. Any time the question is "what happens first, second, third."

### Entity Relationship Diagrams
How data models connect. A vault with Lore documents, permanent files, workspace projects, and temp sessions — each with different lifecycle rules, different sync behaviors, different access patterns. An ER diagram shows the relationships and cardinality at a glance.

**Best for:** Database design, data models, configuration structures. Any time the question is "how do these things relate to each other."

### State Machine Diagrams
Status transitions and what triggers them. An MCP server connection that can be disconnected, connecting, connected, errored, or reconnecting — with specific events that move between states. A state diagram makes impossible transitions visible (you can't go from disconnected to reconnecting without passing through connecting).

**Best for:** User flows, connection management, order processing, any workflow with distinct states. Any time the question is "what states can this be in, and what moves it between them."

### Component Diagrams
How a monorepo or package structure fits together. Four packages (app, mcp-server, shared, app-tauri) with dependency arrows showing which imports from which. The shared package sits in the middle because everything depends on it. A component diagram makes circular dependencies and missing abstractions visible.

**Best for:** Package architecture, module boundaries, dependency management. Any time the question is "how is the code organized, and what depends on what."

### Deployment Diagrams
Where code runs and how it's hosted. A static site on Cloudflare Pages, an API on a Linode server, a desktop client on the user's machine, an MCP server as a subprocess. Each with different deployment mechanisms, different update cycles, different failure modes.

**Best for:** Infrastructure planning, CI/CD design, hosting decisions. Any time the question is "where does this run, and how does it get there."

## How It Works

The mechanics are the same as Visual Design Review — the AI writes HTML to a watched directory, a local server pushes it to your browser. But the intent is different:

1. **You explain the system** in the terminal — architecture, constraints, relationships
2. **The AI draws what it understood** — renders a diagram in your browser
3. **You verify or correct** — "the auth service doesn't call the API directly, it goes through the gateway"
4. **The AI redraws** — updated diagram reflecting the correction
5. **You approve** — "that's right, build it"

The loop repeats until the diagram matches your mental model. Only then does implementation start. Every correction caught in a diagram is a bug that never gets written.

## Why This Is Different From Visual Design Review

Visual Design Review is about **making decisions** — "which of these 3 options do you prefer?" The AI proposes alternatives. You choose.

Whiteboard Verification is about **confirming understanding** — "here's what I think you mean. Am I right?" The AI echoes back. You verify.

Both use the same browser-based tool. The cognitive mode is completely different. One is divergent (explore options). The other is convergent (lock down understanding).

## Real Example: LoreHaven Architecture

The LoreHaven architecture diagram was built through this pattern. After hours of spec work across three repositories — client architecture, MCP server design, vault hierarchy, cloud API — the AI rendered the full system as a visual. Four layers, clear boundaries, labeled connections.

The diagram revealed the architecture instantly: AI tools at the top consume resources through MCP protocol. The server reads from the local vault. The client manages services (file watching, config merge, auth, sync). The cloud stores backups and distributes starter packs. The web handles onboarding.

If that understanding had been wrong — if the diagram showed the cloud serving resources directly to AI tools, for example — the error would have been obvious at a glance. In text, it might have been buried in a paragraph that sounded plausible.

## Lessons Learned

- **Draw before you build, not after.** The diagram is a verification step, not documentation. Its value is in catching misunderstandings before implementation. Drawing it after the code is written is just documentation — useful, but not the same pattern.
- **The AI's first diagram is usually 80% right.** That last 20% is where the value lives. The corrections you make — "no, that arrow goes through the gateway" or "those two services don't talk to each other directly" — are exactly the misunderstandings that would have become bugs.
- **Architecture diagrams work best. Sequence diagrams work second best.** State machines and ER diagrams are useful but harder for the AI to render compellingly in raw HTML. Architecture and sequence diagrams are natural fits for the box-and-arrow format.
- **Keep diagrams focused.** One diagram per concern. Don't try to show the entire system in one view. The LoreHaven diagram works because it shows one thing: how context flows from user to AI tool. A diagram that also showed the deployment topology and the data model would be unreadable.
- **The diagram becomes a shared artifact.** Once verified, the diagram can be embedded in the codebase, shown to stakeholders, or published as documentation. The LoreHaven architecture diagram went from a verification tool in a brainstorming session to a permanent component on the portfolio site. The verification step produced the documentation for free.
