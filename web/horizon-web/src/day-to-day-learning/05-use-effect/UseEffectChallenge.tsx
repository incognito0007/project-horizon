import { useEffect, useState } from 'react'

export default function UseEffectChallenge() {
  const [name, setName] = useState('')
  const [count, setCount] = useState(0)

  // Log the name to the console whenever it changes
  useEffect(() => {
    console.log('Name updated:', name)
  }, [name])

  // Challenge: Update the document title with the count value whenever it changes
  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  return (
    <div className="component">
      <h2>UseEffect Challenge</h2>
      <p>Name: {name}</p>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
