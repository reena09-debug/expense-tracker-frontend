import { useState } from 'react'
import Input from './Input'

function AddExpense() {
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleAdd = async () => {
    setErrorMessage('')
    if (!category || !amount || !date) {
    setErrorMessage('All fields are required.')
    return
  }

    const response = await fetch('http://localhost:5069/api/Expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        category: category,
        amount: parseFloat(amount),
        date: date,
      }),
    })

    if (response.ok) {
      console.log('Expense added successfully!')
      setCategory('')
      setAmount('')
      setDate('')
    } else {
      const message = await response.text()
      setErrorMessage(message)
    }
  }

  return (
    <div className="card">
      <h2>Add Expense</h2>
      <Input type="text" placeholder="Category" value={category} onChange={setCategory} />
      <Input type="number" placeholder="Amount" value={amount} onChange={setAmount} />
      <Input type="date" placeholder="" value={date} onChange={setDate} />
      {errorMessage && <div className="error-text">{errorMessage}</div>}
      <button className="btn-primary" onClick={handleAdd}>
        Add
      </button>
    </div>
  )
}

export default AddExpense