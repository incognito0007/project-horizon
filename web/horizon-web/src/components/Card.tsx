function Card(cardData: {
  name: string
  empId: number
  company: string
  designation: string
  doj: string
}) {
  return (
    <div className="card">
      <h1>{cardData.name}</h1>
      <p>Employee ID: {cardData.empId}</p>
      <h2>{cardData.company}</h2>
      <h3>{cardData.designation}</h3>
      <p>DOJ: {cardData.doj}</p>
    </div>
  )
}

export default Card
