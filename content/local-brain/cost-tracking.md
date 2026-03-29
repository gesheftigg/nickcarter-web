# Cost Tracking: Knowing What Your Memory Costs

Every time Local Brain captures a thought, it makes two AI API calls: one for embedding (converting text to a vector) and one for metadata extraction (classifying the thought into type, topics, and people). Every search makes one embedding call. These calls cost money. Not much — a few cents per day at typical usage — but the costs are real and they accumulate.

The cost tracking system exists because a tool you can't budget for is a tool you'll eventually turn off.

## How It Works

Every API call goes through a wrapper that captures the response's `usage` field — the token counts that OpenAI-compatible and Anthropic APIs return with every response. The wrapper extracts prompt tokens, completion tokens, and the model name, then estimates cost using a built-in rate table.

The rate table covers common models:

- `text-embedding-3-small`: $0.02 per 1M input tokens
- `gpt-4o-mini`: $0.15 input / $0.60 output per 1M tokens
- `gpt-4o`: $2.50 input / $10.00 output per 1M tokens
- `claude-haiku-4-5`: $0.80 input / $4.00 output per 1M tokens
- `claude-sonnet-4-5`: $3.00 input / $15.00 output per 1M tokens

Each usage record is stored in the `api_usage` table with: user ID, operation name (`embedding`, `embedding:search`, `metadata`), model, token counts, estimated cost, and timestamp.

## What You Can See

The `usage_stats` MCP tool returns:

- Total cost for the requested period
- Total API calls
- Prompt and completion token counts
- Breakdown by operation (how much does search cost vs. capture?)
- Breakdown by model (what's the chat model costing you?)
- Daily trend (is usage growing?)

The admin panel shows the same data with filtering by user and time range.

## Why This Matters

The default configuration — `text-embedding-3-small` for embeddings and `gpt-4o-mini` for metadata — costs roughly $0.001 per captured thought and $0.0002 per search. At 20 thoughts per day with 10 searches, that's about $0.03/day or roughly $1/month.

But if someone switches to `gpt-4o` for metadata extraction (maybe wanting higher-quality topic classification), costs jump 16x. Or if an import job processes 500 thoughts without the user realizing each one makes two API calls, the bill arrives as a surprise.

Cost visibility prevents surprise bills. It also lets you make informed decisions: is the quality improvement from a better model worth the cost increase? The system gives you the data to answer that question instead of guessing.

## The Broader Skill

Cost tracking in Local Brain demonstrates a general principle for AI systems: every AI call has a price, and that price varies dramatically by model, by operation, and by usage pattern. A system that hides those costs from the user is a system that can't be trusted at scale. Token economics isn't just about optimization — it's about building systems where the person paying the bill can see what they're paying for.
