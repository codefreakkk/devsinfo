import React from "react";
import "../css/style.css";
import user from "../assets/images/user.png";
import setting from "../assets/images/settings.png"

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
          <img src={user} height="15" className="blackImg" />
        </div>
        <div className="main">
          <img src={user} height="15" className="blackImg" />
        </div>
        <div className="main">
          <img src={setting} height="20" className="blackImg" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
