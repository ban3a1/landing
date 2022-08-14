import React from "react";

export default function Post({ tag, title, link = "#", play, img }) {
  return (
    <div className="post">
      <div className="post__group1">
        {play ? (
          <div style={{ position: "relative" }}>
            <img src={img} alt="" />
            <a href={play}>
              <img className="play" src="./play.svg" alt="" />
            </a>
          </div>
        ) : (
          <img src={img} style={{ borderRadius: "100%" }} alt="" />
        )}
      </div>
      <div className="post__group2">
        <div>
          <span className="post__tag">
            # <span className="gray">{tag}</span>
          </span>
          <h4 className="post__title">{title}</h4>
        </div>
        <a href={link} className="post__link gray">
          see more
        </a>
      </div>
    </div>
  );
}
