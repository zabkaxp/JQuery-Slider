import React from "react";
import "../styles/demands.css";
import img1 from "../images/video-podatki.JPG";
import img2 from "../images/video-ordynacja.JPG";
import img3 from "../images/video-banki.JPG";

const Demands = () => {
  return (
    <div class="demands">
      <div class="demands-container">
        <div class="demands-conatiner-text">Priorytety zmian</div>
        <section class="demands-boxes-container">
          <div class="demands-row demands-row-first">
            <div class="demands-box demands-box-1">
              <div class="demands-img-container">
                <img src={img1} alt="link to video" class="demands-img" />
              </div>
              <div class="demands-title">Niższe i prostsze podatki</div>
              <div class="demands-description">
                Trzeba obniżyć i uprościć podatki, trzeba oddać ludziom
                pieniądze, które zabiera im aparat państwa!
              </div>
              <div class="button-container">
                <div class="button">
                  <div class="button-text-box">Dowiedz się więcej</div>
                </div>
              </div>
            </div>
            <div class="demands-box demands-box-2">
              <div class="demands-img-container">
                <img src={img2} alt="link to video" class="demands-img" />
              </div>
              <div class="demands-title">Nowa ordynacja wyborcza</div>
              <div class="demands-description">
                Należy wprowadzić nową ordynację wyborczą zamiast tej
                niekonstytucyjnej farsy z listami partyjnymi i progiem
                wyborczym.
              </div>
              <div class="button-container">
                <div class="button">
                  <div class="button-text-box">Dowiedz się więcej</div>
                </div>
              </div>
            </div>
            <div class="demands-box demands-box-3">
              <div class="demands-img-container">
                <img src={img3} alt="link to video" class="demands-img" />
              </div>
              <div class="demands-title">
                Zakaz kreacji pieniądza jako długu przez banki
              </div>
              <div class="demands-description">
                Trzeba uniemożliwić bankom okradanie ludzi za pomocą mechanizmu
                kreacji pieniądza bezgotówkowego w systemie bankowym.
              </div>
              <div class="button-container">
                <div class="button">
                  <div class="button-text-box">Dowiedz się więcej</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Demands;
