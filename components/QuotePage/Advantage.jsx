import React from "react";

export default function Advantage({ img, text }) {
  return (
    <div className="advantage">
      <img src={img} alt="" />
      <h5>{text}</h5>
    </div>
  );
}
