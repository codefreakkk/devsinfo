import React from "react";
import "../css/style.css";
import user from "../assets/images/user.png";
import setting from "../assets/images/settings.png"
import projects from "../assets/images/projects.png"
import theme from "../assets/images/theme.png"
import exit from "../assets/images/logout.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_heading">
        <span className="sheading">D</span>
      </div>
      <div className="sibebar_main">
        <div className="main">
          <img src={user} height="17" className="blackImg" />
        </div>
        <div className="main">
          <img src={projects} height="17" className="blackImg" />
        </div>
        <div className="main">
          <img src={theme} height="20" className="blackImg" />
        </div>
        <div className="main">
          <img src={setting} height="20" className="blackImg" />
        </div>
        <div className="main exit">
          <img src={exit} height="25" className="blackImg" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
