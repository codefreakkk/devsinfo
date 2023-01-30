import { React, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import dev from "../../assets/images/hexagon.png";

function LandingNavbar() {
  const navigate = useNavigate();
  const [state, setState] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("token") != null &&
      localStorage.getItem("u_email") != null
    ) {
        setState(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  }
 
  return (
    <div className="landing_navbar">
      <div className="logo dev">
        <span>
          <img src={dev} height="40" style={{ marginRight: "5px" }} />
        </span>
        <NavLink style={{ textDecoration: "none", color: "black" }} to="/">
          Dev's
        </NavLink>
      </div>
      <div className="l_body">
        {state === false ? (
          <>
          <NavLink to="/" style={{ textDecoration: "none" }}>
          <span className="mr font-13">Home</span>
        </NavLink>
          <NavLink to="/login" style={{ textDecoration: "none" }}>
            <span className="mr font-13">login</span>
          </NavLink>
          <NavLink to="/signup" style={{ textDecoration: "none" }}>
          <span className="font-13">signup</span>
        </NavLink>
          </>
        ) : (
          <span className="font-13" onClick={handleLogout}>Logout</span>
        )}
      </div>
    </div>
  );
}

export default LandingNavbar;
