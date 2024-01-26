import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const Btn = () => {
  const [showForm,setShowForm]=useState(false)
  const handleBtnClick=()=>setShowForm(!showForm)

  return (
    <div className="flex items-center justify-center h-screen bg-slate-200">
      
      
         {
          showForm ? <ExpenseForm onClose={()=>setShowForm(false)}/> 
          :<DrawOutlineButton onClick={handleBtnClick}>Add Expense</DrawOutlineButton>
         }
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative w-64 h-20 text-center text-white-400 bg-slate-500 hover:bg-blue-600 hover:text-white transition-colors duration-300 ease-in-out border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
      <span className="flex items-center justify-center h-full">{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Btn;