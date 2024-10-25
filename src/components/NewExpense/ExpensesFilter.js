import React from "react";

import "./ExpensesFilter.css";

// luo filtervalikon ja lähettää valintatiedon eteenpäin
const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value); //valikon valinta siirtyy propsille
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* valikosta painaessa kutsuu dropdownChangeHandleria */}
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
