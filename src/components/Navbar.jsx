import React from "react";
import code from "../assets/images/code.png";
import logout from "../assets/images/exit.png";
function Navbar() {

  // toggle navbar
  const handleToggle = () => {
    alert("harsh")
  }

  return (
    <>
      <div className="navbar">
        <div className="navbar_inner">
          <div className="navbar_profile_heading_sub" onClick={handleToggle}>
            <img src={code} className="navbar_heading_mobile cursor" height="30" />
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
