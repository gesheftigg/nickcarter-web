# Intentional Obsolescence

## The Problem

Most people learn an AI workflow and then defend it. They find a prompting technique that works, a tool configuration that produces good results, a system prompt that handles their use case — and they stop experimenting. Six months later they're still using a workflow optimized for a model that's two generations old, wondering why everyone else seems to be getting better results.

The AI landscape doesn't have stable best practices. It has temporary best practices that get replaced every few months. The prompting techniques that worked with GPT-3.5 are unnecessary with GPT-4. The system prompts that were essential for Claude 2 are redundant with Claude 4. The tool integrations that required custom code last year are built into the platform this year. What was hard becomes easy. What was impossible becomes trivial. **What was best practice becomes overhead.**

The people who stay effective aren't the ones with the best current workflow. They're the ones who rebuild their workflow regularly and without attachment.

## The Pattern

Build every AI workflow, spec, and skill with the explicit assumption that it will be replaced in 90 days. Not because it's bad — because something better will exist. Design for obsolescence the way software engineers design for deprecation: make the current version work well, document why it works, and make it easy to replace.

This isn't about being sloppy or temporary. The current version should be as good as you can make it. The discipline is in holding two truths simultaneously: this is the best approach I know right now, AND it won't be the best approach I know in three months.

## What This Looks Like in Practice

### Skills That Expect to Be Replaced

The Superpowers plugin for Claude Code uses a Skills 2.0 architecture that bakes this assumption in. Each skill is a markdown file with a specific structure — a name, a description, and instructions. The skill works today. But the architecture assumes:

- **The skill that works today may not be the best tomorrow.** New model capabilities, new tool integrations, new interaction patterns — any of these could make a skill's approach obsolete. The skill is versioned and replaceable by design.
- **The description is as important as the instructions.** The description tells the system when to trigger the skill. If the description is wrong, the skill fires at the wrong time or doesn't fire when it should. As models get better at intent detection, the triggering logic changes — which means the description needs to evolve even if the instructions don't.
- **The skill is a hypothesis, not a solution.** It encodes a belief about the best way to handle a specific task. That belief should be tested, measured, and updated. A skill that hasn't been revised in six months is probably underperforming.

### Specs That Explain Their Own Reasoning

Every specification on this site includes not just what was decided, but why. The LoreHaven MCP server uses stdio transport instead of HTTP — not because stdio is universally better, but because it eliminated an entire category of networking problems for a desktop app that runs locally. If the deployment model changes (say, a cloud-hosted MCP server), the reasoning breaks and the decision should be revisited.

The "why" is the expiration date. When the reasoning no longer holds, the decision is ready to be replaced. Without the "why," you're defending a choice you can't explain — which is how technical debt accumulates.

### Process Over Artifacts

The reason every spec and skill file on this site is shared publicly is simple: they'll all be better in 90 days. Not incrementally better — architecturally better. The model capabilities that constrain today's designs will be relaxed. The workarounds that today's skills require will be unnecessary. The prompting patterns that today's specs depend on will be superseded.

Sharing the artifacts isn't giving away competitive advantage. The artifacts are snapshots of a moment. The advantage is the process that produces them — the ability to assess a new model's capabilities, identify where current workflows underperform, redesign the spec, rebuild the skill, and deploy the update. That process is the skill. The files are just evidence that the process works.

## How to Practice This

### Ask AI if there's a better way — regularly

Not when something breaks. On a schedule. Every few weeks, take a working workflow and ask: "Given what you can do now, is there a better way to handle this?" The answer is often yes, and the improvement is often something you wouldn't have thought to ask about.

The drafting skill for the Agentic novel was built in March 2026. By the time the novel is finished, the model that executes it will likely have better context handling, better long-form coherence, and better instruction following. The skill should be revised to take advantage of those improvements — not left frozen because "it works."

### Document the constraints, not just the solutions

When you write a spec, write down what's hard. Not as complaints — as markers. "Context window limits forced us to load only 2-3 previous chapters" is a constraint that might evaporate with the next model generation. "We silo plotlines because cross-loading causes plot bleed" is a constraint that might resolve when models get better at maintaining separation. Each constraint is a potential improvement waiting for the technology to catch up.

### Version your workflows explicitly

Don't quietly update a skill or spec. Version it. Keep the old version. Note what changed and why. The version history IS the learning — it shows how your understanding evolved as the tools evolved. A year from now, the progression from v1 to v5 of a skill tells a story about what mattered and what didn't.

### Measure, don't assume

A skill that "feels better" isn't necessarily better. The drafting skill reports word count and beat coverage after each chapter. Those metrics make it possible to compare v1 output against v2 output objectively. Without measurement, you're just replacing one intuition with another and calling it improvement.

## Why This Matters for Hiring

The AI skills market is moving so fast that specific technical knowledge has a half-life of months. The person who learned RAG pipeline design in 2024 is working with patterns that are already being superseded. The person who learned prompt engineering with GPT-3.5 is carrying habits that actively hurt performance on modern models.

What doesn't expire: the ability to learn a new model's capabilities, identify where your current workflow is suboptimal, redesign the approach, and ship the update. That's the meta-skill underneath all seven of Nate Jones's skills. Specification precision, evaluation, decomposition — the specific techniques for each of these evolve. The ability to evolve your technique is the durable asset.

This is why the artifacts on this site are dated, versioned, and shared without reservation. They're not the product. The process that produced them is the product. And the process gets better every 90 days.

## The Uncomfortable Truth

If you're proud of your AI workflow and haven't changed it in six months, it's probably underperforming. The models improved. The tools improved. The ecosystem improved. Your workflow didn't.

The fix isn't to feel bad about it. The fix is to build the habit of revisiting. Schedule it. Put "review AI workflows" on the calendar the way you'd put "review quarterly goals." Ask the AI: what can you do now that you couldn't do when I wrote this spec? The answer will surprise you. And the revised workflow will be better than the one you were proud of.

Until it gets replaced in another 90 days.
