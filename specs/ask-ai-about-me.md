# Ask AI About Me — Feature Spec

**Created:** 2026-04-01
**Status:** Draft
**Site:** nickcarter.ai
**Route:** `/chat`

---

## What It Is

A chat interface on nickcarter.ai where a hiring manager can ask questions about Nick and get substantive, honest answers grounded in real experience. Not a chatbot. Not a FAQ. A conversation with an AI that knows Nick's work the way a good colleague knows it — deeply enough to handle follow-ups, edge cases, and honest gap acknowledgment.

## Why It Matters

Nate Jones's key insight: "The quality of that interaction is almost impossible to fake at scale. You can write a resume that claims deep expertise in distributed systems. You cannot train an AI to conduct a convincing multi-turn conversation about distributed systems architecture if you don't actually understand it."

The chat feature is proof through interaction. A hiring manager who asks "tell me about your experience with IEC 62304" gets a specific, detailed answer about the BD compliance transition. They ask a follow-up about how you handled design controls on a live system, and the AI handles it with depth. They probe an edge case about SOUP (Software of Unknown Provenance) and the AI either answers substantively or honestly says "Nick hasn't published detailed work on SOUP classification specifically, but the IEC 62304 transition would have involved it."

The depth emerges from the underlying substance or it doesn't emerge at all.

## Technical Architecture

### The Migration

The site currently uses `output: "export"` (static HTML). The chat feature requires server-side functionality for the Claude API call. Two options:

**Option A: Cloudflare Pages Functions**
- Keep static export for all existing pages
- Add a Cloudflare Pages Function at `functions/api/chat.ts`
- The function handles the Claude API call server-side
- No changes to existing pages or build process
- API key stored as a Cloudflare Pages environment variable (never in client code)
- **Pros:** Minimal migration. Existing pages stay static. Only the API endpoint runs server-side.
- **Cons:** Cloudflare Functions have a 10ms CPU time limit on the free plan (but streaming responses work around this). Need to learn the Cloudflare Functions API.

**Option B: Migrate to @cloudflare/next-on-pages**
- Full Next.js server rendering on Cloudflare
- API routes live at `app/api/chat/route.ts`
- Existing pages can remain static (ISR/SSG) or become server-rendered
- **Pros:** Standard Next.js patterns. API routes just work.
- **Cons:** More complex deployment. Build config changes. Potential for breaking existing pages.

**Recommendation: Option A.** The chat endpoint is the only server-side feature. Cloudflare Pages Functions let us add it without touching the working static site. If more server features come later (fit assessment, analytics), migrate to Option B at that point.

### Components

```
Client (React)                    Server (Cloudflare Function)
┌──────────────────┐              ┌──────────────────────┐
│  /chat page      │   POST       │  functions/api/chat   │
│  - Chat UI       │ ──────────── │  - System prompt      │
│  - Message list  │   stream     │  - Context documents  │
│  - Input field   │ ◄─────────── │  - Claude API call    │
│  - Streaming     │              │  - Rate limiting      │
└──────────────────┘              └──────────────────────┘
```

### API Flow

