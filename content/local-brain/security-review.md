# Security Review: 20 Findings, 16 Fixed

After the initial build was feature-complete, the entire codebase got a staff-level security audit. The review covered every file — server code, admin panel, Docker configuration, backup scripts, and authentication. Twenty findings across four severity levels. Sixteen fixed in a single pass.

## The Critical Findings

### CR-01: Race Condition in User Isolation

The most serious finding. The server stored the current authenticated user in a module-level global variable:

```
let currentUser: ResolvedUser | null = null;
```

Every MCP tool handler read this global to scope database queries. Under concurrent requests, User A's handler could execute after User B's authentication overwrote the global. User A would then query User B's thoughts.

The comment in the original code said "works because Deno.serve is async" — but that's precisely wrong. Async functions yield at every `await`, and another request's handler runs during the yield. Two requests arriving within milliseconds would race.

**Fix:** Replaced the global with `AsyncLocalStorage` from Node's `async_hooks` module (supported in Deno 2.x). Each request runs inside `requestContext.run({ user }, handler)`, and tool handlers call `getCurrentUser()` which reads from the per-request store. No shared mutable state.

### CR-02: Unsafe Auth Sentinel

The user resolution function used `undefined as unknown as null` as a sentinel value to distinguish "invalid key" from "global key (no user)." This cast works in V8 today but is a type-system trick that breaks under serialization, promise wrapping, or engine changes.

**Fix:** Replaced with a discriminated union: `{ kind: "user", user } | { kind: "global" } | { kind: "invalid" }`. The authentication path now uses a `switch` on `result.kind` — no type coercion, no ambiguity.

## The High Findings

**SQL injection via INTERVAL clauses** — Four locations interpolated user-controlled numbers into SQL strings like `INTERVAL '${days} days'`. The Zod validation layer enforced numeric types, so the practical risk was low. But the pattern was fragile — if Zod schema changed, it would become exploitable. Fixed with PostgreSQL's `make_interval(days => $N)` function and parameterized queries.

**MCP key in query string** — The server accepted access keys via both the `x-brain-key` header and `?key=` query parameter. Query parameters appear in server logs, CDN logs, browser history, and referer headers. Removed query parameter support entirely.

**Hardcoded JWT secret** — The admin JWT signing key defaulted to the literal string `"change-me"`. Anyone could forge admin tokens. Fixed to refuse operation if the secret is missing or default, log a FATAL error, and fall back to a random UUID (so the server stays up but auth always fails).

**SSRF via webhook URL** — Digest delivery fetched arbitrary URLs stored by admin users. An admin could point a webhook at internal services, cloud metadata endpoints, or the Docker API. Added `isValidWebhookUrl()` — requires HTTPS, blocks RFC 1918 addresses, link-local, localhost, `.internal` domains, and the cloud metadata IP.

**Config editor write scope** — The `.env` editor could write to `ADMIN_JWT_SECRET`, allowing an admin to change the signing key and forge tokens. Marked the key readonly, added an allowlist to the write function, and the POST handler skips readonly keys.

## The Pattern

Most findings shared a root cause: code that worked correctly in the single-user, localhost-only, happy-path scenario but failed under adversarial or concurrent conditions. The global `currentUser` worked fine when only one person used the system. The INTERVAL interpolation worked fine when Zod guaranteed integers. The webhook URL was fine when only a trusted admin set it.

Security review isn't about finding bugs in broken code. It's about finding assumptions in working code.

## What's Left

Four findings deferred:

- **CSRF tokens** — SameSite:Lax cookies provide primary protection. Full CSRF tokens are defense-in-depth for a future pass.
- **Docker exec risk** — Known design tradeoff. The admin panel needs exec for backup operations. Documenting the risk is the correct response.
- **LLM metadata validation** — Malformed metadata from the LLM falls back to safe defaults. Schema validation would be stricter but the current behavior is acceptable.
- **MCP body size limit** — Needs Hono middleware or Deno.serve configuration. Low priority because MCP clients typically send small payloads.
