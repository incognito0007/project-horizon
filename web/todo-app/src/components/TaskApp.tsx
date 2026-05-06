import { useReducer, useState } from "react";
import { reducer } from "./taskReducer";
import type { State } from "../types/task";
import { initialTasks } from "../data/taskData";

const initialState: State = {
  tasks: initialTasks,
  filter: "all",
};

export default function TaskApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "all") return true;
    return task.status === state.filter;
  });

  return (
    <div style={{ maxWidth: 900, margin: "40px auto" }}>
      <h2 style={{ marginBottom: 20 }}>Dev Learning Tracker</h2>

      {/* Add Task */}
      <div style={{ marginBottom: 20 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new task..."
          style={{ padding: "8px", width: "70%", marginRight: 10 }}
        />
        <button
          onClick={() => {
            if (input.trim()) {
              dispatch({ type: "add", payload: input });
              setInput("");
            }
          }}
          style={{ padding: "8px 16px" }}
        >
          Add
        </button>
      </div>

      {/* Filters */}
      <div style={{ marginBottom: 20 }}>
        {(["all", "pending", "completed", "stuck"] as const).map((f) => (
          <button
            key={f}
            onClick={() => dispatch({ type: "setFilter", payload: f })}
            style={{
              marginRight: 10,
              padding: "6px 12px",
              background: state.filter === f ? "#2563eb" : "#e5e7eb",
              color: state.filter === f ? "#fff" : "#000",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* TABLE */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          background: "#fff",
        }}
      >
        <thead>
          <tr style={{ background: "#f3f4f6" }}>
            <th style={thStyle}>Task</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Actions</th>
            <th style={thStyle}>Notes</th>
          </tr>
        </thead>

        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task.id} style={{ borderBottom: "1px solid #eee" }}>
              {/* Task */}
              <td style={tdStyle}>{task.title}</td>

              {/* Status */}
              <td style={tdStyle}>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: 12,
                    background:
                      task.status === "completed"
                        ? "#dcfce7"
                        : task.status === "stuck"
                          ? "#fee2e2"
                          : "#e0f2fe",
                  }}
                >
                  {task.status}
                </span>
              </td>

              {/* Actions */}
              <td style={tdStyle}>
                <button
                  onClick={() =>
                    dispatch({
                      type: "toggleComplete",
                      payload: task.id,
                    })
                  }
                  style={btnStyle}
                >
                  Done
                </button>

                <button
                  onClick={() =>
                    dispatch({
                      type: "markStuck",
                      payload: task.id,
                    })
                  }
                  style={{ ...btnStyle, background: "#f87171" }}
                >
                  Stuck
                </button>

                <button
                  onClick={() => dispatch({ type: "delete", payload: task.id })}
                  style={{ ...btnStyle, background: "#9ca3af" }}
                >
                  Delete
                </button>
              </td>

              {/* Notes */}
              <td style={tdStyle}>
                <input
                  defaultValue={task.notes || ""}
                  placeholder="Add note..."
                  onBlur={(e) =>
                    dispatch({
                      type: "addNote",
                      payload: {
                        id: task.id,
                        note: e.target.value,
                      },
                    })
                  }
                  style={{
                    padding: "6px",
                    width: "100%",
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  padding: "12px",
  textAlign: "left" as const,
};

const tdStyle = {
  padding: "12px",
};

const btnStyle = {
  marginRight: 6,
  padding: "5px 10px",
  background: "#60a5fa",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
};
