import React from "react"
import './newExpense.css'
import ExpenseForm from "./ExpenseForm"


function NewExpense(props){
    const SaveExpenseDataHandlers = (enetredExpenseData) => {
     const expenseData = {
        ...enetredExpenseData, id: Math.random().toString()
     };

     console.log(expenseData);
     props.onSaveExpense(expenseData)
    }



   return <div className="new-expense">
    <ExpenseForm onSaveExpenseData ={SaveExpenseDataHandlers}>

    </ExpenseForm>
   </div>
}

export default NewExpense