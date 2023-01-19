import React from "react";
import Navbar from "./Navbar";
import "../css/style.css";
import resume from "../assets/images/uploadresume.png";
import user from "../assets/images/uploaduser.png";
import ProjectSettingComponent from "./ProjectSettingComponent";
import ProjectSettings from "./ProjectSettings";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

function Settings() {
  return (
    <>
    <Sidebar/>  
      <div className="home">
        <Navbar />
        <div className="settings_container">
          <div className="mb-2 mt-5 p_heading">Porfolio Settings</div>
          <div>
            <div className="upload_photos">
              <div className="center">
                <div className="profile_img">
                  <img src={user} height="35" />
                </div>
                <div className="profile_title">Upload Photo</div>
              </div>
            </div>

            <div className="setting_inner">
              <div class="col p_settings">
                <div>
                  <div class="input-group mb-3">
                    <div class="input-group-text show">
                      <input
                        class="form-check-input mt-0 show"
                        type="checkbox"
                        value=""
                        aria-label="Checkbox for following text input"
                      />
                    </div>
                    <input
                      type="text"
                      id="setting1"
                      class="form-control show"
                      value="Show coding profile"
                      disabled="true"
                    />
                  </div>
                </div>
                <div>
                  <div class="input-group mb-3">
                    <div class="input-group-text show">
                      <input
                        class="form-check-input mt-0 show"
                        type="checkbox"
                        value=""
                      />
                      
                    </div>
                    <input
                      type="text"
                      id="setting2"
                      class="form-control show"
                      value="Show Contact Information"
                      disabled="true"
                    />
                  </div>
                </div>
                <div>
                  <div class="input-group mb-3">
                    <div class="input-group-text show">
                      <input
                        class="form-check-input mt-0 show"
                        type="checkbox"
                        value=""
                      />
                    </div>
                    <input
                      type="text"
                      class="form-control show"
                      id="setting3"
                      disabled="true"
                      value="Show Projects"
                    />
                  </div>
                </div>
              </div>
              <div class="col">
                <div className="profile_count">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <div className="count">10</div>
                    <div className="views">PROFILE VIEWS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* resume  */}
          <div className="mb-3 mt-4 p_heading">
            Upload Resume
            <div className="mt-1 upload">Not uploaded</div>
          </div>
          <div className="upload_resume">
            <div className="center column">
              <img src={resume} height="50" />
              <span className="mt-2 fff">Upload Resume</span>
            </div>
          </div>

          {/* Project settings */}
          <ProjectSettings />

          {/* Contact Info */}
          <div className="mb-3 mt-4 p_heading">Contact Information</div>
          <NavLink to="/contact">
            <button className="btn btn-primary">View</button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Settings;
