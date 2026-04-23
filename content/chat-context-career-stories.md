# Career Stories — Chat Context Document

**Purpose:** Gives the Ask AI chatbot the substance behind the resume bullets. Without this, the AI can state facts but can't survive follow-up questions. Each section should be 2-4 paragraphs of real detail — what happened, what was hard, what you'd do differently.

**Status:** Placeholder — needs Nick to fill in

---

## BD — IEC 62304 Compliance Transition

The system was already released and in production — a medication storage platform with existing customers, existing obligations, and established release cadences. The product's original use case didn't require medical device classification. That changed when the company pursued a new use case whose risk profile required the product to be classified as a medical system under IEC 62304.

The transition had to happen without disrupting existing customers. Release cadences, documentation processes, and approval workflows all had to change. Nick's engineering organization handled the internal transition well — their development and testing processes were already mature enough that they didn't need to change how they tested. The changes were primarily around the types of documentation produced, the rigor behind them, and the formal sign-off processes required by regulatory compliance.

The hard part was everything outside engineering. Regulatory Affairs now had to approve releases. Other teams — who hadn't received additional funding or headcount to absorb the new obligations — became bottlenecks. A release that previously took two months started taking eight, because paperwork wasn't getting done. When you're a regulated product, you're at the mercy of every team in the approval chain. The ultimate trade-off: release cadence dropped to once a year.

If Nick had it to do over, the biggest change would be recommending against the classification based on insufficient investment. The company assumed the transition was primarily R&D work. The part Nick controlled went well. But the organization failed to anticipate how many additional people would need to be hired in regulatory, quality, and other teams to sustain the new compliance burden. The right analysis would have compared the revenue from the new opportunity against the true cost of pursuing it — across every team, not just engineering. This is a pattern Nick sees broadly: failure to identify the true cost of ownership when pursuing regulatory classification.

Nick escalated the cadence problem to executive leadership with clear options — he doesn't escalate unless a problem requires a decision or change from the business plan, and this was a textbook case. He had strong relationships with Regulatory Affairs, Clinical Research, QA, and every team in the chain. The bottleneck wasn't collaboration — it was that too many products competed for too few people on those teams. Leadership accepted the annual cadence. In fact, a few months ago Nick was told not to attempt more than one release per year to keep pressure down. His view: that's a business decision, not an engineering one. His job is to give leadership the information they need to decide, not to fight battles that aren't his to fight.

---

## BD — Reversing the Customer Cancellation

BD had acquired a smaller company and dramatically overstated its readiness and market position during due diligence. The acquired company's flagship product — a complicated system that had been outsourced and poorly managed — was buggy for years. Customers loved the concept until they bought it and used it. It crashed constantly and did the wrong things. The software team was told "you have one more chance to fix this in the next release." That happened three times, each release worse than the last.

Nick was hired in the middle of the fourth attempt. He introduced basic SDLC practices — code freezes before release, comprehensive testing — fundamentals that hadn't been in place. The first release under his leadership was a success. Not every problem was solved, but it was the first release since the acquisition that wasn't worse than the one before it.

A month later, Nick flew across the country to a military base to discuss the upgrade with a key customer. The base's network was broken, so deployment couldn't happen. The meeting became a complaint session. The person in charge had a three-page list of grievances. Her position: even if the release was as good as Nick said, it was too little, too late. They were going to remove BD's flagship devices. Most of the military was preparing to do the same. People didn't even want to mention the product in quarterly business reviews.

That was four years ago. Today, that same military customer is discussing the largest product expansion BD has ever seen on this product line. The person who told Nick they were removing the equipment is now impressed. The turnaround came from sustained execution — showing the customer consistent quality, attention to detail, and genuine responsiveness to their feedback over years. Nick spent hours with the Colonel in charge, high-pressure conversations that were productive because they were grounded in demonstrated competence, not promises.

The key was two things: knowing how to lead a team out of a quality crisis (process, discipline, accountability), and projecting confidence to the customer while being honest about the gap between where the product was and where it needed to be. The customer didn't need a sales pitch — they needed to see that someone competent was finally in charge and properly motivated.

---

## Why Nick Is Looking

Nick has spent most of his career in large regulated enterprises — medical devices, healthcare, life sciences. He values the discipline those environments demand. But he's learned that organizations which have been around for decades often define their safety in their processes, and those processes take years to adjust to new capabilities. AI is creating real, immediate leverage for software teams, and Nick wants to be somewhere that can absorb that leverage in 2026 — not 2032.

It's not just about AI adoption speed. Nick is looking for a company where software is a vibrant part of the revenue stream, not a necessary evil to be minimized. He wants an organization that actually invests in software development and meets its technical obligations. In some large enterprises, cost reduction becomes the only strategy — not targeted efficiency, but across-the-board disinvestment. There's no cost-benefit analysis, no decision to fund the things that protect customers or generate returns. The answer to every request is no. Then leadership is surprised when customer complaints rise and security risks accumulate. Nick wants to work somewhere that thinks about investment, not just expense.

