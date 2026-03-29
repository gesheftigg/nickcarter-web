# Architecture: Five Services, One Compose File

Local Brain runs as a Docker Compose stack on a single machine. No Kubernetes, no cloud dependencies, no managed services. Five containers that start with `docker compose up -d` and stop with `docker compose down`.

## The Services

**postgres** — PostgreSQL 16 with the pgvector extension. Stores all thoughts with 1536-dimensional vector embeddings for semantic search. Listens only on localhost — never exposed to the network. Pinned to `ankane/pgvector:v0.8.0` to prevent surprise major-version upgrades.

**mcp-server** — Deno 2.x running the MCP protocol handler, all nine tools, and the server-rendered admin panel. Single process, no build step, no node_modules. Hono handles HTTP routing. The MCP SDK handles protocol negotiation. Port 8000.

**tunnel** — Cloudflare Tunnel (cloudflared) for secure remote access. Outbound-only connection — no inbound ports, no firewall rules, your home IP stays hidden. The tunnel terminates TLS at Cloudflare's edge and forwards to the MCP server over the local Docker network.

**db-backup** — A custom container running scheduled `pg_dump` via cron. Supports AES-256 encryption via GPG before storage. Syncs encrypted backups to any rclone-compatible cloud provider (Backblaze B2, S3, R2). Retention policies for both local and cloud copies.

**docker-proxy** — Tecnativa's Docker socket proxy. The admin panel needs to list containers, read logs, and restart services — but mounting the raw Docker socket gives full host access. The proxy exposes only the specific API endpoints needed (containers, logs, exec for backups) and blocks everything else.

## Why Docker Compose

The original Open Brain ran on Kubernetes. That makes sense for a multi-tenant cloud service. It makes no sense for a personal tool running on a Raspberry Pi in your closet. Docker Compose gives you the isolation benefits of containers without the operational overhead of an orchestrator. One YAML file. One command to start. One command to update.

## The Database Schema

The core table is `thoughts` — content, embedding (vector), metadata (JSONB), timestamps, user scoping, and optional TTL. The `thought_links` table stores pairwise similarity scores between thoughts, computed at capture time. The `brain_users` table handles multi-user isolation — each user gets their own namespace with a separate MCP access key. The `digest_configs` table manages scheduled summary delivery. The `api_usage` table logs every AI API call for cost tracking.

Schema migrations are SQL files that run in transactions with automatic rollback on failure. The update script takes a pre-migration backup before applying any changes.

## Data Flow

A thought capture flows through four stages:

1. The MCP client sends content via the `capture_thought` tool
2. The server calls the embedding API (OpenAI-compatible) to generate a vector
3. The server calls the chat API to extract structured metadata (type, topics, people, action items)
4. The thought, embedding, and metadata are stored in PostgreSQL. The server then computes cosine similarity against existing thoughts and creates links to the top-3 most similar.

Search works in reverse: the query gets embedded, then PostgreSQL's pgvector extension finds the nearest neighbors by cosine distance. The results come back ranked by semantic similarity — not keyword matching.

## Admin Panel

The admin panel is a server-rendered web UI built with Hono's JSX support. No React, no client-side hydration, no build step. Every page is a function that returns HTML. The styling is inline Tailwind-style classes. Authentication uses JWT sessions with bcrypt password hashing.

The panel provides: dashboard with stats, thought browser with filtering and pagination, graph visualization of thought connections, import/export (JSON, Markdown, CSV), digest configuration, AI cost tracking, backup inventory, Docker log viewer, service restarts, user management, and a configuration editor for the .env file.

## What's Not Here

No search engine (pgvector handles similarity search natively). No message queue (thoughts are captured synchronously). No cache layer (the database is fast enough at self-hosted scale). No reverse proxy (Cloudflare Tunnel handles TLS termination). The architecture is as simple as possible for a system that needs to run unattended on commodity hardware.
