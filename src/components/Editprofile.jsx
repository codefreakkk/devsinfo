import { React, useState, useEffect } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "../css/style.css";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Oval } from "react-loader-spinner";

function Projects() {
  const [u_name, setUname] = useState("");
  const [u_email, setEmail] = useState("");
  const [u_contact, setContact] = useState("");
  const [u_state, setState] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [skill4, setSkill4] = useState("");
  const [u_description, setDescription] = useState("");
  const [linked_in, setLinkedIn] = useState("");
  const [github, setGithub] = useState("");
  const [leetcode, setLeetcode] = useState("");
  const [gfg, setGFG] = useState("");
  const [codeforces, setCodeforces] = useState("");
  const [codechef, setCodechef] = useState("");
  const [project_name, setProjectName] = useState("");
  const [project_link, setProjectLink] = useState("");
  const [project_description, setProjectDescription] = useState("");
  const [profileMsg, setProfileMsg] = useState("");
  const [profileState, setProfileState] = useState(false);
  const [links, setLinks] = useState(false);
  const [linksMsg, setLinksMsg] = useState("");
  const [projectState, setProjectState] = useState(false);
  const [projectMsg, setProjectMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/userdetails", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        const data = res.data.data;
        setUname(data.u_name);
        setEmail(data.u_email);
        setContact(data.u_contact);
        setDescription(data.u_description);
        setState(data.u_state);
        setSkill1(data.skill1);
        setSkill2(data.skill2);
        setSkill3(data.skill3);
        setSkill4(data.skill4);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/codinglinksdetails", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.success === true) {
          const data = res.data.data;
          setLinkedIn(data.linked_in);
          setGithub(data.github);
          setLeetcode(data.leetcode);
          setGFG(data.gfg);
          setCodeforces(data.codeforces);
          setCodechef(data.codechef);
        }
      })
      .catch((err) => {
        localStorage.clear();
        navigate("/");
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/getprojects", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    .then((res) => {
      const data = res.data.data;
      if (res.data.success === true) {
        setProjectName(data.project_name);
        setProjectLink(data.project_link);
        setProjectDescription(data.project_description);
      }
    })
    .catch((err) => {
      localStorage.clear();
      navigate("/")
    });
  }, []);

  // validations not completed
  const handleProfile = () => {
    setProfileState(true);
    setLinksMsg("");
    setProjectMsg("");
    axios
      .post(
        "http://localhost:8000/api/v1/setprofile",
        {
          u_name,
          u_email,
          u_contact,
          u_state,
          skill1,
          skill2,
          skill3,
          skill4,
          u_description,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        if (response.data.status === true) {
          setProfileMsg(response.data.message);
          setProfileState(false);
        } else setProfileMsg(response.data.message);
      })
      .catch((err) => {
        localStorage.clear();
        navigate("/");
      });
  };

  // validations not completed
  const handleProfileLinks = () => {
    setLinks(true);
    setProfileMsg("");
    setProjectMsg("");
    axios
      .post(
        "http://localhost:8000/api/v1/codinglinks",
        {
          linked_in,
          github,
          leetcode,
          gfg,
          codeforces,
          codechef,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        if (res.data.success === true) {
          setLinks(false);
          setLinksMsg(res.data.message);
        }
      })
      .catch((err) => {
        localStorage.clear();
        navigate("/");
      });
  };

  // validations not completed
  const handleProjects = () => {
    setProjectState(true);
    setProfileMsg("");
    setLinksMsg("");
    axios
      .post(
        "http://localhost:8000/api/v1/addprojects",
        { project_name, project_link, project_description },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        if (res.data.success === true) {
          setProjectState(false);
          setProjectMsg(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Sidebar />
      <div className="home">
        <Navbar />
        <div className="p_inner">
          <div className="mb-4 p_heading">Set up Profile</div>
          <div class="row">
            <div class="col">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label white">
                  Your Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  value={u_name}
                  onChange={(e) => setUname(e.target.value)}
                  id="project_name"
                />
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label white">
                  Email
                </label>
                <input
                  type="text"
                  class="form-control"
                  value={u_email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled="true"
                  id="project_name"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label white">
                  Contact Number
                </label>
                <input
                  type="text"
                  value={u_contact}
                  onChange={(e) => setContact(e.target.value)}
                  class="form-control"
                  id="project_name"
                />
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label white">
                  State
                </label>
                <input
                  type="text"
                  value={u_state}
                  onChange={(e) => setState(e.target.value)}
                  class="form-control"
                  id="project_name"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label white">
                  Skill 1
                </label>
                <input
                  type="text"
                  value={skill1}
                  onChange={(e) => setSkill1(e.target.value)}
                  class="form-control"
                  id="project_name"
                />
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label white">
                  Skill 2
                </label>
                <input
                  type="text"
                  value={skill2}
                  onChange={(e) => setSkill2(e.target.value)}
                  class="form-control"
                  id="project_name"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label white">
                  Skill 3
                </label>
                <input
                  type="text"
                  value={skill3}
                  onChange={(e) => setSkill3(e.target.value)}
                  class="form-control"
                  id="project_name"
                />
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label white">
                  Skill 4
                </label>
                <input
                  type="text"
                  value={skill4}
                  onChange={(e) => setSkill4(e.target.value)}
                  class="form-control"
                  id="project_name"
                />
              </div>
            </div>
          </div>
          <label for="exampleInputEmail1" class="form-label white">
            Short Description
          </label>
          <div class="form-floating">
            <input
              style={{ height: "70px" }}
              class="form-control"
              placeholder="Leave a comment here"
              id="project_description"
              value={u_description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="button" class="btn btn-primary" onClick={handleProfile}>
            {profileState === false ? (
              <span>Save</span>
            ) : (
              <span>
                <Oval
                  height={20}
                  width={20}
                  color="white"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="white"
                  strokeWidth={3}
                  strokeWidthSecondary={5}
                />
              </span>
            )}
          </button>{" "}
          <span
            style={{ fontSize: "12px", color: "#83d8ae", marginLeft: "15px" }}
          >
            {profileMsg}
          </span>
          {/* Profile links */}
          <div className="mt-5 mb-4 p_heading">Profile Links</div>
          <div className="profile_link_container">
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <label for="" class="form-label white">
                    Linked In
                  </label>
                  <input
                    type="text"
                    value={linked_in}
                    onChange={(e) => setLinkedIn(e.target.value)}
                    class="form-control"
                    id="project_name"
                  />
                </div>
              </div>
              <div class="col">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label white">
                    Github
                  </label>
                  <input
                    type="text"
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    class="form-control"
                    id="project_name"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <label for="" class="form-label white">
                    Leetcode
                  </label>
                  <input
                    type="text"
                    value={leetcode}
                    onChange={(e) => setLeetcode(e.target.value)}
                    class="form-control"
                    id="project_name"
                  />
                </div>
              </div>
              <div class="col">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label white">
                    GeeksForGeeks
                  </label>
                  <input
                    type="text"
                    value={gfg}
                    onChange={(e) => setGFG(e.target.value)}
                    class="form-control"
                    id="project_name"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <label for="" class="form-label white">
                    Codforces
                  </label>
                  <input
                    type="text"
                    value={codeforces}
                    onChange={(e) => setCodeforces(e.target.value)}
                    class="form-control"
                    id="project_name"
                  />
                </div>
              </div>
              <div class="col">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label white">
                    Codechef
                  </label>
                  <input
                    type="text"
                    value={codechef}
                    onChange={(e) => setCodechef(e.target.value)}
                    class="form-control"
                    id="project_name"
                  />
                </div>
              </div>
            </div>
            <button
              type="button"
              class="btn btn-primary"
              onClick={handleProfileLinks}
            >
              {links === false ? (
                <span>Save</span>
              ) : (
                <span>
                  <Oval
                    height={20}
                    width={20}
                    color="white"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="white"
                    strokeWidth={3}
                    strokeWidthSecondary={5}
                  />
                </span>
              )}
            </button>
            <span
              style={{ fontSize: "12px", color: "#83d8ae", marginLeft: "15px" }}
            >
              {linksMsg}
            </span>
          </div>
          {/* Project Details */}
          <div className="mb-4 mt-5 p_heading">Project Details</div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label white">
              Project Name
            </label>
            <input
              type="text"
              value={project_name}
              onChange={(e) => setProjectName(e.target.value)}
              class="form-control"
              id="project_name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label white">
              Link
            </label>
            <input
              type="text"
              value={project_link}
              onChange={(e) => setProjectLink(e.target.value)}
              class="form-control"
              id="project_name"
            />
          </div>
          <label for="exampleInputEmail1" class="form-label white">
            Description
          </label>
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="project_description"
              value={project_description}
              onChange={(e) => setProjectDescription(e.target.value)}
            ></textarea>
          </div>
          <button
            type="button"
            class="btn btn-primary"
            onClick={handleProjects}
          >
            {projectState === false ? (
              <span>Save</span>
            ) : (
              <span>
                <Oval
                  height={20}
                  width={20}
                  color="white"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="white"
                  strokeWidth={3}
                  strokeWidthSecondary={5}
                />
              </span>
            )}
          </button>
          <span
              style={{ fontSize: "12px", color: "#83d8ae", marginLeft: "15px" }}
            >
              {projectMsg}
            </span>
        </div>
      </div>
    </>
  );
}

export default Projects;
