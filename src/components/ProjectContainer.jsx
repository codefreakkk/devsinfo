import React from "react";
import project from "../assets/images/project.png";
import open from "../assets/images/open.png";

function ProjectContainer() {
  return (
    <>
      <div className="project_inner">
        <div className="project_inner_main">
          <div className="project_left">
            <div className="project_title">Hiring Portal</div>
            <span className="project_description">
              Lorem ipsum dolor sit amet consectetu
            </span>
          </div>
          <div className="project_right">
            <img src={project} height="60" />
          </div>
        </div>
        <div className="project_bottom">
          <span>
            <img src={open} height="20" className="cursor" style={{marginRight: "5px"}} />
          </span>
           <span className="cusor">Open project</span>
        </div>
      </div>
    </>
  );
}

export default ProjectContainer;
