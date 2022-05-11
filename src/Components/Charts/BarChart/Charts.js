import React from "react";

const Charts = (props) => {
  const data = props.data;

  let max = 0;
  for (var i = data.length; i--; ) {
    if (data[i] > max) {
      max = data[i];
    }
  }

  return (
    <div className={"Charts"}>
      <div
        className={"Charts--serie"}
        style={{ height: props.height ? props.height : "auto" }}
      >
        {data.map((item, itemIndex) => {
          var color = props.colors[itemIndex],
            style,
            size = (item / max) * 100;

          style = {
            backgroundColor: color,
            opacity: item / max + 0.05,
            zIndex: item,
          };

          style["height"] = size + "%";
          return (
            <div className={"Charts--item "} style={style} key={itemIndex}>
              <b style={{ color: color }}>{item}</b>
              <label>{props.labels[itemIndex]}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Charts;
