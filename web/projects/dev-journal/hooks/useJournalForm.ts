import { useReducer } from "react";
import type { NewEntryInput, DraftEntry } from "../types/journal";
import type { Stack } from "../types/journal";
import type { Mood } from "../types/journal";

interface FormState {
  draft: DraftEntry;
  submitting: boolean;
  error: string | null;
}

type FormAction =
  | { type: "SET_TITLE"; payload: string }
  | { type: "SET_SUMMARY"; payload: string }
  | { type: "TOGGLE_STACK"; payload: Stack }
  | { type: "SET_MOOD"; payload: Mood }
  | { type: "SET_TIME"; payload: number }
  | { type: "SET_SUBMITTING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "RESET" };

const initialState: FormState = {
  draft: {
    title: "",
    summary: "",
    stack: [],
    mood: "okay",
    timeSpentMins: 30,
  },
  submitting: false,
  error: null,
};

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, draft: { ...state.draft, title: action.payload } };

    case "SET_SUMMARY":
      return { ...state, draft: { ...state.draft, summary: action.payload } };

    case "TOGGLE_STACK": {
      const current = state.draft.stack ?? [];
      const exists = current.includes(action.payload);
      return {
        ...state,
        draft: {
          ...state.draft,
          // remove if already selected, add if not
          stack: exists
            ? current.filter((s) => s !== action.payload)
            : [...current, action.payload],
        },
      };
    }

    case "SET_MOOD":
      return { ...state, draft: { ...state.draft, mood: action.payload } };

    case "SET_TIME":
      return {
        ...state,
        draft: { ...state.draft, timeSpentMins: action.payload },
      };

    case "SET_SUBMITTING":
      return { ...state, submitting: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export interface UseJournalFormResult {
  draft: DraftEntry;
  submitting: boolean;
  error: string | null;
  isValid: boolean;
  setTitle: (value: string) => void;
  setSummary: (value: string) => void;
  toggleStack: (stack: Stack) => void;
  setMood: (mood: Mood) => void;
  setTime: (mins: number) => void;
  submit: () => Promise<NewEntryInput | null>;
}

export function useJournalForm(): UseJournalFormResult {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const isValid =
    (state.draft.title?.trim().length ?? 0) > 0 &&
    (state.draft.summary?.trim().length ?? 0) >= 20 &&
    (state.draft.stack?.length ?? 0) > 0 &&
    (state.draft.timeSpentMins ?? 0) >= 1;

  const setTitle = (value: string) =>
    dispatch({ type: "SET_TITLE", payload: value });
  const setSummary = (value: string) =>
    dispatch({ type: "SET_SUMMARY", payload: value });
  const toggleStack = (stack: Stack) =>
    dispatch({ type: "TOGGLE_STACK", payload: stack });
  const setMood = (mood: Mood) => dispatch({ type: "SET_MOOD", payload: mood });
  const setTime = (mins: number) =>
    dispatch({ type: "SET_TIME", payload: mins });

  const submit = async (): Promise<NewEntryInput | null> => {
    if (!isValid) return null;

    dispatch({ type: "SET_SUBMITTING", payload: true });
    dispatch({ type: "SET_ERROR", payload: null });

    try {
      const res = await fetch("/api/entries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state.draft),
      });

      if (!res.ok) {
        const data = (await res.json()) as { error: string };
        throw new Error(data.error);
      }

      dispatch({ type: "RESET" });
      return state.draft as NewEntryInput;
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      dispatch({ type: "SET_ERROR", payload: message });
      return null;
    } finally {
      dispatch({ type: "SET_SUBMITTING", payload: false });
    }
  };

  return {
    draft: state.draft,
    submitting: state.submitting,
    error: state.error,
    isValid,
    setTitle,
    setSummary,
    toggleStack,
    setMood,
    setTime,
    submit,
  };
}
