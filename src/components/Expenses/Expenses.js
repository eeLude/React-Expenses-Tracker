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
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default Expenses;
