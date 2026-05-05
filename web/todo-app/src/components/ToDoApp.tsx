import { useReducer, useState } from "react";
import type { State, Action } from "../types/todo";

const initialState: State = {
  todos: [],
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add":
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };

    case "toggle":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };

    case "delete":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
}

const ToDoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Todo App</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add todo..."
        />

        <button
          onClick={() => {
            if (input.trim()) {
              dispatch({ type: "add", payload: input });
              setInput("");
            }
          }}
        >
          Add
        </button>
      </div>

      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch({ type: "toggle", payload: todo.id })}
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>

            <button
              onClick={() => dispatch({ type: "delete", payload: todo.id })}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