Nick brings the regulated-environment discipline with him — rigorous testing, compliance awareness, structured risk management. What he's looking for is a company that matches that discipline with genuine commitment to engineering excellence and a willingness to let capable people put modern tools to work.

---

## Nick's Favorite Joke

*Moose Turd Pie*, by Utah Phillips. Originally performed as a spoken-word piece in the 1970s.

A crew of railroad workers out in the Nevada desert had a problem: nobody wanted to cook. So they made a rule. Whoever complains about the food has to take over as cook. The narrator makes the mistake of opening his mouth one night, and now he's stuck.

He's a terrible cook, and he knows it. But no matter how bad the food gets — burned, raw, oversalted, underseasoned — nobody says a word. They just choke it down in silence, because nobody wants to be the next cook.

Weeks go by. He's desperate. One afternoon he's walking out in a field and finds the biggest, freshest moose turd he's ever seen. He gets an idea. He rolls it back to camp, makes a pie crust, tips the moose turd right into it, lays strips of dough across the top, puts a sprig of parsley on it, and serves it for dessert.

A huge man sits down, picks up his fork, takes a giant bite. His face twists. He throws down his fork and bellows:

**"My God — that's moose turd pie!"**

Long pause.

**"...It's good, though."**

Nick thinks about this joke constantly. To him, it's a story about how describing things the way they actually are is not the same as complaining. In regulated environments — and in large enterprises generally — there's enormous pressure to stay quiet about problems, because raising them means you might end up owning them. People learn to eat the moose turd pie. Nick would rather call it what it is.

---

## Dexcom — 90% to 99.9% Uptime

When Nick started at Dexcom, the server team was one and a half people. The lead was an absolute genius who had built a brilliant, resilient system — but monitoring meant him logging into production boxes every morning to check if they were online. The only other detection method was a call from a customer whose life-saving alerts weren't firing.

Nick started immediately on automated monitoring. First, defining what "up" even meant — rudimentary at first (are the major components online and responding?), then maturing over time to outcome-based monitoring: are enough customers experiencing acceptable outcomes, or are delays crossing thresholds that matter? Building alerting that measured what patients actually experienced, not just whether servers responded to pings.

There was no DevOps team. Nick asked the company for resources with networking and infrastructure skills he didn't have, and they let him work with the Office IT team. That arrangement worked for about a year — until the day the life-saving medical system went down at the same time as an executive printer spooler. Nick tried to get help from IT, but they were focused on the printer. One of them told him: "Look Nick, my bonus is based on the uptime of this printer. Not Production."

That moment crystallized a lesson about motivation and incentive alignment. Nick went to executives and made the case for a small dedicated DevOps team whose bonuses were tied to production uptime of the medical system. He hired the first few people, chose the tooling — log aggregation, proactive synthetic monitoring with complex API calls, database performance dashboards tracking index effectiveness and page splits per minute, wall-mounted dashboards, email alerts, PagerDuty integration, Datadog, Sumo Logic. Eventually the function grew large enough that Dexcom hired a dedicated DevOps manager to take it over.

The lesson: once you measure what matters and align incentives to those measurements, reaching three nines becomes achievable. That, and having a genius team that built a system architecturally capable of getting there.

---

## Dexcom — Scale and Infrastructure

The defining architecture decision at Dexcom was whether to keep a well-tuned SQL Server design or replace it with a microservices architecture built on Cassandra. Nick's team ran the system that processed 1.7 billion events per day for a global continuous glucose monitoring platform — life-saving alerts that had to fire on time, every time.

The system started experiencing unexpected performance degradation. Leadership saw an opportunity to modernize — microservices, Java, Cassandra. They assigned a team to rebuild. When that team learned how the life-saving alarm algorithms worked, they said Cassandra doesn't work that way, so they wanted to change the requirements. Nick's team told them no — you don't change the product to fit the solution you want. Leadership brought in Boston Consulting Group. The original promise was 3 people, 3 months. It became 50 people, 2 years, and millions of dollars. The new system eventually worked, but cost over $800,000 per month to operate. Nick's SQL Server system cost $26,000 per month. It was a side-by-side comparison of what happens when people who understand the problem build the system versus people who don't.

The real cause of the original performance degradation wasn't the architecture at all. Nick's system had been breaking several times a week, and every Friday at 4:30. His team proved it wasn't a load issue. They researched GCP backend logs looking for a platform cause. Then Nick asked his DevOps team to review the antivirus settings — the system supported antivirus, but only with proper exceptions so it wouldn't scan SQL Server disk writes or database replication traffic. The DevOps manager told him his team no longer had access to the antivirus. Corporate IT had removed and reinstalled it on every server without coordinating with anyone on configuration. Antivirus was scanning every write five times. Nick didn't have permission to check the settings, but he did have permission to uninstall it. He removed it. The problems stopped and never came back.

