const name: string = 'Horizon Web' // String type variable declaration and initialization
const id: number = 12345 // Number type variable declaration and initialization
const isActive: boolean = true // Boolean type variable declaration and initialization
const hobbies: string[] = ['Coding', 'Traveling', 'Cooking'] // Array of strings type variable declaration and initialization

// let obj: any = { x: 20 } // Any type variable declaration and initialization

function add(a: number, b: number): number {
  // Function declaration with parameter types and return type
  return a + b
}

let user: { name: string; age: number; bio: string } // Object type variable declaration and initialization
user = { name: 'Alice', age: 30, bio: 'Software Developer' }

function printValuesInConsole() {
  console.log(name)
  console.log(id)
  console.log(isActive)
  console.log(hobbies)
  // console.log(obj)
  // obj = 'Now I am a string'
  // console.log(obj)
  console.log(add(5, 10))
  console.log(user)
  user.age = 31 // Modifying the age property of the user object
  console.log(user)
  user = { name: 'Bob', age: 25, bio: 'Graphic Designer' } // Reassigning the user variable with a new object
  console.log(user)
}

export { printValuesInConsole }
