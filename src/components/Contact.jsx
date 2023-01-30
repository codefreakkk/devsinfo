import axios from "axios";
import { React, useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [contactMsg, setContactMsg] = useState("");
  const [state, setState] = useState(false);

  const handleSubmit = () => {
    setState(true);
    axios
      .post(
        "http://localhost:8000/api/v1/setcontact",
        { name, email, desc },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        const data = res.data;
        if (data.success === true) {
          setName("");
          setEmail("");
          setDesc("");
          setState(false);
          setContactMsg(data.message);
        }
      })
      .catch((err) => alert("Some error occured"));
  };

  return (
    <>
      <div className="c_inner">
        <div className="mb-4 mt-5 c_heading">Contact</div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label white">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            class="form-control"
            id="project_name"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label white">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>

        <button type="button" class="btn btn-primary" onClick={handleSubmit}>
          {state === false ? (
            <span>Save</span>
          ) : (
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
          )}
        </button>
        <span
          style={{ fontSize: "12px", color: "#83d8ae", marginLeft: "15px" }}
        >
          {contactMsg}
        </span>
      </div>
    </>
  );
}

export default Contact;
