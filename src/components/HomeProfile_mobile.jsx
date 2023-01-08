import React from 'react'
import location from "../assets/images/location.png";
import email from "../assets/images/email.png";
import contact from "../assets/images/contact.png";
import logo from "../assets/images/harsh.jpeg";

function HomeProfile_mobile() {
  return (
    <>
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
    </>
  )
}

export default HomeProfile_mobile