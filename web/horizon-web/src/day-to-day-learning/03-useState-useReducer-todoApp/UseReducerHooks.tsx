import { useReducer } from 'react'

const UseReducerHooks = () => {
  const reducer = (state: number, action: { type: string }) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div className="component counterApp ">
      <button className="reducerAppbtnClass" onClick={() => dispatch({ type: 'INCREMENT' })}>
        Increment {count}
      </button>
      <button className="reducerAppbtnClass" onClick={() => dispatch({ type: 'DECREMENT' })}>
        Decrement {count}
      </button>
    </div>
  )
}

export default UseReducerHooks
