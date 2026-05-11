import { useState } from 'react'
import { employeeData } from './PractiseData'
import './PractiseApp.css'

export default function PractiseApp() {
  const [emp, setEmp] = useState(employeeData)
  const [showForm, setShowForm] = useState(false)
  const [newEmp, setNewEmp] = useState({
    firstName: '',
    lastname: '',
    age: 0,
    city: '',
    company: '',
    designation: '',
    doj: '',
  })
  const [showAddEmpBtn, setShowAddEmpBtn] = useState(true)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEmp([newEmp, ...emp])
    setNewEmp({
      firstName: '',
      lastname: '',
      age: 0,
      city: '',
      company: '',
      designation: '',
      doj: '',
    })
    setShowForm(false)
    setShowAddEmpBtn(true)
  }

  return (
    <div className="practise-app-container">
      <h1>Practise App</h1>
      {emp.map((employee, index) => (
        <div key={index} className="employee-card">
          <h2>
            {employee.firstName} {employee.lastname}
          </h2>
          <p>Age: {employee.age}</p>
          <p>City: {employee.city}</p>
          <p>Company: {employee.company}</p>
          <p>Designation: {employee.designation}</p>
          <p>DOJ: {employee.doj}</p>

          <button
            className="remove-employee"
            onClick={() => setEmp([...emp.filter((_, i) => i !== index)])}
          >
            Remove Employee
          </button>
        </div>
      ))}
      {showForm && (
        <div className="add-form">
          <form className="add-employee-form" onSubmit={handleSubmit}>
            <div className="form-design">
              <label htmlFor="firstName">First Name*</label>
              <input
                id="firstName"
                value={newEmp.firstName}
                onChange={e => setNewEmp({ ...newEmp, firstName: e.target.value })}
                placeholder="First Name"
                required
              />
            </div>

            <div className="form-design">
              <label htmlFor="lastName">Last Name*</label>
              <input
                id="lastName"
                value={newEmp.lastname}
                onChange={e => setNewEmp({ ...newEmp, lastname: e.target.value })}
                placeholder="Last Name"
                required
              />
            </div>
            <div className="form-design">
              <label htmlFor="age">Age*</label>
              <input
                id="age"
                type="number"
                value={newEmp.age}
                onChange={e => setNewEmp({ ...newEmp, age: Number(e.target.value) })}
                placeholder="Age"
                required
              />
            </div>
            <div className="form-design">
              <label htmlFor="city">City*</label>
              <input
                id="city"
                value={newEmp.city}
                onChange={e => setNewEmp({ ...newEmp, city: e.target.value })}
                placeholder="City"
                required
              />
            </div>
            <div className="form-design">
              <label htmlFor="company">Company*</label>
              <input
                id="company"
                value={newEmp.company}
                onChange={e => setNewEmp({ ...newEmp, company: e.target.value })}
                placeholder="Company"
                required
              />
            </div>
            <div className="form-design">
              <label htmlFor="designation">Designation*</label>
              <input
                id="designation"
                value={newEmp.designation}
                onChange={e => setNewEmp({ ...newEmp, designation: e.target.value })}
                placeholder="Designation"
                required
              />
            </div>
            <div className="form-design">
              <label htmlFor="doj">DOJ*</label>
              <input
                id="doj"
                value={newEmp.doj}
                onChange={e => setNewEmp({ ...newEmp, doj: e.target.value })}
                placeholder="DOJ"
                required
              />
            </div>
            <button
              className="form-btn-add-employee"
              type="submit"
            >
              Add Employee
            </button>
            <button
              className="form-btn-cancel"
              type="button"
              onClick={() => {
                setShowForm(false)
                setShowAddEmpBtn(true)
              }}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
      {showAddEmpBtn && (
        <button
          className="add-employee"
          onClick={() => {
            setShowForm(true)
            setShowAddEmpBtn(false)
          }}
        >
          Add Employee
        </button>
      )}
    </div>
  )
}
