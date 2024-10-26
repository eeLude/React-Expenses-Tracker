import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); //kokoaa taulukon arvot muuttujaan
  const totalMaximum = Math.max(...dataPointValues); //tallentaa maksimiarvon muuttujaan

  return (
    <div className="chart">
      {props.dataPoints.map(
        (
          dataPoint //käy taulukon objekti kerrallaan läpi
        ) => (
          <ChartBar //populoi palkit
            key={dataPoint.label}
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
