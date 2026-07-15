import { useState } from 'react'

function AddExpense() {
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const handleAdd = async () => {
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
    } else {
      console.log('Something went wrong')
    }
  }

  return (
    <div className="card">
      <h2>Add Expense</h2>
      <div className="input-group">
        <input
          className="input-field"
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          className="input-field"
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="input-group">
        <input
          className="input-field"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button className="btn-primary" onClick={handleAdd}>
        Add
      </button>
    </div>
  )
}

export default AddExpense