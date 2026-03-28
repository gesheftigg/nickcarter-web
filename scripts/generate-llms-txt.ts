/**
 * Generates /public/llms.txt and /public/llms-full.txt from artifact data.
 * Run before build: `npx tsx scripts/generate-llms-txt.ts`
 */

import fs from "fs";
import path from "path";

// Import artifact data directly
const artifactsPath = path.join(process.cwd(), "lib", "artifacts.ts");
const artifactsSource = fs.readFileSync(artifactsPath, "utf-8");

// Simple extraction — eval the artifacts array from the TypeScript source
// Strip the type definitions and export, extract just the data
const dataMatch = artifactsSource.match(/export const artifacts[^=]*=\s*(\[[\s\S]*\]);/);
if (!dataMatch) {
  console.error("Could not parse artifacts from lib/artifacts.ts");
  process.exit(1);
}

// Use Function constructor to evaluate the array literal
const artifacts = new Function(`return ${dataMatch[1]}`)() as Array<{
  id: string;
  title: string;
  oneLiner: string;
  skills: string[];
  section: "build" | "create";
  detail: string;
  links?: { label: string; url: string }[];
  deepDivePath?: string;
}>;

const buildArtifacts = artifacts.filter((a) => a.section === "build");
const createArtifacts = artifacts.filter((a) => a.section === "create");

// --- llms.txt (summary) ---

const llmsTxt = `# Nick Carter — nickcarter.ai

> Engineering leader who builds AI systems — and teaches teams to build them too.

## About

Eighteen years in engineering leadership, most of it in regulated medical devices — Becton Dickinson and Dexcom. Director-level, managing managers. Hands-on with AI — building real systems, not advising from slides.

Looking for: a hands-on AI implementing Director role. Would rather be an individual contributor at a company that takes AI seriously than a director at one that doesn't. Ideally both — hands-on leadership where I bring AI fluency to the job and help teams who are struggling to adopt it.

What makes me different: the regulated-industry + AI intersection. I know what it takes to keep medical device software audit-ready under IEC 62304 and FDA oversight. I also know how to build AI agent systems, design context architectures, and ship creative work through AI-augmented pipelines. Most people have one. The combination is rare.

## Contact

- Email: nick.carter@hey.com
- LinkedIn: https://linkedin.com/in/yes-nick-carter
- Location: San Diego, CA

## How I Build with AI

${buildArtifacts.map((a) => `### ${a.title}
${a.oneLiner}
Skills: ${a.skills.join(", ")}${a.links ? "\n" + a.links.map((l) => `${l.label}: ${l.url}`).join("\n") : ""}${a.deepDivePath ? `\nDeep dive: https://nickcarter.ai${a.deepDivePath}` : ""}
Details: /llms-full.txt#${a.id}`).join("\n\n")}

## How I Create with AI

