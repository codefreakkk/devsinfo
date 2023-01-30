import { React, useEffect, useState } from "react";
import leetcode from "../assets/images/leetcode.png";
import gfg from "../assets/images/gfg.png";
import codeforces from "../assets/images/cf.png";
import cc from "../assets/images/cc.png";
import axios from "axios";

function Codingprofile() {
  const [links, setLinks] = useState({});
  const [state, setState] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/codinglinksdetails", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.success === true) {
          setLinks(res.data.data);
          setState(true);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="codingprofile_container">
      <div className="coding_title">Coding Profile</div>
      <div className="coding_inner_container">
        <a href={links.leetcode} target="_blank">
          <span>
            <img src={leetcode} className="pointer coding_image" />
          </span>
        </a>
        <a href={links.gfg} target="_blank">
          <span>
            <img src={gfg} className="pointer coding_image" />
          </span>
        </a>
        <a href={links.codeforces} target="_blank">
          <span>
            <img src={codeforces} className="pointer coding_image" />
          </span>
        </a>
        <a href={links.codechef} target="_blank">
          <span>
            <img src={cc} className="pointer coding_image" />
          </span>
        </a>
      </div>
    </div>
  );
}

export default Codingprofile;
