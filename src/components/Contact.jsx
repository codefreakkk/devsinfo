import React from "react";

function Contact() {
  return (
    <>
        <div className="c_inner">
      <div className="mb-4 mt-5 c_heading">Contact</div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label white">
          Name
        </label>
        <input type="email" class="form-control" id="project_name" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label white">
          Email
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
    </>
  );
}

export default Contact;
