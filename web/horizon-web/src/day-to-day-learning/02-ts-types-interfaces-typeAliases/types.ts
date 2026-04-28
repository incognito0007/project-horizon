const name: string = 'Horizon Web' // String type variable declaration and initialization
const id: number = 12345 // Number type variable declaration and initialization
const isActive: boolean = true // Boolean type variable declaration and initialization
const hobbies: string[] = ['Coding', 'Traveling', 'Cooking'] // Array of strings type variable declaration and initialization

// let obj: any = { x: 20 } // Any type variable declaration and initialization

function add(a: number, b: number): number {
  return a + b
}

function printValuesInConsole() {
  console.log(name)
  console.log(id)
  console.log(isActive)
  console.log(hobbies)
  // console.log(obj)
  // obj = 'Now I am a string'
  // console.log(obj)
  console.log(add(5, 10))
}

export { printValuesInConsole }
