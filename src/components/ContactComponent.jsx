import React from "react";
import user from "../assets/images/contactuser.png";

function ContactComponent() {
  return (
    <>
      <div className="project_inner">
        <div className="project_inner_main">
          <div className="project_left">
            <div className="project_title">Harsh Said</div>
            <span className="project_description">
                Mern stack developer | Backend Lorem ipsum dolor sit 
            </span>
          </div>
          <div className="project_right">
            <img src={user} height="60" />
          </div>
        </div>
        <div className="project_bottom">
          <span>
            <img
            //   src={open}
              height="20"
              className="cursor"
            />
          </span>
          <span className="cusor" style={{fontWeight:"600"}}>12-2-2023</span>
        </div>
      </div>
    </>
  );
}

export default ContactComponent;
