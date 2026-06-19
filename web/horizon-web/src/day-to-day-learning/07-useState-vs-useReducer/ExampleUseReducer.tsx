import { useReducer } from 'react'

type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'reset' }

function reducer(state: number, action: Action) {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return 0
    default:
      return state
  }
}

export default function ExampleUseReducer() {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>

      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>

      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  )
}