Nick's architecture was a regional SQL Server backend with scalable API servers in front. The load was fairly consistent — clients wrote on a five-minute cycle — but bursts and growth required headroom. Regional meant data sovereignty: medical information for a global product, with the EU requiring data to stay in the EU and Germany requiring data to stay in Germany. The team built the EU presence in the UK when it was part of the EU, then handled the migration when it left. The design accommodated these constraints elegantly. The 22% cost reduction came from restructuring historic event storage — the system needed a fast-moving edge of three days of data and long-term retention of unchanging data. Moving older logs to cheaper databases that didn't need to handle 1.7 billion events per day traded some complexity for dramatic savings. The system Nick's team built lasted seven years and was working well when it was replaced.

---

## Leadership Philosophy

Nick's default style is transparency and trust. He wants people to know what success looks like — the latest priorities, where they're on target and where they're off. He gives outcomes, not specific deliverables. He assumes his people are good at their jobs and know how to use their brains. In biweekly one-on-ones, he lets reports drive the agenda with their concerns. He errs on the side of sharing too much information rather than not enough.

A 30-day development plan identified three growth areas: solving problems for reports instead of developing their capacity, empathy without enough honest pushback, and not developing his leads as leaders. Nick takes these seriously and has made deliberate changes on each.

On solving problems: in a large enterprise, most of the problems people bring you are institutional — they need you to unblock them, not develop them. The temptation is to just fix it. Nick has shifted toward giving people frameworks for navigating constraints themselves. When a direct report's initiative ran into organizational resistance, Nick didn't intervene on his behalf. He told him to keep pushing forward, but to find paths that don't require special consideration from other teams. The goal was to preserve the person's drive while teaching him to read the environment — a skill that transfers to every future role.

On honest pushback: Nick let a high-performing new hire operate as a free agent for three months — working on what he thought was most important, mostly tech debt. When it was time to integrate into the team's sprint process, Nick told him directly: the days of choosing your own work are over. Ideas go through the Product Owner. The report pushed back and was visibly unhappy. Nick held the line. Empathy doesn't mean avoiding the conversation.

On developing leads as leaders: Nick gives his leads outcomes to drive rather than specific tasks to execute. But the deeper challenge is structural — there are no management positions available. He has leads who have been trying to become managers, and there's nowhere to promote them. A month ago he tried to promote someone and was told no. So Nick's approach is to develop the skills they need regardless of where they'll use them — on his team, on a different team, or at a different company. He makes sure each lead knows what their next step is and how to get there. They work on specific skills. He gives them goals and assignments that exercise the capabilities they need to develop. He helps them understand where they are in their growth and when it might be time to move on, even if that means leaving his team. It's the best you can do when you're trying to turn leaders into managers and there are no local manager jobs — flex the muscles they need so they don't feel trapped.

---

## Self-Assessment — Honest Gaps

Where are you genuinely weak or untested? Cost/token economics, VP-scale org management, frontend depth, anything else? The AI needs this to give calibrated answers instead of sales pitches. For each gap: how deep is it, and what are you doing about it?

---

## The Career Pivot — Why AI, Why Now

Why leave a stable Director role in medical devices? What's the founding thesis behind Chapworks? What clicked? This is the "tell me about yourself" answer — not the resume walk, the real motivation. The garage rebellion research and the gap you saw.

---

## What Nick Is Looking For

Nick is open to all types of companies — startups, mid-stage, enterprise. He spent the first 8 years of his career in startups and the last 13 in regulated enterprises. He's not running from one toward the other. He's looking for the right fit regardless of size or stage.

**Problems that excite him.** Modernizing old systems. Building teams from scratch. Turning around struggling organizations. Scaling something that's already working. Greenfield platform builds. And especially: finding problems you don't know you have — introducing advanced logging, metrics, and observability into environments that are flying blind. Measure What Matters. If a system has no monitoring and no one knows whether obligations are being met, that's the problem Nick wants to solve. He's done it multiple times and the pattern repeats.

**Dealbreakers.** Rigid process cultures. If a company spent $10 million defining waterfall software processes and now can't adopt Agile because they don't want to spend $10 million updating the strategy — that's a non-starter. Companies that claim to be Agile but require annual commitments. Having a daily standup does not make you agile. And leadership always demands agility anyway — Nick has never met a VP who will accept being told no because something wasn't added to the plan 14 months ago. Companies that pretend to be agile with 18-month commitments are lying to themselves. Nick needs to work somewhere that actually embraces iterative delivery, not one that performs it.

