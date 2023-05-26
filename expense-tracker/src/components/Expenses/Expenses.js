import React,{useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

import ExpenseFilter from "./ExpenseFilter"

const Expenses = (props) => {
   
    
    const [filteredYear , setFilterYear] = useState("2020")


    const FilterChangeHandler =(selectedYear) =>{
     setFilterYear(selectedYear)
    }


  return (
  <div>
    <Card className="expenses">
    <ExpenseFilter selectedYear = {filteredYear} onChangeFilter = {FilterChangeHandler}/>
    {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
    </div>
  );
}

export default Expenses;