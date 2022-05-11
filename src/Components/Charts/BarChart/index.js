import React from "react";
import Charts from "./Charts";
import "./BarChart.css";

const BarChart = () => {
  const series = ["May", "Jun", "july"];
  const colors = ["#43A19E", "#7B43A1", "#F2317A"];
  const data = [5, 10, 15];
  return (
    <div style={{ width: "300px", height: "300px" }}>
      <Charts data={data} labels={series} colors={colors} height={250} />
    </div>
  );
};

export default BarChart;
