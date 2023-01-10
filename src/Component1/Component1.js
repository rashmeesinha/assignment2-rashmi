import React from "react";
import Button from "../Utils/Button";

import "./Component1.css";
import Illustration from "./illustration.png";

function Component1() {
  return (
    <div className="container">
      <div className="left">
        <div  className="title" >
          Let's build the future
          <br />
          of design, now.
        </div>
        <br></br>
        <div className="subtitle">
          Create amazing tools and integrations for 1 million <br/>
          users or customize Marvel for your team.
        </div>
        <div style={{display:"flex"}}>  {/* buttons */}
        <Button color="white" bgcolor="#1fb6ff" height="50px" width="170px " border="#1fb6ff">
          Submit your app
        </Button>{" "}
        <span style={{ marginLeft: "20px" }}></span>
        <Button color="#0c1014" bgcolor="white" height="50px" width="170px" border="white">
          View API Docs
        </Button>
        </div>
      </div>
      <div className="right">
        <img src={Illustration} />
      </div>
    </div>
  );
}

export default Component1;
