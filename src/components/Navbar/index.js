import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/react-portfolio/about">
          Michael Macks McCosh
        </NavLink>
        
        <ul className="nav nav-tabs ml-auto">
          <li className="nav-item">
            <NavLink
              to="/about"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                ? "nav-link active"
                : "nav-link"
              }
              >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/projects"
              className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
              >
              Projects
            </NavLink>
          </li>
        </ul>
        
      </div>
    </nav>
  );
}

export default Navbar;
