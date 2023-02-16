import React from "react";

import "./ChartBar.css";

function ChartBar(props) {
  const { label, value, maxValue } = props;
  let barFillHeight = "0%";
  console.log(maxValue);
  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
    console.log(barFillHeight);
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
}

export default ChartBar;
