import React from "react";
import TitleAbout from "../TitleAbout";
import Bio from "../Bio";
import Links from "../Links";
import Skills from "../Skills";
import Portfolio from "../Portfolio";
import EasterEgg from "../EasterEgg";
import "./style.css";

function Wrapper(props) {
  return (
    <main className="wrapper">
      <TitleAbout />
      <Bio />
      <Links />
      <Skills />
      <Portfolio />
      <EasterEgg />
    </main>
  );
}

export default Wrapper;