1. User types a question in the chat UI
2. Client sends POST to `/api/chat` with the message history
3. Server-side function:
   a. Prepends the system prompt (who Nick is, what he's built, how to respond)
   b. Appends the context documents (artifact details, career history, skills assessment)
   c. Calls Claude API with streaming enabled
   d. Streams the response back to the client
4. Client renders the streaming response in real time

### Cost & Rate Limiting

- **Model:** Claude Haiku 4.5 (fast, cheap, good enough for Q&A about known content)
- **Estimated cost per conversation:** ~$0.01-0.05 (5-10 turns, ~2K input tokens system prompt + context, ~500 output tokens per response)
- **Rate limiting:**
  - 10 messages per session (enough for a real conversation, prevents abuse)
  - 50 sessions per day per IP (prevents scraping)
  - No authentication required (hiring managers won't create accounts)
- **Monthly budget estimate:** If 10 people/day have 5-turn conversations: ~$0.50/day, ~$15/month. Negligible.

## The System Prompt

This is the most important part. The system prompt determines the quality of every interaction. It needs three layers:

### Layer 1: Identity and Behavior

```
You are an AI assistant on Nick Carter's professional portfolio site (nickcarter.ai). Hiring managers and recruiters use you to learn about Nick's background, skills, and experience.

Rules:
- Answer questions about Nick's professional background, projects, and skills based on the context provided.
- Be specific. Cite real projects, real numbers, real outcomes. Never fabricate details.
- If you don't have information to answer a question, say so directly. "Nick hasn't published details about that" is a valid answer.
- Be honest about gaps. If someone asks about a skill Nick is still building (like cost/token economics), say it's an area he's actively developing, not a strength.
- Do not be sycophantic. Do not oversell. A hiring manager who asks "is Nick good at X" should get a calibrated answer, not a sales pitch.
- Keep responses concise. 2-4 paragraphs max unless the question requires more depth.
- You are not Nick. You are an AI that knows about Nick's work. Don't say "I built" or "my experience." Say "Nick built" or "his experience."
- If someone asks about topics unrelated to Nick's professional background, politely redirect: "I'm set up to answer questions about Nick's professional background and projects. For that question, you'd want to talk to Nick directly."
```

### Layer 2: Anti-Sycophancy Instructions

```
Calibration examples for honest assessment:

QUESTION: "Is Nick qualified for a VP of Engineering role?"
BAD ANSWER: "Absolutely! Nick's extensive experience makes him a perfect fit for VP-level roles."
GOOD ANSWER: "Nick has Director-level experience managing managers (14 engineers at BD, 23 total at Dexcom), which is typical VP-ready scope. His regulated-industry background and hands-on AI skills are unusual at that level. Whether he's ready for VP depends on the specific org — a 50-person engineering team at a medical device company is a strong match. A 500-person org at a FAANG company would be a stretch from his current scope."

QUESTION: "What are Nick's weaknesses?"
BAD ANSWER: "Nick is always striving to improve and his only weakness is working too hard."
GOOD ANSWER: "Based on his published self-assessment, cost and token economics is his thinnest AI skill — he understands model routing decisions but hasn't published formal cost models. He's also acknowledged that his BD tenure has involved significant organizational dysfunction, with plans consistently blocked by risk aversion. His 30-day development plan identified specific leadership gaps: solving problems for reports instead of developing their capacity, empathy without enough honest pushback, and not developing leads as leaders."
```

### Layer 3: Context Documents

The system prompt includes the full content of `llms-full.txt` (auto-generated from artifacts at build time), which contains:
- Professional summary
- Career history with specifics (BD, Dexcom, team sizes, accomplishments)
- AI skills self-assessment against the Nate Jones framework
- All artifact details (Lore Haven, Local Brain, Ship With Intent, Tool Audit, Agentic, this site, album)
- Education and domain expertise

Additionally, include a condensed version of the lessons learned and key decisions from the deep-dive pages — the stuff that demonstrates judgment, not just facts.

**Total context size estimate:** ~4,000-5,000 tokens. Well within Haiku's context window with room for multi-turn conversation.

## The Chat UI

### Design

Match the site's editorial style:
- White/warm stone background
- Georgia serif for the page title
- Messages in sans-serif (Inter)
- Nick's "responses" (from the AI) have the amber left-border accent
- User questions are plain, right-aligned or distinct from responses
- Streaming text appears smoothly, not in chunks
- Input field at the bottom with a send button

### Conversation Starters

Pre-populated suggestion chips above the input field to help hiring managers who don't know what to ask:

- "What's Nick's experience with regulated software?"
- "Tell me about Lore Haven"
- "What AI skills does Nick have?"
- "What are Nick's leadership gaps?"
- "Would Nick be a good fit for [role type]?"

The last one is a bridge to the future `/fit` feature — for now, the AI answers based on the context documents.

### Session Behavior

- No login required
- Conversation starts fresh on each page load (no persistence)
- Message history maintained in React state for the session
- 10-message limit per session with a friendly note: "That's the limit for this session. Want to go deeper? Email nick.carter@hey.com"
- After the limit, show Nick's email and LinkedIn as contact options

## The Fit Assessment (Future, Not This Build)

The `/fit` page (paste a JD, get an honest assessment) is a separate feature that builds on this same infrastructure. It uses the same Claude API integration and context documents but with a different system prompt focused on fit evaluation. Not in scope for the chat feature, but the architecture should make it easy to add later.

## Implementation Plan (High Level)

1. **Create Cloudflare Pages Function** at `functions/api/chat.ts`
   - Accept POST with message history
   - Prepend system prompt + context
   - Call Claude API (Anthropic SDK)
   - Stream response back
   - Rate limiting (in-memory counter, or Cloudflare KV if needed)

2. **Store API key** as Cloudflare Pages environment variable `ANTHROPIC_API_KEY`

3. **Build the chat page** at `app/chat/page.tsx`
   - Chat UI component (client component)
   - Message list with streaming
   - Input field with send button
   - Conversation starter chips
   - Session limit handling

4. **Generate context document** at build time
   - Already have `llms-full.txt` generated from artifacts
   - May need a separate `chat-context.txt` that's optimized for the system prompt (more concise, structured for Q&A rather than reading)

5. **Update hero** — change "Ask AI About Me" from "Coming soon" to active link

6. **Test with real questions** — have someone who doesn't know Nick's background try it and see if the answers are substantive

## Open Questions

1. **Haiku vs. Sonnet?** Haiku is cheaper and faster. Sonnet gives better multi-turn conversation and nuanced answers. Could start with Haiku and upgrade if the quality isn't there. Cost difference at expected volume is ~$15/month vs ~$50/month. Probably worth starting with Sonnet.

2. **Should the conversation be visible to Nick?** Logging what questions hiring managers ask would be valuable market intelligence (what do they care about? what gaps do they probe?). But it raises privacy questions. Possible middle ground: log question topics (anonymized) but not the full conversation.

3. **Should the AI ever recommend NOT reaching out?** The Nate Jones fit assessment tool tells employers "probably not your person." Should the chat do the same? e.g., if someone asks "would Nick be a good fit for a junior frontend role?" the AI should say "That's significantly below Nick's experience level and wouldn't be a good match for either side." This is the confidence signal Nate describes — willingness to turn away bad fits.

4. **Mobile experience?** Chat interfaces on mobile are tricky. The keyboard takes half the screen. Streaming responses need to auto-scroll. This needs specific attention during the build.

## Cost Summary

| Item | Cost |
|------|------|
| Claude API (Sonnet, ~10 conversations/day) | ~$50/month |
| Claude API (Haiku, ~10 conversations/day) | ~$15/month |
| Cloudflare Pages Functions | Free (included with Pages) |
| Cloudflare KV for rate limiting (if needed) | Free tier sufficient |
| **Total** | **$15-50/month** |

## Success Criteria

- A hiring manager can have a 5-turn conversation and come away with specific, accurate information about Nick's background
- The AI honestly acknowledges gaps when asked (cost economics, VP-scale experience)
- The AI refuses to answer off-topic questions gracefully
- Streaming responses feel smooth, not chunky
- The experience feels premium — consistent with the site's editorial design
- Rate limiting prevents abuse without blocking legitimate use
