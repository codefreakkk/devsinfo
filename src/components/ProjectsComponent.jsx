import axios from "axios";
import { React, useEffect, useState } from "react";
import ProjectContainer from "./ProjectContainer";

function ProjectsComponent() {
  const [project, setProject] = useState([]);
  const [state, setState] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/getprojects", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        const data = res.data.data;
        setProject(data);
        setState(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="project_container">
        <div className="project_heading">Projects</div>
        <div class="project_grid">
          <div class="row row-cols-sm-2">
            {state === true
              ? project.map((data, index) => {
                  return (
                    <div class="col">
                      <ProjectContainer 
                        p_name={data.project_name}
                        p_link={data.project_link}
                        p_desc={data.project_description}
                      />
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsComponent;
