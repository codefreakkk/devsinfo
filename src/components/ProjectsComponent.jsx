import React from 'react'
import ProjectContainer from './ProjectContainer'

function ProjectsComponent() {
  return (
    <>
        <div className="project_container">
            <div className="project_heading">Projects</div>
            <div class="project_grid">
              <div class="row row-cols-sm-2">
                <div class="col">
                  <ProjectContainer />
                </div>
                <div class="col">
                  <ProjectContainer />
                </div>
                <div class="col">
                  <ProjectContainer />
                </div>
                <div class="col">
                  <ProjectContainer />
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default ProjectsComponent