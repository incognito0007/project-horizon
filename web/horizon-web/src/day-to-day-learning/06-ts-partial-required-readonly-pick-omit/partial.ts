interface User {
  id: number
  name: string
  email: string
}

// Partial makes all properties of the User type optional, allowing us to update only specific fields without needing to provide the entire user object.

function updateUser(user: User, updates: Partial<User>): void {
  const updatedUser = { ...user, ...updates }
  console.log('Updated User:', updatedUser)
}

const user: User = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
}

const updates: Partial<User> = {
  name: 'Alice Smith',
}

const printUser = () => {
  console.log('Original User:', user)
  updateUser(user, updates)
}

export { printUser }
