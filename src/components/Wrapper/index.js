import React from "react";
import Bio from "../Bio";
import Links from "../Links";
import Skills from "../Skills";
import Portfolio from "../Portfolio";
import "./style.css";

function Wrapper(props) {
  return (
    <main className="wrapper">
      <Bio />
      <Links />
      <Skills />
      <Portfolio />
    </main>
  );
}

export default Wrapper;
