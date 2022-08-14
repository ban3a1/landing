import React from "react";

export default function Content() {
  return (
    <div className="container">
      <div className="title-page__content">
        <div className="title-page__group1">
          <img src="./title.svg" alt="" />
          <p>
            The scale of the challenges facing our planet can seem daunting, but
            we can all do something.
          </p>
          <div className="search">
            <div className="search__group1">
              <img className="search__img" src="./pos.svg" alt="" />
              <input
                className="search__input"
                type="text"
                placeholder="Find the place to help"
              />
            </div>
            <a className="btn btn--search" href="">
              Search
            </a>
          </div>
        </div>
        <div className="title-page__group2">
          <img src="./parrot.svg" alt="" className="parrot" />
          <div className="members">
            <img src="./members.svg" alt="" className="members__bg" />
            <img src="./icon.svg" alt="" className="members__icon" />
            <h2>Members</h2>
            <span>29 128</span>
          </div>
        </div>
      </div>
    </div>
  );
}
