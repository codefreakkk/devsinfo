import {React, useEffect} from "react";
import "../css/style.css";
import Navbar from "./Navbar";
import location from "../assets/images/location.png";
import email from "../assets/images/email.png";
import contact from "../assets/images/contact.png";
import HomeProfile_mobile from "./HomeProfile_mobile";
import Resume from "./Resume";
import Codingprofile from "./Codingprofile";
import logo from "../assets/images/harsh.jpeg";
import ProjectsComponent from "./ProjectsComponent";
import Contact from "./Contact";
import Sidebar from "./Sidebar";
import axios from "axios";


function Home() {
  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/userdetails", {
      headers: {
        "Authorization": localStorage.getItem("token"),
      }
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Sidebar/>
      <div className="home">
        <Navbar />
        <div className="home_container">
          {/* home_inner desktop view */}
          <div className="home_inner">
            <div className="home_inner_left">
              <div className="home_heading">Harsh said
                <span className="edit_profile">Edit Profile</span>
              </div>
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
                <img src={logo} className="profile_main" alt="" />
              </div>
            </div>
          </div>
          {/* mobile view start */}
          <HomeProfile_mobile />
          {/* mobile view end */}
          <ProjectsComponent/>
          <Resume />
          <Codingprofile />
          <Contact/>
        </div>
      </div>
    </>
  );
}

export default Home;
