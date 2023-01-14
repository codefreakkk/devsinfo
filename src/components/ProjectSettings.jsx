import React from 'react'
import ProjectSettingComponent from './ProjectSettingComponent'

function ProjectSettings() {
  return (
    <>
        {/* Projects */}
        <div className="mb-3 mt-5 p_heading">Projects Settings</div>
          <div className="ps_inner">
            <div class="row row-cols-sm-2">
              <div class="col">
                <ProjectSettingComponent />
              </div>
              <div class="col">
                <ProjectSettingComponent />
              </div>

              <div class="col">
                <ProjectSettingComponent />
              </div>

              <div class="col">
                <ProjectSettingComponent />
              </div>
            </div>
          </div>
    </>
  )
}

export default ProjectSettings