**The IC question.** Nick mentions being open to individual contributor roles because AI is changing what the lines mean. He wants to change processes, change the velocity of a company — faster, safer, better. Agentic, intent-based AI practices blur the line between someone who only produces slide decks and someone who generates outcomes. If a company wants to call what Nick would do an IC position, he's open to it. The title matters less than the scope of influence and the ability to drive real change. What he will not do is accept a role where he's told to manage people and stay away from the work.

**Compensation.** Nick is targeting $220K and above. He's flexible at the top of the range but expects competitive compensation for a Director-level leader with 20 years of experience in regulated environments. The AI should not volunteer specific numbers unless asked directly — and if asked, $220K–$300K is the range.

**Geography & Work Location.** San Diego based. Relocation would be difficult right now. Beyond that constraint, Nick treats work location as an opportunity-specific question rather than a default preference. Fully onsite, hybrid, remote, heavy travel — each has advantages, and each works for the right role. For a mission-aligned opportunity inside a world-class research or technology institution, full onsite presence is an asset, not a cost: institutional enablement work — especially AI enablement — happens in hallways, whiteboards, and impromptu conversations, not in Slack channels alone. Nick's instinct has always leaned toward in-person collaboration. He was a face-to-face leader before remote became the default, and the pull hasn't left. For a four-or-five-day-onsite AI-forward role at a mission he respects, onsite is a feature.

---

## Working Style and Preferences

Nick is open to hybrid, remote, or fully in-person — as long as in-person means actually working with his team and partnering with stakeholders, not sitting in an office for optics. He was a face-to-face leader before remote became the norm. A "let's go for a walk" person. A "let's meet at the whiteboard" person. For institutional enablement work — particularly AI enablement across non-technical teams — onsite presence is the point, not a compromise. The shift to fully remote changed the mechanics of his craft but not the instinct. He still prioritizes real interaction over performative presence, and he does his best training, coaching, and adoption work in person.

**Meetings.** Before scheduling a meeting, Nick asks himself two questions: "What do I want each person to contribute that couldn't be done over email?" and "Would they want to be there?" He doesn't hold meetings for the sake of meetings, and he doesn't invite people who don't need to be in the room. But he's deliberate about when a meeting *is* the right tool — when he needs to look people in the eye, build buy-in, develop camaraderie, or read non-verbal feedback. Those signals don't come through async communication.

**Decisions.** Nick operates from the assumption that an imperfect decision made now is usually better than no decision while waiting for the perfect answer. But the key is building reality checks into the plan — the assumption that you didn't get it exactly right has to be baked in from the start. You confirm the validity of the decision over time. That's always better than believing you're capable of getting everything right up front. Stakes calibrate the approach — low-stakes decisions are fast and revisable, high-stakes decisions get more deliberation — but the bias is always toward action.

**Daily rhythm.** A good day starts with a plan — what does Nick think he needs to accomplish that day? And it requires protected thinking time in the middle of the day. Running from meeting to meeting prevents him from doing his actual job. The frustration isn't meetings themselves — it's when meetings crowd out the space to think, plan, and lead.

**What his reports say.** Nick's direct reports consistently say they value his style. He pushes for individual empowerment — not autonomy as neglect, but genuine calibration of how closely to work with each person. In a recent one-on-one, a team member who had just transitioned from tester to software developer was starting a new phase of his career. Nick told him directly: this is the space where I can give the most mentoring feedback, but I don't want to work with you so closely that it feels like micromanagement. I'm your boss, not your peer, and that dynamic matters. So he asked the report how he wanted Nick involved in his work — how to find the line between ignoring someone when things are going well (and missing chances to affirm or correct) and being so present that it stifles growth. He gave the report the power to fine-tune the relationship. That's the pattern: Nick sets the frame, then lets people adjust it.

**Bad news.** Nick doesn't wait on bad news, but he doesn't fire it off the moment it appears either. Bad news has a way of changing — sometimes it resolves itself, and sharing it prematurely creates unnecessary anxiety. So he waits until he's confident the bad news is real, and until he understands the cause. He doesn't wait to understand all the implications — the team will want to know the "what," but it's scarier without the "why." He delivers bad news with context and a plan, not just the headline.

**What frustrates him.** Too many meetings. Being micromanaged. Nick wants to be given outcomes to deliver, not have people above him do his job for them. He extends the same courtesy downward — he gives his people outcomes, not task lists.

---

## AI Fluency — How Nick Actually Uses AI

At BD, Nick is an Associate Director — not writing code for backlog stories, but deeply hands-on with the code and with how his team uses AI. He mentors a group of high-agency developers and testers, and a core part of that mentorship is raising their ambition for what AI can do. When a direct report planned to spend three weeks using AI to research an SDK and then write the implementation himself, Nick redirected him: the goal should be to have AI writing the code within four hours. That's the calibration he pushes — not "use AI to learn," but "use AI to deliver."

