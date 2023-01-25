import axios from "axios";
import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import LandingNavbar from "./LandingNavbar";

function Login() {
  const navigate = useNavigate();
  const [u_email, setEmail] = useState("");
  const [u_password, setPassword] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      // do validation later

      axios.post("http://localhost:8000/api/v1/login", {u_email, u_password})
      .then((response) => {
        if (response.data.success == true) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("u_email", response.data.u_email);
          navigate("/dashboard");
        }
        else {
          alert(response.data.message);
        }
      })
      .catch((err) => alert("Some error occured"));

  }

  return (
    <>
      <LandingNavbar />
      <div className="login_container">
        <div className="login_inner_container">
          <h3 className="mb-3">Login</h3>
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
                  class="form-control"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="mb-5">
                <label
                  class="form-check-label"
                  for="exampleCheck1"
                  style={{ fontSize: "14px", cursor: "pointer" }}
                >
                  Forget password ?
                </label>
              </div>
              <button
                type="submit"
                class="btn btn-dark"
                style={{ width: "100%" }}
                onClick={handleSubmit}
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

export default Login;
