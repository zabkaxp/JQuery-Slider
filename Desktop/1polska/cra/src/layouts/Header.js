import React from "react";
import "../styles/header.css";
import Navigation from "../components/Navigation";
import img1 from "../images/flaga.jpg";
import img2 from "../images/logo.png";

const Header = () => {
  return (
    <div>
      <header class="site-header">
        <div class="header-navigation">{<Navigation />}</div>
        <div class="header-logo-container">
          <div class="header-logo-box">
            <img class="header-logo" src={img2} alt="1Polska logo" />
          </div>
          <div class="text-under-logo">Oddolna inicjatywa społeczna</div>
        </div>
        <img
          class="background-header-pic"
          src={img1}
          alt="background polish flag"
        />
      </header>
    </div>
  );
};
export default Header;
