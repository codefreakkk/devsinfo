import React from "react";
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
        <span className="mr font-13">Home</span>
        <span className="mr font-13">login</span>
        <span className="font-13">signup</span>
      </div>
    </div>
  );
}

export default LandingNavbar;
