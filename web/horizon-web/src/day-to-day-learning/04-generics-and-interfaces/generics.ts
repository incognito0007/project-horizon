function wrapInArray<T>(item: T): T[] {
  return [item]
}

wrapInArray(5) // returns [5]
wrapInArray('Hello') // returns ['Hello']
wrapInArray({ name: 'Alice', age: 30 }) // returns [{ name: 'Alice', age: 30 }]

function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second]
}

pair(1, 'one') // returns [1, 'one']
pair(true, { name: 'Bob' }) // returns [true, { name: 'Bob' }]

interface Box<T> {
  content: T
}

interface info {
  name: string
  age: number
}

const numberBox: Box<number> = { content: 42 }
const stringBox: Box<string> = { content: 'Hello' }
const objectBox: Box<info> = {
  content: { name: 'Alice', age: 30 },
}

// Generic interface for API response
interface ApiPromise<T> {
  status: number
  data: T
}

// Example usage of ApiPromise with a specific type
const res: ApiPromise<{ flavor: string }> = {
  status: 200,
  data: { flavor: 'Vanilla' },
}

function printGenericsDetails() {
  console.log(wrapInArray(5))
  console.log(wrapInArray('Hello'))
  console.log(wrapInArray({ name: 'Alice', age: 30 }))
  console.log(pair(1, 'one'))
  console.log(pair(true, { name: 'Bob' }))
  console.log(numberBox)
  console.log(stringBox)
  console.log(objectBox)
  console.log(res)
}

export { printGenericsDetails }
