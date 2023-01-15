import React from 'react'
import brush from "../assets/images/brush.png";
import activate from "../assets/images/switch.png";

function ThemesComponent() {
  return (
    <>
    <div className="project_inner">
        <div className="project_inner_main">
          <div className="project_left">
            <div className="project_title">Conio</div>
            <span className="project_description">
                Lorem ipsum dolor sit amet.
            </span>
          </div>
          <div className="project_right">
            <img src={brush} height="60" />
          </div>
        </div>
        <div className="project_bottom">
          <span>
            <img src={activate} height="20" className="cursor" style={{marginRight: "7px"}} />
          </span>
           <span className="cusor">Activated</span>
        </div>
      </div></>
  )
}

export default ThemesComponent