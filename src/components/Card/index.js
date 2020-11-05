import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="col-6" key={props.portInfo.name.toString()}>
      <div className="card bg-dark text-white">
        <div className="card-body">
          <h4 className="card-title">{props.portInfo.name}</h4>
          <p className="card-text">{props.portInfo.description}</p>
          <a href={props.portInfo.liveLink} target="_blank" rel='noreferrer noopener'><img class="img-fluid" src={props.portInfo.screenShot} alt={props.portInfo.name} /></a>
          <a href={props.portInfo.repository} target="_blank" rel='noreferrer noopener'>{props.portInfo.repository}</a>
        </div>
      </div>
    </div>
  );
}

export default Card;