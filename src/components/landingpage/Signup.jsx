import React from 'react'
import LandingNavbar from './LandingNavbar'
import google from "../../assets/images/google.png"

function Signup() {
  return (
    <>
      <LandingNavbar />
      <div className="login_container">
        <div className="login_inner_container">
          <h3 className="mb-3">Register</h3>
          <div className="login_inner">
            <form>
              <div class="mb-4">
              <button type="button" class="btn btn-outline-secondary" style={{width: "100%"}}>
                <span style={{marginRight: "10px"}}><img src={google} alt="" height="22" /></span>
                Continue with Google</button>
              
                <div className='marginauto'>or</div>

                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-5">
                <label for="exampleInputPassword1" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              

              <button type="submit" class="btn btn-dark" style={{ width: "100%" }}>
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}

export default Signup