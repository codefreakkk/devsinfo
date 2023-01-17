import React from "react";
import code from "../assets/images/hamburger.png";
import logout from "../assets/images/exit.png";
import { useDispatch } from "react-redux";
import { open } from "../actions/sidebarActions";

function Navbar() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="navbar">
        <div className="navbar_inner">
          <div className="navbar_profile_heading_sub">
            <img
              src={code}
              className="navbar_heading_mobile cursor"
              height="20"
              style={{ marginRight: "15px" }}
              onClick={() => dispatch(open())}
            />
            <span className="navbar_heading_sub cursor">Dashboard</span>
          </div>
          {/* <div className="navbar_heading cursor">Dashboard</div> */}
          <div className="navbar_profile cursor">
            <img src={logout} height="20" className="logout" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
