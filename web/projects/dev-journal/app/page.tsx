import Link from "next/link";
import { EntryCard } from "@/components/EntryCard";
import type { JournalEntry } from "@/types/journal";

async function getEntries(): Promise<JournalEntry[]> {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/entries`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch entries");
  return res.json() as Promise<JournalEntry[]>;
}
export default async function HomePage() {
  const entries = await getEntries();

  return (
    <main style={{ maxWidth: "680px", margin: "0 auto", padding: "40px 20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: 700, margin: 0 }}>
            DevJournal
          </h1>
          <p style={{ color: "#888", fontSize: "14px", margin: "4px 0 0" }}>
            {entries.length} {entries.length === 1 ? "entry" : "entries"}
          </p>
        </div>
        <Link
          href="/add"
          style={{
            background: "#1a1a1a",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          + Add Entry
        </Link>
      </div>

      {entries.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 0", color: "#888" }}>
          <p style={{ fontSize: "16px" }}>No entries yet.</p>
          <p style={{ fontSize: "14px", marginTop: "8px" }}>
            Start logging your learning!
          </p>
        </div>
      ) : (
        <div>
          {entries.map((entry) => (
            <EntryCard key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </main>
  );
}
