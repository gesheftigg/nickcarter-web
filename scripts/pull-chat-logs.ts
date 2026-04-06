import fs from "fs";

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const NAMESPACE_ID = process.env.CLOUDFLARE_KV_NAMESPACE_ID;
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;

if (!ACCOUNT_ID || !NAMESPACE_ID || !API_TOKEN) {
  console.error(
    "Required env vars: CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_KV_NAMESPACE_ID, CLOUDFLARE_API_TOKEN"
  );
  process.exit(1);
}

const BASE = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/storage/kv/namespaces/${NAMESPACE_ID}`;
const headers = {
  Authorization: `Bearer ${API_TOKEN}`,
  "Content-Type": "application/json",
};

interface ConvData {
  messages: Array<{ role: string; content: string }>;
  timestamp: string;
}

async function main() {
  const listResp = await fetch(`${BASE}/keys?prefix=conv:&limit=1000`, { headers });
  const listData = (await listResp.json()) as {
    result: Array<{ name: string }>;
  };

  if (!listData.result || listData.result.length === 0) {
    console.log("No conversations found.");
    return;
  }

  const lines: string[] = [
    "# Chat Conversation Logs",
    `**Pulled:** ${new Date().toISOString()}`,
    `**Count:** ${listData.result.length}`,
    "",
  ];

  for (const key of listData.result) {
    const valueResp = await fetch(`${BASE}/values/${encodeURIComponent(key.name)}`, {
      headers,
    });
    const raw = await valueResp.text();

    let conv: ConvData;
    try {
      conv = JSON.parse(raw);
    } catch {
      lines.push(`## ${key.name}`, "", "(could not parse)", "", "---", "");
      continue;
    }

    lines.push(`## ${conv.timestamp || key.name}`, "");

    for (const msg of conv.messages) {
      const label = msg.role === "user" ? "**Visitor**" : "**AI**";
      lines.push(`${label}: ${msg.content}`, "");
    }

    lines.push("---", "");
  }

  const outPath = `chat-logs-${new Date().toISOString().split("T")[0]}.md`;
  fs.writeFileSync(outPath, lines.join("\n"));
  console.log(`Written ${listData.result.length} conversations to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
