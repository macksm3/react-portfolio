import React from "react";
import Bio from "../Bio";
import Links from "../Links";
import Skills from "../Skills";
import "./style.css";

function Wrapper(props) {
  return (
    <main className="wrapper">
      <Bio />
      <Links />
      <Skills />
    </main>
  );
}

export default Wrapper;