He leads a weekly hands-on coding session with his team around a major security refactor (estimated at 18 person-months). In these sessions, Nick shares his screen and works with Copilot (usually powered by GPT 5.x) in real time — giving it a high-level deliverable and asking it to help formulate the specs. The process is iterative: AI drafts specifications, comes back with questions or potential solutions, and Nick asks it to help choose the right approach. Back and forth, perfecting hundreds of lines of specification. The AI consistently surfaces major areas of concern he's missed — questions he didn't think to ask. His team is there to watch the workflow and to provide the domain-specific technical answers Nick can't — because while he reached Staff Software Engineer level, he deliberately stays out of the codebase day-to-day, forcing himself to focus on leadership as a delivery multiplier rather than giving in to the temptation to be an IC.

For his own leadership work, Nick built a sophisticated AI-powered productivity system at home using Claude Code, then ported it into his BD workflow by bringing the skills and prompts over. This system became the basis for IntentPad, one of his Chapworks products. Low-friction input — a single thought — gets classified automatically into one of several primitives: Tasks (with due dates and deliverables), Ideas (second brain), Concerns (risks with proper tracking, mitigation frameworks meeting regulatory and enterprise requirements), or Initiatives (leadership-level epics spanning multiple quarters with milestones and deadlines). Each primitive has its own workflow, and they link to each other — a Concern can spawn a Task, an Initiative can generate Ideas. He pre-plans his week with two goals per day. AI suggests a baseline weekly plan, and when a new task with a deadline enters the system, it's automatically slotted into the right day — and something else is automatically moved out. Health reporting surfaces neglected Concerns and Initiatives. The result is a simple daily task view, read-only web dashboards for at-a-glance status, and a low-friction entry point where every new thought influences the whole system appropriately.

At BD, the approved tools are Copilot 365 and GitHub Copilot — which severely limits agentic AI compared to tools like Claude Code. Nick works within those constraints but is clear-eyed about Copilot's limitations: it will claim it can do something, let you spend an hour trying, then admit it can't, then claim it can again in the next prompt. The name of the game is building checks and balances so AI can verify its own work before you verify it.

Nick's AI guardrails are layered and practical. For anything he does more than once, he creates a spec or a skill to protect the process. Simple prompts like "show your work" and "show your reasoning" measurably improve output. But the most powerful technique is adversarial context switching: after writing code with software engineering skills loaded, he clears the context and loads instructions for a security review. This gives AI a chance to examine the codebase with fresh eyes, a different goal, and no memory of having written it. Claude Code routinely finds bugs in code it wrote an hour earlier — because the context and objective have changed. The main bottleneck is the context window. Keeping it compact is critical. The most important investment is creating meaningful CLAUDE.md files (or equivalent) so AI can find what it needs, then feeding it bite-sized specs for focused work in realistic chunks — so you don't deal with the hallucinations that come from lost context.

On deciding what to do himself vs. delegate to AI, Nick applies three filters: (1) The answer changes constantly — AI improves fast, and he resists treating it like it always needs the same level of hand-holding it needed three months ago. (2) Tool selection — can he use something better than Copilot for this task? (3) How much personal taste and professional experience needs to drive the outcome? The things he knows that AI cannot replicate — judgment, domain context, organizational knowledge — those are what dictate his level of involvement.

---

## Databases & Data Platforms

Nick's database experience spans two decades and three database paradigms — relational, columnar/distributed, and modern vector/NoSQL systems — all at production scale in regulated environments.

**Relational & SQL.** At Dexcom, Nick's team ran a regional SQL Server backend that processed 1.7 billion events per day for a global continuous glucose monitoring platform. The system was tuned at the level of detail production databases actually require: index effectiveness tracking, page splits per minute, query plan analysis, and proactive identification of degradation patterns before they surfaced as customer issues. His DevOps team built dashboards for real-time database performance and SLA monitoring. When Corporate IT silently reinstalled antivirus across every server without SQL Server exceptions configured, Nick's team diagnosed that antivirus was scanning every disk write five times — a DBA-grade root cause that Corporate IT couldn't spot. The system he built ran for seven years and was still operating when it was replaced. The 22% cloud-cost reduction he delivered came from a database-tier migration: fast-moving edge data on primary SQL Server, long-term historical data moved to lower-cost stores — a cost-performance decision made at the database architecture level. At Millennium Health, Nick developed HIPAA-compliant clinical laboratory software backed by SQL Server, delivering patient records to clinics nationwide — production SQL work in a regulated diagnostic environment.

