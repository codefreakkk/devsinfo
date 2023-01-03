import React from 'react'
import logout from "../assets/images/logout.png";

function Navbar() {
  return (
    <>
        <div className='navbar'>
            <div className='navbar_inner'>
                <div className='navbar_heading'>Dashboard</div>
                <div className='navbar_profile'><img src={logout} height="25" className='logout' /></div>
            </div>
        </div>
    </>
  )
}

export default Navbar