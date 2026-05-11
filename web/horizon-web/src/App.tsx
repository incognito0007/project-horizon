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
import { printGenericsDetails } from './day-to-day-learning/04-generics-and-interfaces/generics'
import { printApiResponseDetails } from './day-to-day-learning/04-generics-and-interfaces/apiResponseWrapper'
import PractiseApp from './day-to-day-learning/05-use-effect/PractiseApplication/PractiseApp'
import UseEffectHook from './day-to-day-learning/05-use-effect/UseEffectHook'
import UseEffectChangingDate from './day-to-day-learning/05-use-effect/UseEffectChangingDate'
import UseEffectChallenge from './day-to-day-learning/05-use-effect/UseEffectChallenge'
import UseEffectCleanupFunction from './day-to-day-learning/05-use-effect/UseEffectCleanupFunction'
// import HowNotToFetchApi from './day-to-day-learning/05-use-effect/PokemonCard/HowNotToFetchApi'
import FetchApiData from './day-to-day-learning/05-use-effect/PokemonCard/FetchApiData'
import PokemonApp from './day-to-day-learning/05-use-effect/PokemonCard/PokemonApp'

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
      {printGenericsDetails() ?? null}
      {printApiResponseDetails() ?? null}
      <PractiseApp />
      <UseEffectHook />
      <UseEffectChangingDate />
      <UseEffectChallenge />
      <UseEffectCleanupFunction />
      {/* <HowNotToFetchApi /> Not adding this component on App.tsx, because it will cause an
      infinite loop of fetching data and updating state, causing performance issues and potentially
      crashing the application. You can see in your network tab that the API is being called
      multiple times, which is not ideal. This is because the fetch call is inside the component
      body, and every time the component re-renders, it triggers a new fetch call. this will lead to
      an infinite loop of fetching data and updating state, causing performance issues and
      potentially crashing the application. */}
      <FetchApiData />
      <PokemonApp />
    </div>
  )
}

export default App
