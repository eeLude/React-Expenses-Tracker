import React from "react";

import "./ExpensesFilter.css";

//
const ExpensesFilter = (props) => {
  //eventhandler to set selected year
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value); //selected year is passed as props to function
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* selecting from dropdown calls function and sets selected year as value */}
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
