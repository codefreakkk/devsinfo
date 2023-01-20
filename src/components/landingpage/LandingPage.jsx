import React from "react";
import LandingNavbar from "./LandingNavbar";
import "../../css/landingpage.css";
import google from "../../assets/images/google.png";
import { NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <LandingNavbar />
      <div className="landing_container">
        <div className="l_heading">The dev's info</div>
        <div className="sub_title">
          Create your dev profile and show off your skills
        </div>
        <span className="l_button">
          <img src={google} className="login_google" height="20" />
          <span style={{ fontWeight: "500" }}>Continue w/ Google</span>
        </span>
        <div className="or">or</div>
        <NavLink to="/signup" style={{textDecoration: "none"}}>

        <div className="sign_email">Signup w/ Email</div>
        </NavLink>
      </div>
    </>
  );
}

export default LandingPage;
