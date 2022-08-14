import React from "react";

export default function Footer({ width }) {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__contacts">
          <h2>Contacts</h2>
          <p>
            2019 Rootz Foundation. {width > 425 && <br />}All rights reserved
          </p>
        </div>
        <div className="footer__adress">
          <h3>Headquarters</h3>
          <p>
            1234 Taliban <br /> Los Angeles, La 1234567 <br /> (123) 456-7890
          </p>
        </div>
        <div className="footer__socials">
          <h3>Social media</h3>
          <div className="socials__container">
            <a href="">
              <img src="./Twitter.svg" alt="" />
            </a>
            <a href="">
              <img src="./Facebook.svg" alt="" />
            </a>
            <a href="">
              <img src="./Linkedin.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
