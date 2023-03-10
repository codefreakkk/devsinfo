import React from "react";
import "../css/style.css";
import user from "../assets/images/user.png";
import setting from "../assets/images/settings.png";
import projects from "../assets/images/projects.png";
import theme from "../assets/images/theme.png";
import exit from "../assets/images/close.png";
import { NavLink } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import {open} from "../actions/sidebarActions"

function Sidebar() {
  const sidebarState = useSelector((state) => state.toggleSidebar);
  const dispatch = useDispatch();

  return (
    <div
      className={sidebarState == true ? "sidebar open" : "close"}
    >
      <div
        className={
          sidebarState == true ? "dblock" : "dnone"
        }
      >
        <div className="sidebar_heading">
          <NavLink to="/" style={{ textDecoration: "none", color: "#83d8ae" }}>
            <span className="sheading">D</span>
          </NavLink>
        </div>
        <div className="sibebar_main">
          <NavLink to="/dashboard">
            <div className="main">
              <img src={user} height="17" className="blackImg" />
            </div>
          </NavLink>

          <NavLink to="/editprofile">
            <div className="main">
              <img src={projects} height="17" className="blackImg" />
            </div>
          </NavLink>
          <NavLink to="/themes">
            <div className="main">
              <img src={theme} height="20" className="blackImg" />
            </div>
          </NavLink>
          <NavLink to="/settings">
            <div className="main">
              <img src={setting} height="20" className="blackImg" />
            </div>
          </NavLink>
          <div className="main close_sidebar">
            <img src={exit} height="25" className="blackImg" onClick={() => dispatch(open())} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
