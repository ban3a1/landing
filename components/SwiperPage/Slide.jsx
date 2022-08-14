import React from "react";

export default function Slide({ color, text, title }) {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="slide__container"
    >
      <div className="slide">
        <div className="slide__text">
          <h2 className="title">{title}</h2>
          <p>{text}</p>
        </div>
        <div className="slide__figures">
          <div className="slide__figure1"></div>
          <div className="slide__figure2"></div>
        </div>
      </div>
    </div>
  );
}
