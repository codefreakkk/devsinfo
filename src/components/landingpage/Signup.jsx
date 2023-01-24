import axios from "axios";
import {React, useState} from "react";
import LandingNavbar from "./LandingNavbar";
import {useNavigate} from "react-router-dom"

function Signup() {
  const navigate = useNavigate();
  const [u_email, setEmail] = useState("");
  const [u_password, setPassword] = useState("");
  const [c_password, setCPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // do validation of fields later

    if (u_password != c_password) {
      alert("password not match");
      return;
    }

    axios.post("http://localhost:8000/api/v1/signup", {u_email, u_password})
    .then((response) => {
      if (response.data.success == true) {
        navigate("/login");
      }
      else alert(response.data.message);
    })
    .catch((err) => {
      alert("Some error occured");
      console.log(err)
    })
  }

  return (
    <>
      <LandingNavbar />
      <div className="login_container">
        <div className="login_inner_container">
          <h3 className="mb-3">Register</h3>
          <div className="login_inner">
            <form>
              <div class="mb-4">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="example@gmail.com"
                  id="exampleInputEmail1"
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  class="form-control"
                  id=""
                />
              </div>
              <div class="mb-5">
                <label for="exampleInputPassword1" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  onChange={(e) => setCPassword(e.target.value)}
                  placeholder="Confirm your password"
                  id=""
                />
              </div>

              <button
                onClick={handleSubmit}
                type="submit"
                class="btn btn-dark"
                style={{ width: "100%" }}
              >
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
