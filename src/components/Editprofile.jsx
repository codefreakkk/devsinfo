import React from "react";
import Navbar from "./Navbar";
import "../css/style.css";
import ProjectsComponent from "./ProjectsComponent";

function Projects() {
  return (
    <>
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
                <input type="email" class="form-control" id="project_name" />
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label white">
                  Email
                </label>
                <input type="email" class="form-control" id="project_name" />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label white">
                  Contact Number
                </label>
                <input type="email" class="form-control" id="project_name" />
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label white">
                  State
                </label>
                <input type="email" class="form-control" id="project_name" />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label white">
                  Skill 1
                </label>
                <input type="email" class="form-control" id="project_name" />
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label white">
                  Skill 2
                </label>
                <input type="email" class="form-control" id="project_name" />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label white">
                  Skill 3
                </label>
                <input type="email" class="form-control" id="project_name" />
              </div>
            </div>
            <div class="col">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label white">
                  Skill 4
                </label>
                <input type="email" class="form-control" id="project_name" />
              </div>
            </div>
          </div>

          <label for="exampleInputEmail1" class="form-label white">
            Short Description
          </label>
          <div class="form-floating">
            <textarea
              style={{ height: "70px" }}
              class="form-control"
              placeholder="Leave a comment here"
              id="project_description"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Save
          </button>

          {/* Profile links */}
          <div className="mt-5 mb-4 p_heading">Profile Links</div>
          <div className="profile_link_container">
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <label for="" class="form-label white">
                    Linked In
                  </label>
                  <input type="email" class="form-control" id="project_name" />
                </div>
              </div>
              <div class="col">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label white">
                    Github
                  </label>
                  <input type="email" class="form-control" id="project_name" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <label for="" class="form-label white">
                    Leetcode
                  </label>
                  <input type="email" class="form-control" id="project_name" />
                </div>
              </div>
              <div class="col">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label white">
                    GeeksForGeeks
                  </label>
                  <input type="email" class="form-control" id="project_name" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="mb-3">
                  <label for="" class="form-label white">
                    Codforces
                  </label>
                  <input type="email" class="form-control" id="project_name" />
                </div>
              </div>
              <div class="col">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label white">
                    Codechef
                  </label>
                  <input type="email" class="form-control" id="project_name" />
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
            Save
          </button>
          </div>

          {/* Project Details */}
          <div className="mb-4 mt-5 p_heading">Project Details</div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label white">
              Project Name
            </label>
            <input type="email" class="form-control" id="project_name" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label white">
              Link
            </label>
            <input type="email" class="form-control" id="project_name" />
          </div>

          <label for="exampleInputEmail1" class="form-label white">
            Description
          </label>
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="project_description"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default Projects;
