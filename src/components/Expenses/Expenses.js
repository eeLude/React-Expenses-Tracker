import React from "react";
import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterHandler = (selectedYear) => {
    //valikon valintatieto on nyt selectedYearissa
    setFilteredYear(selectedYear); //valittu vuosi päivittyy tilaan
  };

  //taulukko filtteröidään läpi objekti kerrallaan
  const filteredExpenses = props.items.filter((expense) => {
    //filtteröidään objektit joiden vuosi täsmää valitun vuoden kanssa
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      {/* renderöi filter drop down valikon */}
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
