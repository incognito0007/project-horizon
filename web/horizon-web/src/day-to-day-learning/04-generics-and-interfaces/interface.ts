interface Chai {
  flavor: string
  price: number
  milk?: boolean
}

const masalaChai: Chai = {
  flavor: 'Masala Chai',
  price: 100,
}

interface Shop {
  readonly id: number
  name: string
}

const shop1: Shop = {
  id: 1,
  name: 'Chaiwala',
}

interface DiscountCalculator {
  calculateDiscount(price: number): number
}

const apply50: DiscountCalculator = {
  calculateDiscount(price: number): number {
    return price * 0.5
  },
}

interface TeaMachine {
  start(): void
  stop(): void
}

const machine: TeaMachine = {
  start() {
    console.log('Tea machine started')
  },
  stop() {
    console.log('Tea machine stopped')
  },
}

interface ChaiRatings {
  [flavor: string]: number
}

const ratings: ChaiRatings = {
  'Masala Chai': 4.5,
  'Ginger Chai': 4.0,
  'Lemon Chai': 3.5,
}

// suppose this interface User is defined in another file, and we want to add more properties to it without modifying the original interface definition, we can use declaration merging to achieve this.
interface User {
  name: string
}

// this is an example of declaration merging, we are adding a new property age to the existing User interface, now the User interface has both name and age properties, and we can use it to create user objects with both properties.
interface User {
  age: number
}

// now we can create user objects with both name and age properties, and the TypeScript compiler will recognize both properties as part of the User interface.
const user1: User = {
  name: 'Ankit',
  age: 30,
}

interface A {
  a: string
}
interface B {
  b: number
}

interface C extends A, B {
  c: boolean
}

const objC: C = {
  a: 'Hello',
  b: 42,
  c: true,
}

function printChaiDetails() {
  console.log(`Flavor: ${masalaChai.flavor}, Price: ${masalaChai.price}`)
  console.log(`Shop Name: ${shop1.name}, Shop ID: ${shop1.id}`)
  console.log(`Discounted Price: ${apply50.calculateDiscount(masalaChai.price)}`)
  machine.start()
  machine.stop()
  console.log(`Ratings: ${JSON.stringify(ratings)}`)
  console.log(`User: ${JSON.stringify(user1)}`)
  console.log(`Object C: ${JSON.stringify(objC)}`)
}

export { printChaiDetails }
