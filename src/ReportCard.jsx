import React, { useState } from 'react'
import initialData from './data'
import './ReportCard.css'

// Single student row
const StudentRow = ({ student, index, onMarksChange }) => {
  const isPassing = student.marks >= 40

  return (
    <tr className="student-row">
      <td className="td-index">{index + 1}</td>
      <td className="td-name">{student.name}</td>
      <td className="td-marks">
        <input
          type="number"
          value={student.marks}
          min={0}
          max={100}
          onChange={(e) => onMarksChange(index, e.target.value)}
          className="marks-input"
        />
      </td>
      <td className="td-status">
        <span className={`badge ${isPassing ? 'badge-pass' : 'badge-fail'}`}>
          {isPassing ? 'PASS' : 'FAIL'}
        </span>
      </td>
    </tr>
  )
}

// Stat card
const StatCard = ({ label, value, accent }) => (
  <div className="stat-card" style={{ borderTop: `3px solid ${accent}` }}>
    <span className="stat-value">{value}</span>
    <span className="stat-label">{label}</span>
  </div>
)

// Main component
const ReportCard = () => {
  const [students, setStudents] = useState(initialData)
  const [name, setName] = useState('')
  const [marks, setMarks] = useState('')
  const [error, setError] = useState('')

  // Add student
  const handleAdd = (e) => {
    e.preventDefault()
    setError('')

    if (!name.trim()) return setError('Please enter a student name.')
    if (marks === '' || isNaN(Number(marks))) return setError('Please enter valid marks.')
    if (Number(marks) < 0 || Number(marks) > 100) return setError('Marks must be between 0 and 100.')

    setStudents((prev) => [...prev, { name: name.trim(), marks: Number(marks) }])
    setName('')
    setMarks('')
  }

  // Update marks inline
  const handleMarksChange = (index, value) => {
    setStudents((prev) =>
      prev.map((s, i) =>
        i === index ? { ...s, marks: value === '' ? '' : Number(value) } : s
      )
    )
  }

  // Stats
  const total = students.length
  const passed = students.filter((s) => s.marks >= 40).length
  const failed = total - passed
  const average =
    total > 0
      ? (students.reduce((acc, s) => acc + Number(s.marks || 0), 0) / total).toFixed(2)
      : '0.00'

  return (
    <div className="rc-wrapper">
      <header className="rc-header">
        <h1 className="rc-title">Report Card</h1>
        <p className="rc-subtitle">Track, update and manage student results</p>
      </header>

      {/* Stats */}
      <div className="stats-grid">
        <StatCard label="Total Students" value={total} accent="#6c63ff" />
        <StatCard label="Passed" value={passed} accent="#22c55e" />
        <StatCard label="Failed" value={failed} accent="#ef4444" />
        <StatCard label="Avg. Marks" value={average} accent="#f59e0b" />
      </div>

      {/* Add student form */}
      <div className="form-card">
        <h2 className="form-title">Add New Student</h2>
        <form onSubmit={handleAdd} className="add-form">
          <input
            type="text"
            placeholder="Student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
          <input
            type="number"
            placeholder="Marks (0–100)"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            className="form-input"
            min={0}
            max={100}
          />
          <button type="submit" className="add-btn">Add Student</button>
        </form>
        {error && <p className="error-msg">{error}</p>}
      </div>

      {/* Student table */}
      <div className="table-card">
        <h2 className="form-title">Students</h2>
        {students.length === 0 ? (
          <p className="no-students">No students yet. Add one above!</p>
        ) : (
          <table className="student-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Marks</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <StudentRow
                  key={index}
                  student={student}
                  index={index}
                  onMarksChange={handleMarksChange}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default ReportCard
