import React from 'react'
import google from "../../assets/images/google.png";

function GoogleLoginButton() {
  return (
    <>
        <span className="l_button">
          <img src={google} className="login_google" height="20" />
          <span style={{ fontWeight: "500" }}>Continue w/ Google</span>
        </span>
    </>
  )
}

export default GoogleLoginButton