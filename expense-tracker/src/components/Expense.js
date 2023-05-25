import ExpenseItem from "./ExpenseItem"
import './Expenses.css';


function Expense(props){
    return(
        <div className="expenses">
      <ExpenseItem ItemName= {props.expense[0].item} cost = {props.expense[0].cost} date= {props.expense[0].date}/>
      <ExpenseItem ItemName= {props.expense[1].item} cost = {props.expense[1].cost} date= {props.expense[0].date}/>
      <ExpenseItem ItemName= {props.expense[2].item} cost = {props.expense[2].cost} date= {props.expense[2].date}/>
      <ExpenseItem ItemName= {props.expense[3].item} cost = {props.expense[3].cost} date= {props.expense[3].date}/>
      </div>
    );
}