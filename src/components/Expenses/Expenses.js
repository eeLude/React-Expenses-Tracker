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

  return (
    <Card className="expenses">
      {/*Renderöi filter valikon. valikon valinta(event value) siirtyy propsina(onChangeFilter) filterHandlerille */}
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterHandler} />

      {/*renderöi ExpenseItem-komponentille yhden objektin kerrallaan taulukosta*/}
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id} //erottaa komponentit paremmin toisistaan ohjelmalle
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
