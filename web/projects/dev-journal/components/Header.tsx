import Link from "next/link";
import { handleSignOut } from "@/lib/actions";

interface HeaderProps {
  backHref?: string;
  backLabel?: string;
  showAddEntry?: boolean;
}

export function Header({
  backHref,
  backLabel,
  showAddEntry = false,
}: HeaderProps) {
  return (
    <>
      <style>{`
        :root {
          --bg: #f5f5f5;
          --surface: #ffffff;
          --border: #e2e2e2;
          --text-primary: #1a1a1a;
          --text-secondary: #666;
          --text-muted: #999;
          --btn-primary-bg: #1a1a1a;
          --btn-primary-text: #ffffff;
          --btn-outline-border: #d0d0d0;
          --btn-outline-text: #555;
          --header-bg: #ffffff;
          --header-shadow: 0 1px 0 #e2e2e2;
          --input-bg: #ffffff;
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --bg: #0f0f0f;
            --surface: #1a1a1a;
            --border: #2a2a2a;
            --text-primary: #f0f0f0;
            --text-secondary: #aaa;
            --text-muted: #666;
            --btn-primary-bg: #f0f0f0;
            --btn-primary-text: #0f0f0f;
            --btn-outline-border: #333;
            --btn-outline-text: #aaa;
            --header-bg: #141414;
            --header-shadow: 0 1px 0 #2a2a2a;
            --input-bg: #222;
          }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          background: var(--bg);
          color: var(--text-primary);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "var(--header-bg)",
          boxShadow: "var(--header-shadow)",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            maxWidth: "680px",
            margin: "0 auto",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left — back link or brand */}
          <div>
            {backHref ? (
              <Link
                href={backHref}
                style={{
                  fontSize: "14px",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                }}
              >
                ← {backLabel ?? "Back"}
              </Link>
            ) : (
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                DevJournal
              </span>
            )}
          </div>

          {/* Right — actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {showAddEntry && (
              <Link
                href="/add"
                style={{
                  background: "var(--btn-primary-bg)",
                  color: "var(--btn-primary-text)",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                + Add Entry
              </Link>
            )}
            <form action={handleSignOut}>
              <button
                type="submit"
                style={{
                  background: "none",
                  border: "1px solid var(--btn-outline-border)",
                  padding: "8px 14px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  cursor: "pointer",
                  color: "var(--btn-outline-text)",
                }}
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>
    </>
  );
}
