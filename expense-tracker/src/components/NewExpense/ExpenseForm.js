import React, { useState } from "react";

import './ExpenseForm.css'

function ExpenseForm(props) {

    const [enterTitle , setEnterTitle] = useState("")
    const [enterAmount , setEnterAmount] = useState("")
    const [enterDate , setEnterDate] = useState("")

     const TitleChangeHandler = (event) =>{
       setEnterTitle(event.target.value)
     };

     const AmountChangeHAndler =(event)=>{
        setEnterAmount(event.target.value)
     }

     const DateChangeHandler = (event) =>{
        setEnterDate(event.target.value)
     }

     const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate),
        }

        props.onSaveExpenseData(expenseData)
    setEnterDate("")
    setEnterAmount("")
    setEnterTitle("")
     }


    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enterTitle}  onChange={TitleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enterAmount} onChange={AmountChangeHAndler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2020-01-01" max="2025-12-31" value = {enterDate}onChange = {DateChangeHandler}/>
            </div>
        </div>

        <div className="new-expense__actions">
         <button type = "submit"> Add Button</button>
        </div>
    </form>
}

export default ExpenseForm