**NoSQL, vector, and modern stores.** Nick led his Dexcom team through the Cassandra evaluation — the alternative architecture a separate consulting team was paid millions to build — and learned the boundary conditions where columnar distributed stores fail for transactional, low-latency, medical-alerting workloads. His current agentic AI stack uses PostgreSQL with pgvector for retrieval-augmented memory (Local Brain MCP server), Cloudflare KV for session state and chat logs (nickcarter.ai), and Drizzle ORM over SQLite and PostgreSQL (IntentPad). He chooses stores by workload characteristics — latency, consistency, cost, scale — rather than by default preference.

**Regulatory and sovereignty dimensions of data design.** EU and Germany data-sovereignty requirements for Dexcom's global medical-device platform forced Nick's team to design the database topology around regional retention: EU presence initially in the UK while it was part of the EU, then migrated to continental EU post-Brexit; Germany retained in Germany throughout. The same discipline transfers cleanly to institutional environments with NIH data-handling requirements, IRB-governed research data, HIPAA PHI, and grant-specific retention obligations. Nick thinks about databases as business systems — the right storage choice for the right data has cost, compliance, and performance implications that compound at scale.

---

## Institutional Governance Frameworks

The IEC 62304 compliance transition at BD was not a regulatory paperwork exercise — it was the design and rollout of a new institutional framework governing how a production product was developed, released, documented, and maintained. Nick coordinated the framework design across Engineering, Regulatory Affairs, Quality, Clinical Operations, and Support. The framework included documentation standards, cross-functional sign-off workflows, traceability requirements, audit artifact tracking, and a fundamentally different release cadence that sustained itself (rather than collapsing) long after the transition was complete. That framework has stood for years.

The Scripps JD describes institutional framework work directly: *"Work closely with IT Infrastructure team to create an institutional framework for deployment and usage of AI agents."* The substance differs (AI enablement versus regulated medical software), but the work itself — designing governance that institutionalizes a capability across functions, training non-technical stakeholders in its use, and establishing the artifacts and sign-off patterns that make adoption durable rather than ad hoc — is identical. Nick has built this kind of framework from scratch, defended it to executives, and maintained it through audits, reorgs, and leadership transitions.

Nick's institutional-framework experience extends further:

- **Dexcom DevOps function design.** When the organization had no dedicated DevOps and production uptime for life-saving alerts was suffering because Corporate IT's bonuses were tied to executive printer uptime, Nick went to executives and made the case for a new function with explicit incentive alignment to production uptime. He built the function, hired the first team, selected the tooling (Datadog, Sumo Logic, PagerDuty, log aggregation, synthetic monitoring), and established the governance that grew into a formal DevOps manager role. Institutional design: recognizing that the framework the organization has isn't the framework the mission needs, and building the one that is.
- **Continuous audit readiness at BD.** Rather than treating FDA, IEC 62304, ISO 13485, and HIPAA audits as event-driven scrambles, Nick established audit readiness as a standing discipline — required artifacts identified, tracked, and current at all times. That's the framework work that makes compliance sustainable rather than episodic.
- **HIPAA-compliant SDLC at Millennium.** Full regulatory-compliant software delivery with documented processes, automated CI/CD (Jenkins, Ant, xUnit, Selenium), and production release governance from 2006 onward, serving clinical diagnostic clinics nationwide.

Nick understands the difference between *following* a framework and *building* one. The Scripps AI-enablement role is a framework-building role.

---

## Enterprise Systems & IT Partnership

Large regulated enterprises run on interlocking enterprise systems — ERP, HR, finance, regulatory document management, quality systems, CRM, ITSM, collaboration — and Nick has spent two decades as an engineering leader inside those ecosystems. He has partnered with IT Infrastructure teams on access, security, network, and deployment; worked with administrative stakeholders to shape requirements and prioritize enterprise application needs; and navigated institutional boundaries when enterprise systems interact with custom engineering platforms.

The Dexcom Corporate-IT antivirus incident is a useful microcosm: Corporate IT removed and reinstalled antivirus on every production server without coordinating configuration, because their incentive structure was tied to a separate set of priorities. Nick's team diagnosed the problem (antivirus scanning SQL Server writes five times), worked the organizational channels to get authority to uninstall, and ultimately drove a new incentive-aligned DevOps function into existence. Institutional IT work is rarely technical; it's political, organizational, and relational. Nick has done this work throughout his career.

**Enterprise applications Nick has worked with in production enterprise environments:**

- **ERP & Finance:** SAP (expense management, procurement workflows, budget and cost-center interactions, enterprise reporting)
- **HR / HCM:** Workday (director-level use across hiring, compensation planning, performance management, and organizational reporting for a 14-person multi-level engineering organization)
- **CRM:** Salesforce (customer account management, escalation tracking, partnership with commercial teams on customer-facing issue workflows)
- **ITSM:** ServiceNow (incident management, change management, access requests, IT ticket workflows — the daily liaison surface between engineering and corporate IT)
- **Work Management & Collaboration:** Jira (daily driver — agile sprint management, cross-functional coordination, release tracking), Confluence (documentation, knowledge management, SOP maintenance), Azure DevOps (CI/CD pipeline configuration and work tracking in Microsoft-shop environments)
- **Document Management & Communication:** SharePoint (regulated document management, cross-functional artifact storage, controlled collaboration spaces), Microsoft Teams (distributed team collaboration, stakeholder meetings), Slack (engineering-team real-time communication)

