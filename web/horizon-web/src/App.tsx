import UnderstandingJsx from './day-to-day-learning/01-jsx-functComponents-props/UnderstandingJsx'
import FunctionalComponent from './day-to-day-learning/01-jsx-functComponents-props/FunctionalComponent'
import UnderstandingProps from './day-to-day-learning/01-jsx-functComponents-props/UnderstandingProps'
import Card from './components/Card'
import { printValuesInConsole } from './day-to-day-learning/02-ts-types-interfaces-typeAliases/types'
import { printCoordinates } from './day-to-day-learning/02-ts-types-interfaces-typeAliases/typesAliases'
import { printOrderDetails } from './day-to-day-learning/02-ts-types-interfaces-typeAliases/types-typeAliases-interface'
import { viewUserData } from './day-to-day-learning/02-ts-types-interfaces-typeAliases/fetchApiResponse'
import Counter from './day-to-day-learning/03-useState-useReducer-todoApp/Counter'
import UseReducerHooks from './day-to-day-learning/03-useState-useReducer-todoApp/UseReducerHooks'
import { printChaiDetails } from './day-to-day-learning/04-generics-and-interfaces/interface'

function App() {
  const propsData = {
    name: String('Ankit'),
    age: Number(30),
    city: String('New York'),
  }

  const CardData = [
    {
      name: String('Ankit Anand'),
      empId: Number(12345),
      company: String('Jet2 Travel & technology'),
      designation: String('Jr. Software Engineer'),
      doj: String('2024-07-16'),
    },
    {
      name: String('John Doe'),
      empId: Number(67890),
      company: String('ABC Corporation'),
      designation: String('Software Engineer'),
      doj: String('2023-05-10'),
    },
  ]
  return (
    <div className="app-container">
      <h1>horizon-web</h1>
      <UnderstandingJsx />
      <FunctionalComponent />
      <UnderstandingProps {...propsData} />
      {CardData.map((data, index) => (
        <Card key={index} {...data} />
      ))}
      {printValuesInConsole() ?? null}
      {printCoordinates() ?? null}
      {printOrderDetails() ?? null}
      {viewUserData() ?? null}
      <Counter />
      <UseReducerHooks />
      {printChaiDetails() ?? null}
    </div>
  )
}

export default App
