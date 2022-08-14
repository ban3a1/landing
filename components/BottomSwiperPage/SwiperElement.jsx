import React from "react";

export default function SwiperElement({ url, title, text }) {
  return (
    <div className="swiper-element">
      <img src={url} alt="" />
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
}
