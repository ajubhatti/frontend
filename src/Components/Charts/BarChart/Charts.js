import React from "react";

const Charts = ({ data }) => {
  const barChartData = data.map((x, index) => {
    return (
      <div class="col-3" key={index}>
        <div class="progress-vertical rounded mb-2">
          <div
            class="bg-primary rounded-bottom"
            style={{ height: `${x.value}%` }}
          ></div>
        </div>
        <div class="text-center">
          <h4 class="small mb-0">{x.label}</h4>
        </div>
      </div>
    );
  });

  return (
    <div class="row">
      {barChartData.length > 0 ? barChartData : "No Data Available"}
    </div>
  );
};

export default Charts;