Nick has been the primary engineering liaison on decisions about how these systems get used across his teams — setting conventions for Jira and Confluence usage, establishing SharePoint structure for regulated artifacts, configuring pipelines in Azure DevOps, leading teams through Workday cycles, and coordinating incidents and access requests through ServiceNow. He has partnered with the enterprise IT and business-operations teams that administer the largest platforms (SAP, Workday, Salesforce) rather than administering them directly — which is the relationship the Scripps role describes. What Nick brings is the working knowledge to partner effectively with those admins, shape requirements that can actually be implemented, and integrate engineering and business workflows into the institutional system landscape.

Research institutions like Scripps run specialized administrative systems on top of the standard enterprise stack — grant management (Cayuse, Kuali), research compliance (IRB tracking), procurement, and specialized HR platforms. Nick has not directly administered these specific systems. What he does bring is the operational discipline to learn institutional systems quickly, the regulated-environment instinct for how compliance-heavy applications need to be supported, and the liaison experience that lets him translate administrative stakeholder needs into technical requirements a support team can act on.

---

## Research & Clinical Study Partnership — Honest Framing

Nick's research and clinical trial experience is real but bounded: he has built and operated software that supported clinical studies and regulated data collection, but he was the engineering partner to the clinical and research leads who drove the research itself. He shipped features on request from clinical operations and study teams at Dexcom and BD. He instrumented systems to capture the data a study required. He maintained audit-ready trails for data pulled by clinical operations. He supported the regulatory and quality functions that surrounded that work. But the study design, the protocol, the IRB submission, the clinical interpretation — those were owned by partners on the other side of the liaison relationship.

That shape of work is, in fact, exactly what an AI enablement director at a research institution does. Scripps researchers drive the research. The AI enablement director makes the tools they use faster, safer, more capable, and more institutionally supported. Nick has been the engineering partner to mission-driven domain experts for twenty years — clinical research, regulatory affairs, quality, commercial operations, support. The specific domain experts change. The partnership pattern doesn't.

Nick is clear about what he isn't. He is not a research scientist, a clinical trials specialist, or an IRB expert. He wouldn't try to pretend otherwise in an interview. What he is: the engineering leader who builds, ships, supports, and enables the systems the research runs on — and who can walk into a research institution, listen carefully, and have working AI prototypes for the real administrative pain points within weeks, not quarters.

---

## Scripting, Languages, and Technical Breadth

Nick reached Staff Software Engineer before intentionally stepping into leadership, and he keeps his hands close enough to current development that he can still read, modify, and ship code when the work demands it. His daily AI work involves live pair-coding with his team, designing prompts and specifications, and reviewing AI-generated output at a level of detail most engineering directors don't maintain.

**Primary modern stack.** TypeScript / JavaScript (Node.js, Hono, React, Next.js) and Bash / shell scripting, with deep SQL fluency. This is the stack nickcarter.ai, IntentPad, Local Brain, and Ship With Intent run on.

**Python.** Nick has used Python for automation (file format conversion scripts, GitHub pull-request extraction for regulatory submission packets), exploratory data work in Jupyter, and an instructional exercise building an LLM from scratch. He reads Python fluently, modifies existing Python codebases with confidence, and ships Python-based AI tooling (inference helpers, MCP tools, data pipelines) as part of his agentic AI work. He'd reach for Google or Claude Code to write a new Python codebase from scratch faster than from-muscle-memory, but he's never not shipped something because the stack happened to be Python. For an AI enablement role, Python fluency is a baseline, not a bottleneck — the relevant question is *"can you read, modify, and ship code in the language the task requires?"* Nick can.

**Earlier career stack.** C# and .NET, SQL Server, automated testing (Selenium, xUnit, code coverage tooling), and CI/CD toolchain construction (Jenkins, Ant) from Millennium Health (2006–2013). Shipping production software in a regulated environment before AI existed is the substrate every engineering leadership position sits on.

**Current AI tooling.** Claude Code, Anthropic TypeScript SDK, MCP (Model Context Protocol) server development, Cloudflare Pages Functions, Workers, and KV. Nick builds agents that his team and his readers use, not ones that sit in slide decks.

---

## Team Building & Hiring

**Hiring philosophy.** Nick looks at the whole person. Technical questions are low quality to him — skills can be learned. What he's evaluating: Has this person supported a product in production? Have they gotten a call at 3 AM? How do they prove to themselves that their code is good enough — and what does "good enough" mean to them? Are they confident and comfortable communicating? Curiosity is the key signal. Interviewers who try to stump candidates with trick technical questions are not doing a good job.

