import { useState } from 'react'
import './App.css'
import ExpenseForm from './Components/ExpenseForm'
import Navbar from './Components/Navbar'
import AddExpense from './Components/Cards/AddExpense'
import Chart from './Components/Cards/Chart'


function App() {

  return (
    <>
    <Navbar />
      <AddExpense />
      <div style={{ height: '400px'}}>
        <Chart/>
      </div>
    </>
  )
}

export default App
