import React from "react";

export default function CardButton(props) {
  return (
    <div className="CardButton">
      <span>{props.text}</span>
      <img src={props.bg} alt="" />
    </div>
  );
}
