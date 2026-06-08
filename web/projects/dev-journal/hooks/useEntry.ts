import { useState, useEffect } from "react";
import type { JournalEntry } from "@/types/journal";

interface UseEntryResult {
  entry: JournalEntry | null;
  loading: boolean;
  error: string | null;
}

export function useEntry(id: string): UseEntryResult {
  const [entry, setEntry] = useState<JournalEntry | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchEntry() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("/api/entries", {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error(`Failed to fetch entries: ${res.status}`);

        const data = (await res.json()) as JournalEntry[];
        const found = data.find((e) => e.id === id) ?? null;

        setEntry(found);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    void fetchEntry();

    return () => controller.abort();
  }, [id]);

  return { entry, loading, error };
}
