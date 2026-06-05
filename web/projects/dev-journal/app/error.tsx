"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <p style={{ color: "#C0392B", marginBottom: "16px" }}>
        Something went wrong: {error.message}
      </p>
      <button
        onClick={reset}
        style={{ padding: "8px 16px", cursor: "pointer" }}
      >
        Try again
      </button>
    </div>
  );
}
