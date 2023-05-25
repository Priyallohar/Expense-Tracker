
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expense = [{
    id:1,
    item: "product one",
    cost: "29$",
    date: new Date(2022 , 1, 3)

  },{
    id:2,
    item: "product two",
    cost: "30$",
    date: new Date(2022 , 1, 4)

  },{
    id:3,
    item: "product three",
    cost: "31$",
    date: new Date(2022 , 1, 5)

  },{
    id:4,
    item: "product four",
    cost: "32$",
    date: new Date(2022 , 1, 6)

  }
]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem ItemName= {expense[0].item} cost = {expense[0].cost} date= {expense[0].date}/>
      <ExpenseItem ItemName= {expense[1].item} cost = {expense[1].cost} date= {expense[0].date}/>
      <ExpenseItem ItemName= {expense[2].item} cost = {expense[2].cost} date= {expense[2].date}/>
      <ExpenseItem ItemName= {expense[3].item} cost = {expense[3].cost} date= {expense[3].date}/>
    </div>
  );
}
export default App;
