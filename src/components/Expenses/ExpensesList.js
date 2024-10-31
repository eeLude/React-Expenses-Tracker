import React from "react";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {
  if (props.items.length === 0) { 
    //if there are no expenses, return a message
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    //maps through the expenses and return an ExpenseItem component for each expense
    <div className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id} // Unique key for each ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default ExpensesList;
