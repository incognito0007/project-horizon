"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/Button";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/");
    }
  };

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
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f9f9f9",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "40px",
            borderRadius: "12px",
            border: "1px solid #e2e2e2",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <h1
            style={{ fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}
          >
            Welcome back
          </h1>
          <p style={{ color: "#888", fontSize: "14px", marginBottom: "28px" }}>
            Log in to your DevJournal
          </p>

          <div style={{ marginBottom: "16px" }}>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label style={labelStyle}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={inputStyle}
            />
          </div>

          {error && (
            <p
              style={{
                color: "#C0392B",
                fontSize: "13px",
                marginBottom: "16px",
              }}
            >
              {error}
            </p>
          )}

          <Button
            label={loading ? "Logging in..." : "Log In"}
            disabled={!email || !password || loading}
            onClick={handleLogin}
          />

          <p
            style={{
              marginTop: "20px",
              fontSize: "13px",
              color: "#888",
              textAlign: "center",
            }}
          >
            Don&apos;t have an account?{" "}
            <Link
              href="/auth/signup"
              style={{ color: "#1a1a1a", fontWeight: 500 }}
            >
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "13px",
  fontWeight: 500,
  color: "var(--text-secondary)" as string,
  marginBottom: "6px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  fontSize: "14px",
  border: "1px solid var(--border)" as string,
  borderRadius: "6px",
  outline: "none",
  fontFamily: "inherit",
  background: "var(--input-bg)" as string,
  color: "var(--text-primary)" as string,
};
