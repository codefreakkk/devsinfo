import {React, useEffect} from "react";
import code from "../assets/images/hamburger.png";
import logout from "../assets/images/exit.png";
import { useDispatch } from "react-redux";
import { open } from "../actions/sidebarActions";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") == null || localStorage.getItem("u_email") == null) {
      navigate("/");
    }      
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  }

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
          <div className="navbar_profile cursor" onClick={handleLogout}>
            <img src={logout} height="20" className="logout" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
