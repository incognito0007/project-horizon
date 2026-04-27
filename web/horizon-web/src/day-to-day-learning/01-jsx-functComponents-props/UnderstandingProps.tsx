function UnderstandingProps(prop: { name: string; age: number; city: string }) {
  return (
    <div className="component">
      <h1>Understanding Props</h1>
      <p>Props are used to pass data from parent component to child component.</p>
      <p>Props are read-only, which means that they cannot be modified by the child component.</p>
      <p>Props are passed as an object to the child component.</p>
      <p>Props can be of any type, including functions.</p>

      <p>Below are the props passed to this component:</p>

      <p>Name: {prop.name}</p>
      <p>Age: {prop.age}</p>
      <p>City: {prop.city}</p>
    </div>
  )
}

export default UnderstandingProps
