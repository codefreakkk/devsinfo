import React from "react";
import "../css/style.css";
import Navbar from "./Navbar";
import location from "../assets/images/location.png";
import email from "../assets/images/email.png";
import contact from "../assets/images/contact.png";
import user from "../assets/images/user.png";
import logo from "../assets/images/harsh.jpeg";

function Home() {
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="home_container">
          {/* home_inner desktop view */}
          <div className="home_inner">
            <div className="home_inner_left">
              <div className="home_heading">Harsh said</div>
              <div className="description">Mern Stack developer</div>
              <div className="profile_tags">
                <span className="tags">Backend Devloper</span>
                <span className="tags">React JS</span>
                <span className="tags">Node JS</span>
                <span className="tags">Mongo DB</span>
              </div>
              <div className="contact_container">
                <div className="contact">
                  {" "}
                  <span style={{ paddingRight: "5px" }}>
                    <img src={location} height="20" />
                  </span>{" "}
                  Solapur, India
                </div>
                <div className="contact">
                  <span style={{ paddingRight: "7px" }}>
                    <img src={email} height="20" />
                  </span>{" "}
                  harshsaid558@gmail.com
                </div>
                <div className="contact">
                  <span style={{ paddingRight: "5px" }}>
                    <img src={contact} height="20" />
                  </span>{" "}
                  +91 8788388573
                </div>
              </div>
            </div>
            <div className="home_inner_right">
              <div className="profile">
                <img src={user} className="profile_main" alt="" />
              </div>
            </div>
          </div>
          {/* mobile view */}
          <div className="home_inner_mobile">
            <div className="home_inner_mobile_profile">
              <div>
                <img src={logo} height="60" className="home_mobile_profile" />
              </div>
              <div className="home_heading mt-6">Harsh Said</div>
              <div className="description mt-6">MERN stack developer</div>
              <div className="profile_tags_mobile">
                <span className="tags">Backend Devloper</span>
                <span className="tags">React JS</span>
                <span className="tags">Node JS</span>
                <span className="tags mt-10">Mongo DB</span>
              </div>
              <div className="contact_container">
                <div className="contact_mobile">
                  {" "}
                  <span style={{ paddingRight: "5px" }}>
                    <img src={location} height="15" />
                  </span>{" "}
                  Solapur, India
                </div>
                <div className="contact_mobile">
                  <span style={{ paddingRight: "7px" }}>
                    <img src={email} height="15" />
                  </span>{" "}
                  harshsaid558@gmail.com
                </div>
                <div className="contact_mobile">
                  <span style={{ paddingRight: "5px" }}>
                    <img src={contact} height="15" />
                  </span>{" "}
                  8788388573
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
