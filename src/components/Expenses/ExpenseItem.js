import React, { useState } from "react"; //librarystä importattu spessufunktio
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); // mahdollistaa titlen vaihtumisen

  const clickHandler = () => {
    //muuttaa titlen ja logittaa kutsuttaessa
    setTitle("Updated!");
    console.log(title);
  };

  return (
    // luo "raamit" käyttäen muita komponentteja apuna johon data liitetään
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
