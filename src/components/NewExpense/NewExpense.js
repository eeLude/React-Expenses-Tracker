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

  //eventhandler to render user input
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), //add id to data object
    };
    props.onAddExpense(expenseData);
  };

  if (isEditing === false) {
    return (
      <div className="new-expense">
        <button type="button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      </div>
    );
  }

  if (isEditing === true) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      </div>
    );
  }
};

export default NewExpense;
