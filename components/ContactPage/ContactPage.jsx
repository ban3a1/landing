import React from "react";

export default function ContactPage() {
  return (
    <div className="container">
      <div className="contact-page">
        <div className="contact-page__text">
          <h2 className="title">Get started today!</h2>
          <p>
            Learn more about how you can save our planet's nature. From smart
            consumption to switching to renewable energy, each of us can do our
            part to save the planet.
          </p>
        </div>
        <div className="contact-page__form">
          <div className="contact-page__decoration">
            <img src="./leaf.svg" alt="" />
            <img src="./leaf2.svg" alt="" className="leaf--sm" />
          </div>
          <h3 className="title--sm">Log in</h3>
          <div className="contact-page__inputs">
            <input
              className="contanct-page__input"
              type="text"
              placeholder="Name"
            />
            <input
              className="contanct-page__input"
              type="text"
              placeholder="Email"
            />
            <a className="btn btn--login">Book a demo</a>
          </div>
        </div>
      </div>
    </div>
  );
}
