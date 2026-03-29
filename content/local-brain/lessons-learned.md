# Lessons Learned

## The security review was more valuable than the build

The initial build was fast — feature after feature landing cleanly, all the pieces fitting together. The security review found 20 problems. Two were critical. The most serious one (a race condition in user isolation) was invisible during development because testing with a single user can't reveal concurrency bugs. The code worked perfectly in every test. It would have failed in production the moment two people used it simultaneously.

The lesson: a feature-complete system that hasn't been adversarially reviewed isn't ready. It's a draft.

## Global mutable state is the original sin of server code

The `currentUser` race condition happened because the original code stored request state in a module-level variable. This is the most common concurrency bug in server applications, and it's invisible when you're the only user. AsyncLocalStorage exists precisely for this problem. Use it from the start.

## "Works because async" is never a valid security argument

The original code had a comment explaining that the global variable was safe "because Deno.serve is async." This is backwards. Async is exactly why it's unsafe — async functions yield control at every `await`, and another request can interleave. If someone on your team writes "this works because of the concurrency model," treat it as a red flag, not an explanation.

## String interpolation in SQL is a pattern problem, not a severity problem

The SQL INTERVAL interpolation (`INTERVAL '${days} days'`) was technically safe because Zod enforced integer types upstream. But four separate locations had the same pattern. If any of those validation layers changed, all four became injectable. The fix wasn't about the current risk — it was about eliminating a pattern that invites future vulnerabilities. `make_interval(days => $N)` with parameterized queries is safe regardless of what happens upstream.

## Security findings cluster around assumptions

The most common root cause across all 20 findings was the same: code that assumed a benign operating environment. Single user? No race conditions. Trusted admin? No SSRF. Localhost only? No need for HTTPS cookies. Every assumption was valid for the development environment and wrong for the deployment environment.

## Docker Compose is the right abstraction for self-hosted tools

Kubernetes is overkill for a personal tool. A bare process is too fragile. Docker Compose hits the sweet spot: isolated services, declarative configuration, reproducible deployments, and a single command to start everything. The five-service architecture (database, server, tunnel, backup, proxy) maps cleanly to five containers with explicit network boundaries.

## The admin panel was the hardest engineering

Nine MCP tools took less time than the admin panel. Server-rendered JSX with no build step is simple in theory but fiddly in practice — every page is a function, every form is a POST handler, every redirect needs validation. The Docker log viewer required parsing binary stream headers. The backup inventory required exec-ing into a running container. The cost tracking page required four SQL aggregation queries that all had to share the same dynamic WHERE clause.

The MCP tools are the product's value. The admin panel is what makes it operable. Operable systems take more work than valuable ones.

## Cost visibility changes behavior

Once the cost tracking dashboard was live, the first thing that happened was checking which operations cost the most. Metadata extraction was 3x more expensive than embedding. That immediately raised the question: is the metadata quality worth the cost? Without visibility, that question never gets asked. The tool just runs and the bill arrives later.

## Build for export from day one

The anti-lock-in guarantee (export all data as JSON or Markdown, health warnings if you haven't exported recently) was a deliberate design choice. A self-hosted tool that traps your data is worse than a cloud tool that traps your data — at least the cloud tool has a team maintaining it. If Local Brain stops being useful, your thoughts should leave with you in a format any other system can read.
