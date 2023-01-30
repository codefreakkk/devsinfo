import { React, useState, useEffect } from "react";
import cv from "../assets/images/cv.png";
import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";
import axios from "axios";

function Resume() {
  const [links, setLinks] = useState({});
  const [state, setState] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/codinglinksdetails", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.success === true) {
          setLinks(res.data.data);
          setState(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);

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
                <span>
                  <a href={links.linked_in} target="_blank">
                    <img src={linkedin} height="45" />
                  </a>
                </span>
                <span>
                  <a href={links.github} target="_blank">
                    <img src={github} className="ml-8" height="45" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
