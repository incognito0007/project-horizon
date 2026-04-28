type User = {
  id: number
  name: string
  readonly organization: string
  email: string
  team: string
  teamLead: string
}

const users: User[] = [
  {
    id: 479,
    name: 'Ankit',
    organization: 'J2TT',
    email: 'ankit@example.com',
    team: 'Frontend',
    teamLead: 'Satyarth',
  },
  {
    id: 480,
    name: 'Satyarth',
    organization: 'J2TT',
    email: 'satyarth@example.com',
    team: 'Frontend',
    teamLead: 'Satyarth',
  },
]

interface ApiResponse {
  success: boolean
  successMessage?: string
  errorMessage?: string
  data?: User
}

function fetchUserData(userId: number): ApiResponse {
  // Simulating an API response
  const user = users.find(u => u.id === userId)
  if (user) {
    return {
      success: true,
      successMessage: 'User data fetched successfully.',
      data: user,
    }
  } else {
    return {
      success: false,
      errorMessage: 'User not found.',
    }
  }
}

function viewUserData() {
  const response = fetchUserData(480)
  if (response.success) {
    console.log(response.successMessage)
    console.log(response.data)
  } else {
    console.error(response.errorMessage)
  }
}

export { viewUserData }
