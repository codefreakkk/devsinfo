import React from "react";
import { NavLink } from "react-router-dom";
import dev from "../../assets/images/hexagon.png";

function LandingNavbar() {
  return (
    <div className="landing_navbar">
      <div className="logo dev">
        <span>
          <img src={dev} height="40" style={{ marginRight: "5px" }} />
        </span>
        Dev's
      </div>
      <div className="l_body">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <span className="mr font-13">Home</span>
        </NavLink>

        <NavLink to="/login" style={{ textDecoration: "none" }}>
          <span className="mr font-13">login</span>
        </NavLink>
        <NavLink to="/signup" style={{ textDecoration: "none" }}>
          <span className="font-13">signup</span>
        </NavLink>
      </div>
    </div>
  );
}

export default LandingNavbar;
