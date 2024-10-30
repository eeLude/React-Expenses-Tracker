import React from "react";
import "./ChartBar.css";
const ChartBar = (props) => {
  let barFillHeight = "0%"; 
  if (props.maxValue > 0) { 
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%"; //calculates the height of the bar in percentages
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }} //sets the height of the bar
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div> 
    </div>
  );
};

export default ChartBar;
