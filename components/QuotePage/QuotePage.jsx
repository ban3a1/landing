import React from "react";
import Advantage from "./Advantage";

export default function QuotePage() {
  return (
    <div className="container container--quote">
      <div className="quote-page">
        <div className="quote-page__background">
          <div className="background-sm">
            <img className="left-sm" src="./left-sm/left.svg" alt="" />
            <img className="right-sm" src="./right-sm/right.svg" alt="" />
          </div>
          <img className="left" src="./left.svg" alt="" />
          <div className="quote-page__circle"></div>
          <img className="right" src="./right.svg" alt="" />
        </div>
        <div className="quote-page__content">
          <h3 className="title">
            The scale of the challenges facing our planet can seem daunting, but
            we can all do something.
          </h3>
          <hr className="divider" />
          <div className="advantages">
            <Advantage img={"./adv1.svg"} text={"Assets value COMPOSer"} />
            <Advantage img={"./adv2.svg"} text={"GRAPH BUDGET ANALYZER"} />
            <Advantage img={"./adv3.svg"} text={"MONTHLY AVG. REVENUE"} />
          </div>
        </div>
      </div>
    </div>
  );
}
