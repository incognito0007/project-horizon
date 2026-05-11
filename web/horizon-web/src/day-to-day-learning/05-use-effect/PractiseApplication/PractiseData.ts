interface Employee {
  firstName: string
  lastname: string
  age: number
  city: string
  company: string
  designation: string
  doj: string
}

export const employeeData: Employee[] = [
  {
    firstName: 'Ankit',
    lastname: 'Anand',
    age: 30,
    city: 'New York',
    company: 'Jet2 Travel & technology',
    designation: 'Jr. Software Engineer',
    doj: '2024-07-16',
  },
  {
    firstName: 'John',
    lastname: 'Doe',
    age: 28,
    city: 'Los Angeles',
    company: 'ABC Corporation',
    designation: 'Software Engineer',
    doj: '2023-05-10',
  },
  {
    firstName: 'Jane',
    lastname: 'Smith',
    age: 35,
    city: 'Chicago',
    company: 'XYZ Inc',
    designation: 'Senior Software Engineer',
    doj: '2022-11-20',
  },
]
