import React from "react";
import "../css/style.css";
import Navbar from "./Navbar";
import location from "../assets/images/location.png";
import email from "../assets/images/email.png";
import contact from "../assets/images/contact.png";
import user from "../assets/images/user.png";
import HomeProfile_mobile from "./HomeProfile_mobile";
import ProjectContainer from "./ProjectContainer";

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
          <HomeProfile_mobile />
          <div className="project_container">
            <div className="project_heading">Projects</div>
            <div class="project_grid">
              <div class="row row-cols-sm-2 ">
                <div class="col">
                  <ProjectContainer/>
                </div>
                <div class="col">
                  <ProjectContainer/>
                </div>
                <div class="col">
                  <ProjectContainer/>
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
