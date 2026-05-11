import { useState, useEffect } from 'react'

const UseEffectCleanupFunction = () => {
  const [count, setCount] = useState(0)

  // Problem with this - subscriber count will keep increasing every second and we will have multiple intervals running in the background, which can lead to performance issues and memory leaks.
  //   setInterval(() => {
  //     setCount(count + 1)
  //   }, 1000)

  // Problem with this - the count value will be stale and will not update as expected, because the interval callback will always reference the initial count value (which is 0) due to closure.
  //   setInterval(() => {
  //     setCount(prev => prev + 1)
  //   }, 1000)

  useEffect(() => {
    return () => {}
  }, [])

  return (
    <div className="component">
      <div>
        <p>My Subscribers</p>
        <div className="odometer">{count}</div>
        <h3>
          Subscriber Count <br /> Realtime Counter
        </h3>
      </div>
    </div>
  )
}

export default UseEffectCleanupFunction
