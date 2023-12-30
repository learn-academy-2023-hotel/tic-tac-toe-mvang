import React from "react";

const Square = (props) => {
  const getSquareStyle = () => {
    if (props.value === "X") {
      return { color: "white" };
    } else if (props.value === "O") {
      return { color: "#C19A6B" };
    }
    return {};
  };
  return (
    // <div className="square-container">
      <div className="square" onClick={props.onClick} style={getSquareStyle()}>
        {props.value}
      </div>
    // </div>
  );
};

export default Square;
