import React from "react";
import Resume from "../../assets/pdf/resume.pdf";
import "./style.css";

function Links(){
  return(
    <section className="contact">
      <div className="container">
        <div className="row resourceLinks">
          <div className="col-2"></div>
          <div className="col-2">
            <a href={Resume} target="_blank" rel='noreferrer noopener' title="Download Resume"><i className="far fa-file fa-4x"></i></a>
            <h5 className="resource-text">Download my Resume</h5>
          </div>
          <div className="col-2">
            <a href="https://www.linkedin.com/in/michaelmccosh" target="_blank" rel='noreferrer noopener' title="LinkedIn"><i className="fab fa-linkedin fa-4x"></i></a>
            <h5 className="resource-text">LinkedIn profile</h5>
          </div>
          <div className="col-2">
            <a href="https://github.com/macksm3" target="_blank" rel='noreferrer noopener' title="Github"><i className="fab fa-github-square fa-4x"></i></a>
            <h5 className="resource-text">Github profile</h5>
          </div>
          <div className="col-2">
            <a href="mailto:michaelmccosh@gmail.com" target="_blank" rel='noreferrer noopener' title="Email"><i className="fas fa-envelope-square fa-4x"></i></a>
            <h5 className="resource-text">Send me email</h5>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </section>

  );
}

export default Links; 
  