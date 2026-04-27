import UnderstandingJsx from './day-to-day-learning/01-jsx-functComponents-props/UnderstandingJsx'
import FunctionalComponent from './day-to-day-learning/01-jsx-functComponents-props/FunctionalComponent'
import UnderstandingProps from './day-to-day-learning/01-jsx-functComponents-props/UnderstandingProps'

function App() {
  const propsData = {
    name: String('Ankit'),
    age: Number(30),
    city: String('New York'),
  }
  return (
    <div className="app-container">
      <h1>horizon-web</h1>
      <UnderstandingJsx />
      <FunctionalComponent />
      <UnderstandingProps {...propsData} />
    </div>
  )
}

export default App
