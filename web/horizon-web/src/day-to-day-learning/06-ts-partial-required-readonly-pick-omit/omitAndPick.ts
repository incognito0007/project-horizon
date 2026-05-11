type User = {
  id: number
  name: string
  email: string
  age: number
}

// Omit allows us to create a new type by omitting specific properties from the User type, which can be useful when we want to exclude certain fields from a type definition.
type UserWithoutId = Omit<User, 'id'>

// Pick allows us to create a new type by picking specific properties from the User type, which can be useful when we want to create a type that only includes certain fields from an existing type.
type UserWithNameOrAge = Pick<User, 'name' | 'age'>

// Example usage of Omit utility type --> The UserWithoutId type will have all the properties of the User type except for the id property, which is omitted.
const user1: UserWithoutId = {
  name: 'Alice',
  email: 'alice@example.com',
  age: 30,
}

const user2: UserWithNameOrAge = {
  name: 'Alice',
  age: 30,
}

function printUserWithoutId(user: UserWithoutId): void {
  console.log('User without ID:', user)
}

function printUserWithNameOrAge(user: UserWithNameOrAge): void {
  console.log('User with Name or Age:', user)
}

const printUserWithoutIdWrapper = () => {
  printUserWithoutId(user1)
}

const printUserWithNameOrAgeWrapper = () => {
  printUserWithNameOrAge(user2)
}

export { printUserWithoutIdWrapper, printUserWithNameOrAgeWrapper }
