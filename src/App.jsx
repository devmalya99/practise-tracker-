import { useState } from 'react'
import './App.css'
import ExpenseForm from './Components/ExpenseForm'
import Navbar from './Components/Navbar'
import AddExpense from './Components/AddExpense'


function App() {

  return (
    <>
    <Navbar />
      <AddExpense />
    </>
  )
}

export default App
