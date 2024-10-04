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
    setFilteredYear(selectedYear); //valintatieto siirtyy useStateen
  };
  //datakokonaisuus jaetaan item komponentille jotta saadaan lajiteltua data ryhmiin
  return (
    <Card className="expenses">
      {/*Renderöi filter valikon. valikon valinta(event value) siirtyy propsina filterHandlerille */}
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterHandler} />
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
