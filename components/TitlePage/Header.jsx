import React, { useState } from "react";

export default function Header() {
  const [active, setActive] = useState("");

  const handleBurger = () => {
    if (active === "active") {
      setActive("");
    } else {
      setActive("active");
    }
  };

  return (
    <div className={`header ${active}`}>
      <div className="header__content">
        <img src="./logo.svg" alt="" />
        <nav className="header__nav">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Our mission</a>
          </li>
          <li>
            <a href="">Places</a>
          </li>
          <li>
            <a href="">Team</a>
          </li>
        </nav>
        <a className="header__btn">Apply</a>
        {active ? (
          <img
            className="burger"
            src="./close.svg"
            alt=""
            onClick={handleBurger}
          />
        ) : (
          <img
            className="burger"
            src="./burger.svg"
            alt=""
            onClick={handleBurger}
          />
        )}
      </div>
    </div>
  );
}
