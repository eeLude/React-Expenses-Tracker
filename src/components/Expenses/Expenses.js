import React from "react";
import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";

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

  let expensesContent = <p>No expenses found.</p>; //muuttuja, josta data tuodaan sivulle

  if (filteredExpenses.length > 0) {
    //jos filtteröityä dataa löytyy, tallenetaan content muuttujaan
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id} // Unique key for each ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      {/* renderöi filter drop down valikon */}
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterHandler} />
      {expensesContent} {/*näyttää datan sivulla*/}
      {/* VAIHTOEHTOISET LOGIIKAT: */}
      {/* {filteredExpenses.length === 0 && <p>No expenses found</p>}
      {filteredExpenses.length > 0 && */}
      {/*  {filteredExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : ( */}
    </Card>
  );
};
export default Expenses;