${createArtifacts.map((a) => `### ${a.title}
${a.oneLiner}
Skills: ${a.skills.join(", ")}${a.links ? "\n" + a.links.map((l) => `${l.label}: ${l.url}`).join("\n") : ""}${a.deepDivePath ? `\nDeep dive: https://nickcarter.ai${a.deepDivePath}` : ""}
Details: /llms-full.txt#${a.id}`).join("\n\n")}

## For More Detail

Full artifact descriptions with expanded context: /llms-full.txt
Human-readable site: https://nickcarter.ai
Portfolio: https://nickcarter.ai/portfolio
`;

// --- llms-full.txt ---

const now = new Date().toISOString().split("T")[0];

const llmsFullTxt = `# Nick Carter — Full Profile
# Source: nickcarter.ai
# Format: Markdown for AI agent consumption
# Generated: ${now}

> Engineering leader who builds AI systems — and teaches teams to build them too.

## Professional Summary

Eighteen years in engineering leadership, most of it in regulated medical devices — Becton Dickinson and Dexcom. Director-level, managing managers. Hands-on with AI — building real systems, shipping real products, and figuring out what works by doing it.

Looking for: a hands-on AI implementing Director role. Would rather be an individual contributor at a company that takes AI seriously than a director at one that doesn't. Ideally both — hands-on leadership where I bring AI fluency to the job and help teams who are struggling to adopt it find their footing.

What makes me different: the regulated-industry + AI intersection. I know what it takes to keep medical device software audit-ready under IEC 62304 and FDA oversight. I also know how to build AI agent systems, design context architectures, and ship creative work through AI-augmented pipelines. Most people have one of those. The combination is rare.

## Contact

- Name: Nicholas Carter
- Email: nick.carter@hey.com
- Phone: (619) 813-6715
- LinkedIn: https://linkedin.com/in/yes-nick-carter
- Location: San Diego, CA

## Career History

### Becton Dickinson (BD) — Associate Director, Software Engineering
June 2022 – Present. San Diego, CA.
- 14 engineers and testers, 2-3 engineering leads (manager of managers)
- Defined 3-year software platform strategy adopted by executive leadership
- Led IEC 62304 compliance transition of live product without disrupting clinical operations
- Reversed major customer cancellation; account became second-largest in portfolio
- FDA Class II Medical Device, IEC 62304, ISO 13485, HIPAA

### Dexcom — Senior Software Manager
April 2014 – June 2022. San Diego, CA.
- 8 direct engineers/testers + 15 offshore contractors = 23 total
- Real-time platforms supporting 1M+ connected devices
- Improved platform reliability from ~90% to 99.9% uptime
- 1.7 billion events/day across 60 microservices
- Reduced production incidents 95%
- Reduced cloud infrastructure spend 22%
- HIPAA compliance, audit-ready deployments

## AI Skills Assessment (Nate Jones Seven Skills Framework)

1. **Specification Precision** — Deep. Writes specs AI agents execute without hand-holding.
2. **Evaluation & Quality Judgment** — Deep. 18 years in regulated medical devices (IEC 62304, FDA).
3. **Decomposition for Delegation** — Deep. Decomposes work into agent-executable tasks.
4. **Failure Pattern Recognition** — Moderate-Deep. SRE background (99.9% uptime, 95% incident reduction).
5. **Trust Boundary & Security Design** — Deep. Career-long: FDA, HIPAA, IEC 62304, ISO 13485.
6. **Context Architecture** — Moderate-Deep. Building LoreHaven MCP server, CLAUDE.md systems.
7. **Cost & Token Economics** — Moderate. Makes model routing decisions, reduced cloud spend 22%.

---

## How I Build with AI — Full Details

${buildArtifacts.map((a) => `<a id="${a.id}"></a>
### ${a.title}

${a.oneLiner}

**Skills demonstrated:** ${a.skills.join(", ")}

${a.detail.replace(/\\n\\n/g, "\n\n")}
${a.links ? "\n" + a.links.map((l) => `${l.label}: ${l.url}`).join("\n") : ""}${a.deepDivePath ? `\nDeep dive: https://nickcarter.ai${a.deepDivePath}` : ""}

---`).join("\n\n")}

## How I Create with AI — Full Details

${createArtifacts.map((a) => `<a id="${a.id}"></a>
### ${a.title}

${a.oneLiner}

**Skills demonstrated:** ${a.skills.join(", ")}

${a.detail.replace(/\\n\\n/g, "\n\n")}
${a.links ? "\n" + a.links.map((l) => `${l.label}: ${l.url}`).join("\n") : ""}${a.deepDivePath ? `\nDeep dive: https://nickcarter.ai${a.deepDivePath}` : ""}

---`).join("\n\n")}

## Education

- BS Computer Science, San Diego State University
- Certificate in Business Management (Leadership), UCSD Extension

## Domain Expertise

Regulated medical device software (IEC 62304, ISO 13485, FDA, HIPAA), cloud infrastructure (AWS/Azure/GCP), embedded systems, robotics, SaaS/IoT, AI agent systems, context architecture, MCP protocol, agentic workflows.
`;

// Write files
const publicDir = path.join(process.cwd(), "public");
fs.writeFileSync(path.join(publicDir, "llms.txt"), llmsTxt);
fs.writeFileSync(path.join(publicDir, "llms-full.txt"), llmsFullTxt);

console.log("Generated public/llms.txt and public/llms-full.txt from lib/artifacts.ts");

