import React from "react";
import { useState } from "react";

import Button from "../Utils/Button";

import "./Navbar.css";
import LogoWhite from "./logo-white.svg";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="navbar">
      <div className="navLeft">
        {" "}
        <img src={LogoWhite}></img>
        <span className="bar"></span> <b> Developers</b>
      </div>
      <div className="navRight" id={showLinks ? "hidden" : ""}> {/* links */}
        <span>Why Marvel</span>
        <span>Enterprise</span>
        <span>Pricing</span>
        <span>Sign In</span>
        <span>
          {" "}
          <Button color="#0c1014" bgcolor="white" height="40px" width="100px" border="white">
            Sign Up free
          </Button>
        </span>
      </div>
      <div className="hamburger" onClick={() => setShowLinks(!showLinks)}> {/*/hamburger button*/}
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Navbar;
