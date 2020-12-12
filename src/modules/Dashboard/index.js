import React from "react";
import { Button } from "antd";

import { DashboardContainer } from "./dashboard.styles";
import Chatbox from "./../../components/Chatbox";

function Dashboard(props) {
  return (
    <DashboardContainer>
      <div className="user-list">userlist</div>
      <div className="mainboard">
        <div className="main-action">
          <button className="button">Create room</button>
          <button className="button">Join room</button>
        </div>
        <div className="chatbox">
          <Chatbox />
        </div>
      </div>
    </DashboardContainer>
  );
}

export default Dashboard;
