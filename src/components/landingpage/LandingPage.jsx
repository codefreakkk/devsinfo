import React from "react";
import LandingNavbar from "./LandingNavbar";
import "../../css/landingpage.css";

function LandingPage() {
  return (
    <>
      <LandingNavbar />
      <div className="landing_container">
        <div className="l_heading">dev's info</div>
        <span className="l_button">Create your Profile</span>
      </div>
    </>
  );
}

export default LandingPage;
