import React from "react";
import LandingNavbar from "./LandingNavbar";

function Enterdetails() {
  return (
    <>
      <LandingNavbar />
      <div className="welcome">
        <div className="welcome_inner">
          <form>
            <div className="welcome_title">Welcome to Devs Info</div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                First name
              </label>
              <input
                type="email"
                class="form-control"
                // placeholder="Name"
                id="exampleInputEmail1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Last Name
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Example textarea
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-dark welcome_button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Enterdetails;
