import { useState, useEffect } from 'react'

export default function UseEffectChangingDate() {
  const [date, setDate] = useState('')

  useEffect(() => {
    setInterval(() => {
      const updatedDate = new Date()
      setDate(updatedDate.toLocaleTimeString())
    }, 1000)
  }, [])

  return (
    <div className="component date-container">
      <h2>Current Time: </h2>
      <p className="date">{date}</p>
    </div>
  )
}
