export type TaskStatus = "pending" | "completed" | "stuck";

export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
  notes?: string;
  createdAt: number;
};

export type State = {
  tasks: Task[];
  filter: TaskStatus | "all";
};

export type Action =
  | { type: "add"; payload: string }
  | { type: "delete"; payload: number }
  | { type: "toggleComplete"; payload: number }
  | { type: "markStuck"; payload: number }
  | { type: "addNote"; payload: { id: number; note: string } }
  | { type: "setFilter"; payload: State["filter"] };
