function buttonClicked(): void {
  alert('button clicked!!')
}

function UnderstandingJsx() {
  const name: string = 'Ankit'
  return (
    <div className="component">
      <h1>React JSX</h1>
      <p>
        <b>jsx = js + html</b> == allows us to write html script within javascript file
      </p>
      <p>Hello, {name}!</p>
      <button onClick={buttonClicked}>Click me</button>
    </div>
  )
}

export default UnderstandingJsx
