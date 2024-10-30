import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => { 
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); //adds values from array objects
  const totalMaximum = Math.max(...dataPointValues); //save the highest value to totalMaximum

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint ) => ( //maps objects through the dataPoints array
          <ChartBar //creates a ChartBar component for each object in the array
            key={dataPoint.label} //unique identifier for component
            value={dataPoint.value} 
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        )
      )}
    </div>
  );
};

export default Chart;
