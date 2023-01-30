import { React, useEffect, useState } from "react";
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
import { NavLink, useNavigate } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const [u_email, setEmail] = useState("");
  const [u_contact, setContact] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [address, setAddress] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [skill4, setSkill4] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/userdetails", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        const data = res.data.data;
        setName(data.u_name);
        setEmail(data.u_email);
        setAddress(data.u_state);
        setDescription(data.u_description);
        setImage(data.u_image);
        setContact(data.u_contact);
        setSkill1(data.skill1);
        setSkill2(data.skill2);
        setSkill3(data.skill3);
        setSkill4(data.skill4);
      })
      .catch((err) => {
        alert("Some error occured");
        localStorage.clear();
        navigate("/");
      });
  }, []);

  return (
    <>
      <Sidebar />
      <div className="home">
        <Navbar />
        <div className="home_container">
          {/* home_inner desktop view */}
          <div className="home_inner">
            <div className="home_inner_left">
              <div className="home_heading">
                {name}
                <NavLink
                  to="/editprofile"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <span className="edit_profile">Edit Profile</span>
                </NavLink>
              </div>
              <div className="description">{description}</div>
              <div className="profile_tags">
                <span className="tags">{skill1}</span>
                <span className="tags">{skill2}</span>
                <span className="tags">{skill3}</span>
                <span className="tags">{skill4}</span>
              </div>
              <div className="contact_container">
                <div className="contact">
                  {" "}
                  <span style={{ paddingRight: "5px" }}>
                    <img src={location} height="20" />
                  </span>{" "}
                  {address}
                </div>
                <div className="contact">
                  <span style={{ paddingRight: "7px" }}>
                    <img src={email} height="20" />
                  </span>{" "}
                  {u_email}
                </div>
                <div className="contact">
                  <span style={{ paddingRight: "5px" }}>
                    <img src={contact} height="20" />
                  </span>{" "}
                  {u_contact}
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
          <HomeProfile_mobile
            name={name}
            u_email={u_email}
            u_contact={u_contact}
            description={description}
            image={image}
            address={address}
            skill1={skill1}
            skill2={skill2}
            skill3={skill3}
            skill4={skill4}
          />
          {/* mobile view end */}
          <ProjectsComponent />
          <Resume />
          <Codingprofile />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Home;
