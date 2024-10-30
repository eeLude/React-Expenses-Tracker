import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => { 
  
  const month = props.date.toLocaleString("en-US", { month: "long" }); //changes month to long format
  const day = props.date.toLocaleString("en-US", { day: "2-digit" }); //changes day to 2-digit format
  const year = props.date.getFullYear(); //gets the year

  return (
    //returns the date in a div
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
