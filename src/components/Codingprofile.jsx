import React from 'react'
import leetcode from "../assets/images/leetcode.png"
import gfg from "../assets/images/gfg.png"
import codeforces from "../assets/images/cf.png"
import cc from "../assets/images/cc.png"


function Codingprofile() {
  return (
    <div className='codingprofile_container'>
        <div className="coding_title">
            Coding Profile
        </div>
        <div className="coding_inner_container">
            <span><img src={leetcode} className='pointer coding_image' /></span>
            <span><img src={gfg} className='pointer coding_image'/></span>
            <span><img src={codeforces}className='pointer coding_image' /></span>
            <span><img src={cc} className='pointer coding_image' /></span>
        </div>
    </div>
  )
}

export default Codingprofile