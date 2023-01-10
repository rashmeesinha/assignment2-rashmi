import React from "react";

import "./Component3.css"
import apiTeam from "./apiTeam.png";
import graphQL from "./graphQL.png";
import superchargeWorkflow from "./superchargeWorkflow.png";

function Component3() {
  return (
    <div className="container-component3">
      <div className="child-component3">
        <img src={apiTeam}></img>
        <div className="title">
          Dedicated API Team
        </div>
        <br></br>
        <div className="subtitle">
          Our team are available for user's questions via our slack Developer Community and Email
        </div>
      </div>

      <div className="child-component3">
        <img src={graphQL}></img>
        <div className="title">
          Our API uses GraphQL
        </div>
        <br></br>
        <div className="subtitle">
          No handling Server side. Get many APIs responses in a single request.
        </div>
      </div>

      <div className="child-component3">
        <img src={superchargeWorkflow}></img>
        <div className="title">
          Supercharge your Workflow
        </div>
        <br></br>
        <div className="subtitle">
          Automate Workflow automate and analyse data an dtake marvel to the next level.
        </div>
      </div>
    </div>
  );
}

export default Component3;
