import Link from "next/link";
import { auth } from "@/auth";
import { EntryCard } from "@/components/EntryCard";
import { Header } from "@/components/Header";
import { getEntriesByUser } from "@/lib/db/entries";

export default async function HomePage() {
  const session = await auth();
  const entries = session?.user?.id
    ? await getEntriesByUser(session.user.id)
    : [];

  return (
    <>
      <Header showAddEntry />

      <main
        style={{ maxWidth: "680px", margin: "0 auto", padding: "32px 20px" }}
      >
        <div style={{ marginBottom: "24px" }}>
          <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
            {session?.user?.email}
          </p>
          <p
            style={{
              fontSize: "22px",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginTop: "4px",
            }}
          >
            {entries.length === 0
              ? "No entries yet"
              : `${entries.length} ${entries.length === 1 ? "entry" : "entries"}`}
          </p>
        </div>

        {entries.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "80px 20px",
              background: "var(--surface)",
              borderRadius: "12px",
              border: "1px solid var(--border)",
            }}
          >
            <p style={{ fontSize: "32px", marginBottom: "12px" }}>📓</p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: 500,
                color: "var(--text-primary)",
                marginBottom: "8px",
              }}
            >
              Start your learning journal
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "var(--text-muted)",
                marginBottom: "24px",
              }}
            >
              Log what you learn every day and track your progress
            </p>
            <Link
              href="/add"
              style={{
                background: "var(--btn-primary-bg)",
                color: "var(--btn-primary-text)",
                padding: "10px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              Add your first entry
            </Link>
          </div>
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            {entries.map((entry) => (
              <EntryCard key={entry.id} entry={entry} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
