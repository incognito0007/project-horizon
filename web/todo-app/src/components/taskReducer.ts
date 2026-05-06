import type { State, Action } from "../types/task";

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            title: action.payload,
            status: "pending",
            createdAt: Date.now(),
          },
        ],
      };

    case "delete":
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };

    case "toggleComplete":
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload
            ? {
                ...t,
                status: t.status === "completed" ? "pending" : "completed",
              }
            : t,
        ),
      };

    case "markStuck":
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload ? { ...t, status: "stuck" } : t,
        ),
      };

    case "addNote":
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload.id ? { ...t, notes: action.payload.note } : t,
        ),
      };

    case "setFilter":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
}
