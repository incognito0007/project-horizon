function apiResponseWrapper<T>(data: T, status: number, message: string) {
  return {
    status,
    message,
    data,
  }
}

const userResponse1 = apiResponseWrapper(
  { name: 'Alice', age: 30 },
  200,
  'User data fetched successfully'
)
const userResponse2 = apiResponseWrapper(
  ['Alice', 'Bob', 'Charlie'],
  200,
  'User list fetched successfully'
)
const userResponse3 = apiResponseWrapper(
  'User created successfully',
  201,
  'User creation successful'
)
const userResponse4 = apiResponseWrapper(12345, 200, 'User ID fetched successfully')
const userResponse5 = apiResponseWrapper(true, 200, 'User active status fetched successfully')

function printApiResponseDetails() {
  console.log(userResponse1)
  console.log(userResponse2)
  console.log(userResponse3)
  console.log(userResponse4)
  console.log(userResponse5)
}

export { printApiResponseDetails }
