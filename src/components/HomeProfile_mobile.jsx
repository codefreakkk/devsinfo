import React from "react";
import location from "../assets/images/location.png";
import email from "../assets/images/email.png";
import contact from "../assets/images/contact.png";
import logo from "../assets/images/harsh.jpeg";

function HomeProfile_mobile({
  name,
  u_email,
  u_contact,
  description,
  image,
  address,
  skill1,
  skill2,
  skill3,
  skill4,
}) {
  return (
    <>
      <div className="home_inner_mobile">
        <div className="home_inner_mobile_profile">
          <div>
            <img src={logo} height="60" className="home_mobile_profile" />
          </div>
          <div className="home_heading mt-6">
            {name}
            <span className="edit_profile">Edit Profile</span>
          </div>
          <div className="description mt-6">{description}</div>
          <div className="profile_tags_mobile">
            <span className="tags mt-10">{skill1}</span>
            <span className="tags mt-10">{skill2}</span>
            <span className="tags mt-10">{skill3}</span>
            <span className="tags mt-10">{skill4}</span>
          </div>
          <div className="contact_container">
            <div className="contact_mobile">
              {" "}
              <span style={{ paddingRight: "5px" }}>
                <img src={location} height="15" />
              </span>{" "}
              {address}
            </div>
            <div className="contact_mobile">
              <span style={{ paddingRight: "7px" }}>
                <img src={email} height="15" />
              </span>{" "}
              {u_email}
            </div>
            <div className="contact_mobile">
              <span style={{ paddingRight: "5px" }}>
                <img src={contact} height="15" />
              </span>{" "}
              {u_contact}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeProfile_mobile;
