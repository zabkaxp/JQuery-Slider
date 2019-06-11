import React from "react";
import "../styles/navigation.css";
import img2 from "../images/youtube-logo.jpg";
import img3 from "../images/facebook-logo.jpg";

const Navigation = () => {
  return (
    <div>
      <nav class="mainnav" role="navigation">
        <div class="menu-glowne-container">
          <ul class="menu nav-list">
            <li id="o-co-chodzi" class="menu-item ">
              <a href="#">
                <span class="menu-image-title">O co chodzi</span>
              </a>
            </li>
            <li id="potulaty" class="menu-item ">
              <a href="#">
                <span class="menu-image-title">Postulaty</span>
              </a>
            </li>
            <li id="reprezentanci" class="menu-item ">
              <a href="#">
                <span class="menu-image-title">Reprezentanci</span>
              </a>
            </li>
            <li id="kontakt" class="menu-item ">
              <a href="#">
                <span class="menu-image-title">Kontakt</span>
              </a>
            </li>
            <li id="zaloguj" class="menu-item ">
              <a href="#">
                <span class="menu-image-title">Zaloguj</span>
              </a>
            </li>
            <li id="facebook" class="menu-item">
              <a target="_blank" href="https://www.facebook.com/1polska/">
                <img
                  width="30"
                  height="30"
                  src={img3}
                  class="menu-image"
                  alt=""
                />
              </a>
            </li>
            <li id="youtube" class="menu-item">
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCb5mIKEv944_VLTOcdwH_MA/videos"
              >
                <img
                  width="30"
                  height="30"
                  src={img2}
                  class="menu-image"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
