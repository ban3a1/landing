import React from "react";

export default function TeamPage() {
  return (
    <div className="container team-page">
      <div className="team-page__header">
        <h2 className="title">Our top team</h2>
        <p>Learn more about how you can save our planet's nature. </p>
      </div>

      <div className="team-page__content">
        <div className="team-page__loops">
          <img src="./loop.svg" alt="" />
          <img src="./loop.svg" alt="" />
        </div>
        <div className="team-page__team">
          <img src="./team1.png" alt="" />
          <img src="./team2.png" alt="" />
          <img src="./team3.png" alt="" />
        </div>
      </div>
    </div>
  );
}
