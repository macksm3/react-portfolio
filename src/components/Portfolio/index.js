import React from "react";
import portfolioInfo from "../../PortfolioInfo";
import Card from "../Card";
import "./style.css";

function Portfolio(props) {
  return (
    <div className="container">
      <div className="row">
        {portfolioInfo.map(portInfo => {
          return (portfolioInfo.indexOf(portInfo),
          <Card key={portInfo.name.toString()} portInfo={portInfo} />
          )})}
      </div>
    </div>
  );
}

export default Portfolio;
