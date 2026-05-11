interface Todo {
  id: number
  title: string
  completed: boolean
}

// Readonly makes all properties of the Todo type read-only, preventing any modifications to the properties of a todo item after it has been created.

function displayTodoDetails(todo: Readonly<Todo>): void {
  console.log('Todo Details:', todo)
  // Attempting to modify the properties of the todo item will result in a TypeScript error, as the properties are read-only.
  // todo.title = 'New Title' // This will cause an error because title is read-only.
}

const todo: Readonly<Todo> = {
  id: 1,
  title: 'Learn TypeScript Utility Types',
  completed: false,
}

const printTodoDetails = () => {
  displayTodoDetails(todo)
}

export { printTodoDetails }