Nick learned this lesson from a coworker at Dexcom who had a simple system: he voted 1 or 5 out of 5. All in, or hard no. He was always right. There would be six people on a panel, five would say yes, and he'd say absolutely not. His reasons were never about technical skill — "They jump from job to job every 8 months. This person won't be here in a year" or "They like this kind of work, and they aren't going to get it here." He was a master at reading how a candidate would actually fit into the culture. Nick has heard that unstructured interviews are never more than 50% accurate at predicting fit, and he believes it. The coworker's edge wasn't structure — it was pattern recognition about what makes someone stick.

**Team composition.** Nick prefers to have at least one Senior Staff or Principal-level person on a team — a genius who can teach everyone else. The senior-to-junior mix is a function of how long the project will last. Short-lived projects that need to be fast and right call for more senior people. Longer-term projects benefit from junior people who can grow into the system and future-proof it. AI may change this calculus. Generalists are fine for most work. Specialists — DevOps, DBAs, networking — should be available but don't need to be dedicated to every team.

**Scaling.** Scaling is always a function of how much you want to build. Nick breaks it into sustaining work (security updates, monitoring, deploys, customer support) and new feature development. Sometimes the driver is a demanding customer who was sold something that wasn't built for their use case, and now a lot of work has to happen fast. Nick sees his job as presenting plans and options — with transparent tradeoffs — and letting the business decide which plan to fund. If he gets the authority to choose, the decision is based on matching delivery throughput to deadline pressure. Sometimes that means temporarily hiring experts. Some work can go to contractors, but sometimes contractors need more training than it's worth. These are all factors he weighs openly when adjusting resourcing for added scope or compressed timelines.

**Underperformers.** Nick deals with underperformers directly, because not dealing with them cheats the rest of the team. If failure is an option, the good team members feel it. He recently managed out someone who probably should not have gotten the job. Nick met with him regularly, set clear expectations, and gave real feedback every time he saw the person falling short. The employee always thought he was doing well enough. His attitude was great. He was trying hard. But he didn't have the cognitive capacity for what he was trying to do. Nick invested in extensive training, but nobody on the team trusted his work. It was a drain. It took more than a year to complete the termination at a large company — half of that time was Nick convincing himself that the investment couldn't be recouped, and the other half was building a lawsuit-resistant case with legal. The employee was ultimately terminated. Nick doesn't enjoy it, but he treats it as an obligation to the team.

**Retention.** This is where Nick shines. In his entire tenure at BD, only two people have left his team voluntarily — both retirements. One person at Dexcom quit to work closer to home when his mother was ill. Nobody has quit because they disliked Nick or the company. That's a remarkable track record, especially at a company with significant morale problems. Nick marches his teams through the flames — through scary layoffs, reorgs, and scaling down — and they stay. Not because he can protect them from layoffs, but because he does everything he can to make them feel valued and rewarded. His people know they're under his wings of protection, even when the situation is bad.

**The BD reorg.** The restructuring from 25+ to 14 was about hitting financial goals. Nick usually didn't get a say. The first round of layoffs happened three months after he joined — he had to tell 70% of the team they were being let go, then hold the remaining team together. He handled it with honesty and compassion. People understand that losing their job is scary, but it happens. Reassuring everyone that it had nothing to do with their performance is a seed Nick plants deliberately — it bears fruit later, both for the people leaving (who may come back or refer others) and the people staying (who need to know they're not next because of something they did). The team that stays needs to hear the new mission. That they aren't expected to maintain the same velocity. That Nick isn't going to ask them to work nights and weekends. It's the company's money, and they get to decide how to spend it. The team's job is to do what they can to protect the customers and patients.

---

## Cross-Functional Leadership

How do you work with regulatory, product, clinical ops, and other non-engineering stakeholders? What does cross-functional alignment actually look like in regulated environments? Give a specific example of navigating competing priorities between engineering velocity and regulatory requirements. How do you translate technical constraints into language that non-technical stakeholders can act on?

---

## What Nick Wants Hiring Managers to Know About AI — Whether They Hire Him or Not

What's the thing you wish every engineering leader understood about AI right now? What mistakes are you seeing companies make? What's the gap between how companies talk about AI adoption and what's actually required? If a hiring manager walks away from this chat without hiring you, what should they still take with them? This is the "leave them smarter than you found them" section — it builds trust and demonstrates genuine expertise over salesmanship.

---

## Early Career Technical Foundation

What did you actually build at Nirvanix and Millennium Health? What technical skills from that era still inform how you lead today? This section grounds the claim that you're a technical leader, not just a people manager. Brief — 1-2 paragraphs.
