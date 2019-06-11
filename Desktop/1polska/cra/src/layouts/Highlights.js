import React from "react";
import "../styles/highlights.css";
import img1 from "../images/meeting-background1.JPG";
const Highlights = () => {
  return (
    <div class="highlights">
      <div class="highlights-container">
        <div class="highlights-slogans">
          <div class="czas-zjednoczyc slogan">
            Czas zjednoczyć ludzi wobec patologii systemu!
          </div>
          <div class="chcesz-zyc slogan">
            Chcesz żyć w normalnym kraju? Masz dość absurdów IIIRP? Nie jesteś
            sam!
          </div>
          <div class="counter-text slogan">
            Jest nas już <span class="counter">36 444</span> osób!
          </div>
          <div class="highlights-text">
            To my, polskie społeczeństwo, które ma już dość tego chorego
            systemu, jaki stworzyły nam tzw. "elity IIIRP". Pookrągłostołowemu,
            zabetonowanemu układowi partyjnemu i obecnej klasie politycznej już
            dziękujemy! Dość hipokryzji, obłudy i zakłamania polityków oraz
            mediów. Tu ustalimy wspólnie priorytety zmian i wreszcie połączymy
            siły żeby przywrócić w Polsce normalność. To my: normalni, zwykli
            ludzie chcący żyć uczciwie i godnie jesteśmy w Polsce większością -
            i czas to sobie uświadomić!
          </div>
        </div>
      </div>
      <div class="highlights-meetings-container">
        <div class="soonest-meeting-text">Najblizsze spotkania</div>
        <div class="soonest-meetings">
          <div class="meeting-box meeting-box-one">
            <img src={img1} alt="background" class="meeting-background" />
            <span class="meeting-city">KRAKÓW</span>
            <span class="meeting-date">Sobota, 8-06-2019, godz. 14:00</span>
            <span class="meeting-address">
              ul. Meiselsa 1, Sala 109, I piętro
            </span>
          </div>
          <div class="meeting-box meeting-box-two">
            <img src={img1} alt="background" class="meeting-background" />
            <span class="meeting-city">KATOWICE</span>
            <span class="meeting-date">Niedziela, 9-06-2019, godz. 13:00</span>
            <span class="meeting-address">
              ul. Opolska 22, Sala A, I piętro (wejście od ul. Sobieskiego)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
