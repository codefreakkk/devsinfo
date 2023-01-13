import React from "react";
import Navbar from "./Navbar";
import "../css/style.css";

function Settings() {
  return (
    <>
      <div className="home">
        <Navbar />
        <div className="settings_container">
          <div className="mb-4 p_heading">Porfolio Settings</div>
          <div>
            <div className="setting_inner">
              <div class="col" style={{ marginRight: "25px" }}>
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
                      class="form-control show"
                      value="Show coding profile"
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
                      value="Show Contact Information"
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
        </div>
      </div>
    </>
  );
}

export default Settings;
