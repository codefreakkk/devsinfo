import React from "react";
import LandingNavbar from "./LandingNavbar";
import "../../css/landingpage.css";
import { NavLink } from "react-router-dom";
import axios from "axios";

function LandingPage() {
  const handleLogin = () => {
    axios
      .post("http://localhost:8000/api/v1/login", {
        headers: {
          "Authorization": "token"
        }
      })
      .then((response) => {
        const status = response.data.success;
        if (status == true) {

        }
        else  {
          alert("Some error occured while login")
          console.log("Some error occured");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <LandingNavbar />
      <div className="landing_container">
        <div className="l_heading">The dev's info</div>
        <div className="sub_title">
          Create your dev profile and show off your skills
        </div>
        <span className="l_button">
          {/* <img src={google} className="login_google" height="20" /> */}
          <span style={{ fontWeight: "500" }}>New user? Sign up</span>
        </span>
        <div className="or">or</div>
        <NavLink to="/signup" style={{ textDecoration: "none" }}>
          <div className="sign_email">login w/ email</div>
        </NavLink>
      </div>
    </>
  );
}

export default LandingPage;
