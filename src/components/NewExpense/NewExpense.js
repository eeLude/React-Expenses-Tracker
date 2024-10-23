import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false); //input field tilamuuttuja

  const startEditingHandler = () => {
    //
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
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
