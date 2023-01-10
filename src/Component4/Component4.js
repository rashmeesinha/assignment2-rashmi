import React from "react";

import "./Component4.css";
import Button from "../Utils/Button";

import showcase from "./showcase.png";
import Bot from "./botbot.png";

function Component4() {
  return (
    <div className="container-component4">
      <div className="child-component4">
        <div className="left">
          <div className="title">
            Showcase your app in our integrations directory
          </div>
          <br></br>
          <div className="subtitle">
            Building something special? We're are always looking to work with
            partners who want to help the world bring their ides to life.
          </div>
          <div className="leftButtons" style={{ display: "flex" }}>
            {" "}
            {/* buttons */}
            <Button
              color="#0c1014"
              bgcolor="white"
              height="50px"
              width="150px "
              border="white"
            >
              Become a partner
            </Button>{" "}
            <span style={{ marginLeft: "20px", marginTop: "20px" }}></span>
            <Button
              color="white"
              bgcolor="#0c1014"
              height="50px"
              width="150px"
              border="white"
            >
              View integrations
            </Button>
          </div>
        </div>
        <div className="right">
          <img src={showcase} alt="showcase"></img>
        </div>
      </div>
      <div className="child-component4" id="child-2">
        <div className="right">
          <img src={Bot} alt="showcase"></img>
        </div>
        <div className="left">
          <div className="title">
            A-slack bot for creating and managing prototypes
          </div>
          <br></br>
          <div className="subtitle">
            Checkout our API example BotBot, a bot for creating, viewing and
            managing prototypes by simply using slash commands in slack. Grab
            the code and make your own bot!
          </div>
          <div className="leftButtons" style={{ display: "flex" }}>
            {" "}
            {/* buttons */}
            <Button
              color="#0c1014"
              bgcolor="white"
              height="50px"
              width="170px "
              border="white"
            >
              View on Github
            </Button>{" "}
            <span style={{ marginLeft: "20px", marginTop: "20px" }}></span>
            <Button
              color="white"
              bgcolor="#0c1014"
              height="50px"
              width="170px"
              border="white"
            >
              Try the Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component4;
