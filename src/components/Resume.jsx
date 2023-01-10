import React from "react";
import cv from "../assets/images/cv.png";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png"

function Resume() {
  return (
    <>
      <div className="resume_container">
        <div class="row row-cols-sm-2">
          <div class="col">
            <div className="resume_title">Resume</div>
            <div className="resume_inner_container">
              <div>
                <img src={cv} height="40" style={{ cursor: "pointer" }} />
              </div>
              <div className="resume_name">resume.pdf</div>
            </div>
          </div>
          <div class="col">
            <div className="resume_title">Socials</div>
            <div className="socials_inner_container">
                <div>
                    <span><img src={linkedin} height="45" /></span>
                    <span><img src={github} className="ml-8" height="45" /></span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
