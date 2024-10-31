import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const dummy_expenses = [ 
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date("2022-07-14"),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date("2022-08-12") },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 300.0,
    date: new Date("2024-05-01"),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date("2024-01-09"),
  },
];


const App = () => { 
  const [expenses, setExpenses] = useState(dummy_expenses); //state hook to store the expenses
  const addExpenseHandler = (expense) => { //function to add a new expense
    setExpenses((preExpenses) => { //adds the new expense to the state
      return [expense, ...preExpenses]; //returns the new expense and the previous expenses
    });
  };

  //renders the NewExpense and Expenses components
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} /> 
      <Expenses items={expenses} />
      <p>Eemil Luodes / VAMK / BIT</p>
    </div>
  );
};

export default App;
