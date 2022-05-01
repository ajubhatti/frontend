import React from "react";

const Widget = ({ title, children }) => {
  return (
    <div className="widget widget-navigation">
      <h4 className="widget-title">{title}</h4>
      {children}
    </div>
  );
};

export default Widget;
