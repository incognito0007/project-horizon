export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type State = {
  todos: Todo[];
};

export type Action =
  | { type: "add"; payload: string }
  | { type: "toggle"; payload: number }
  | { type: "delete"; payload: number };
