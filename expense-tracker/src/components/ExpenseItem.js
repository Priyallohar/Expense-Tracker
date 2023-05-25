import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"


function ExpenseItem(Atr) {
  

    return (
       
        <div className='expense-item'> 
        <ExpenseDate Date = {Atr.date}/> 
        <div className='expense-item__description'>
        <h3>{Atr.ItemName}</h3>
        <div className='expense-item__price'>{Atr.cost}</div> 
        </div>

        </div>

    );
}

export default ExpenseItem