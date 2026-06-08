import { useState, useEffect } from "react";
import type { JournalEntry } from "@/types/journal";

interface UseEntriesResult {
  entries: JournalEntry[];
  loading: boolean;
  error: string | null;
}

export function useEntries(): UseEntriesResult {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Abort controller — cleans up if component unmounts mid-fetch
    const controller = new AbortController();

    async function fetchEntries() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("/api/entries", {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch entries: ${res.status}`);
        }

        const data = (await res.json()) as JournalEntry[];
        setEntries(data);
      } catch (err) {
        // Don't set error if it was just an abort
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    void fetchEntries();

    // Cleanup — cancel fetch if component unmounts
    return () => controller.abort();
  }, []);

  return { entries, loading, error };
}
