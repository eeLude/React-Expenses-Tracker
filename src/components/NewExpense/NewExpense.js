import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false); //state hook for newexpenseform

  //eventhandler to set editing state to true
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  //eventhandler to set editing state to false
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  //function to save the expense data
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { //create object with entered data
      ...enteredExpenseData,
      id: Math.random().toString(), //add id to data object
    };
    props.onAddExpense(expenseData); //pass the data to the parent component
  };

  //if not editing, return a button to add new expense
  if (isEditing === false) {
    return (
      <div className="new-expense">
        <button type="button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      </div>
    );
  }

  //if editing, return the form
  if (isEditing === true) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler} //pass the function to save the data
          onCancel={stopEditingHandler} //pass the function to cancel the form
        />
      </div>
    );
  }
};

export default NewExpense;
