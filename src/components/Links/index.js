import React from "react";
import "./style.css";

function Links(){
  return(
    <section className="contact">
      <div className="container">
        <div className="row resourceLinks">
          <div className="col-2"></div>
          <div className="col-2">
            <a href="assets/pdf/M3 resume BCS.pdf" target="_blank" title="Download Resume"><i className="far fa-file fa-4x"></i></a>
            <h5 className="resource-text">Download my Resume</h5>
          </div>
          <div className="col-2">
            <a href="https://www.linkedin.com/in/michaelmccosh" target="_blank" title="LinkedIn"><i className="fab fa-linkedin fa-4x"></i></a>
            <h5 className="resource-text">LinkedIn profile</h5>
          </div>
          <div className="col-2">
            <a href="https://github.com/macksm3" target="_blank" title="Github"><i className="fab fa-github-square fa-4x"></i></a>
            <h5 className="resource-text">Github profile</h5>
          </div>
          <div className="col-2">
            <a href="mailto:michaelmccosh@gmail.com" target="_blank" title="Email"><i className="fas fa-envelope-square fa-4x"></i></a>
            <h5 className="resource-text">Send me email</h5>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </section>

  );
}

export default Links; 
  