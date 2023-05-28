import React,{useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './newExpense.css'

const NewExpense = (props) => {
   const [isEditing, setIsEditing] = useState(false)
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setIsEditing(false)
  };

  const startEditingHnadler = () =>{
   setIsEditing(true)
  }

  const stopeditingHandler =()=>{
   setIsEditing(false)
  }

  return (
    <div className='new-expense'>
      {!isEditing&&<button onClick={startEditingHnadler}> Add Expense</button>}
      {isEditing&&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel = {stopeditingHandler}/>}
    </div>
  );
};

export default NewExpense;