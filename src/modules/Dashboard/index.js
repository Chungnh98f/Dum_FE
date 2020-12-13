import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Modal, Form, Input, Button, Radio } from "antd";

import { DashboardContainer } from "./dashboard.styles";
import Chatbox from "./../../components/Chatbox";
import UserList from "../../components/UserList";

function Dashboard(props) {
  const [dumId, setDumID] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const createDum = () => {
    const id = uuid();
    history.push(`/room/${id}`);
  };

  const joinDum = () => {
    history.push(`/room/${dumId}`);
  };
  return (
    <DashboardContainer>
      <div className="user-list">
        <UserList />
      </div>
      <div className="mainboard">
        <div className="main-action">
          <button className="button" onClick={createDum}>
            Create room
          </button>
          <button className="button" onClick={showModal}>
            Join room
          </button>
          <Modal
            title="Join Dum"
            visible={isModalVisible}
            onOk={joinDum}
            onCancel={handleCancel}
          >
            <Input
              type="text"
              value={dumId}
              onChange={(e) => setDumID(e.target.value)}
            />
          </Modal>
        </div>
        <div className="chatbox">
          <Chatbox />
        </div>
      </div>
    </DashboardContainer>
  );
}

export default Dashboard;
