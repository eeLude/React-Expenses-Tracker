import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //state hooks for the form fields
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //event handlers for the form fields
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); //sets the entered title to the state
   
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value); //sets the entered amount to the state
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value); //sets the entered date to the state
  };

  //event handler for the form submission
  const submitHandler = (event) => {
    event.preventDefault(); //prevents the page from reloading

    //object to store the form data
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
   
    //calls the function passed as props from NewExpense.js
    props.onSaveExpenseData(expenseData);

    //clears the form fields
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  //renders the form
  return ( 
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text"
            value={enteredTitle} 
            onChange={titleChangeHandler} //calls the titleChangeHandler function when the input changes
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            step="2024-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expenses</button>
        <button type="button" onClick={props.onCancel}> 
          Cancel
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
