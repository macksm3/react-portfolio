import React from "react";
import "./style.css";

function EasterEgg() {
  function showEasterEgg() {
    document.getElementById("btnSurprise").remove();
    document.getElementById("animation").style.display="block";
  }
  return (
    <div className="surprise">
      <button id="btnSurprise" onClick={showEasterEgg} >click me</button>
      <a href="http://homesmarts.biz"><img id="animation" src="./assets/img/Animation test 1.gif" alt="homeSmarts animation" /></a>
    </div>
  )
}

export default EasterEgg;
