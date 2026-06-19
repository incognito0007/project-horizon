import { useState } from 'react'

export default function ExampleUseState() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <button onClick={() => setCount(0)}>Reset</button>

      <h2>Name: {name}</h2>

      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </>
  )
}
