import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  
  //state hook to store the selected year
  const [filteredYear, setFilteredYear] = useState("2022"); 

  //event handler for the filter drop down
  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear); //sets the selected year to the state, passed as props from ExpensesFilter
  };

  //filters the expenses based on the selected year
  const filteredExpenses = props.items.filter((expense) => {
    //returns the expenses with the same year as the selected year
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return ( //renders the filter drop down, chart, and list of expenses
    <Card className="expenses">
      {/* renderöi filter drop down valikon */}
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
