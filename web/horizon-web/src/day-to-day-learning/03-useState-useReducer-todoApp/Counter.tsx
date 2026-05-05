import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="component counterApp">
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>You have clicked the button {count} times.</p>
    </div>
  )
}

export default Counter
