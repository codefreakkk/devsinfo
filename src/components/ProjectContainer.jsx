import React from "react";
import project from "../assets/images/project.png";
import open from "../assets/images/open.png";

function ProjectContainer({ p_name, p_link, p_desc }) {
  return (
    <>
      <div className="project_inner">
        <div className="project_inner_main">
          <div className="project_left">
            <div className="project_title">{p_name}</div>
            <span className="project_description">{p_desc}</span>
          </div>
          <div className="project_right">
            <img src={project} height="60" />
          </div>
        </div>
        <div className="project_bottom">
          <span>
            <img
              src={open}
              height="20"
              className="cursor"
              style={{ marginRight: "5px" }}
            />
          </span>
          <span className="cusor">
            <a href={p_link} style={{textDecoration: "none", color: "white"}}>Open project</a>
          </span>
        </div>
      </div>
    </>
  );
}

export default ProjectContainer;
