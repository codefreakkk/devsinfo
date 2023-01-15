import React from "react";
import Navbar from "./Navbar";
import "../css/style.css";
import ThemesComponent from "./ThemesComponent";

function Themes() {
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="themes_container">
          <div className="mb-4 mt-5 p_heading">Profile Theme Settings</div>
          <div class="row row-cols-sm-3">
            <div class="col">
              <ThemesComponent/>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Themes;
