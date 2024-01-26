import { useState } from 'react'
import './App.css'
import ExpenseForm from './Components/ExpenseForm'
import Navbar from './Components/Navbar'
function App() {

  return (
    <>
    <Navbar />
      <ExpenseForm />
    </>
  )
}

export default App
