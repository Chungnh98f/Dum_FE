import React from "react";
import { useHistory } from "react-router-dom";
import { Col, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

import { RoomContainer } from "./room.styles";
import logo from "./../../assets/img/logo.jpeg";

const RoomLayout = (props) => {
  const history = useHistory();
  const handleClick = (e) => {
    history.push(e.key);
  };
  return (
    <RoomContainer>
      <Layout.Header className="header" theme="light">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["/auth/sign-in"]}
          onClick={handleClick}
        >
          <Menu.Item key="/room/invite">Invite</Menu.Item>
          <Menu.Item key="/room/info">Info</Menu.Item>
        </Menu>
      </Layout.Header>
      <Col
        xs={{ span: 20, offset: 2 }}
        md={{ span: 18, offset: 3 }}
        className="room-content"
      >
        {props.children}
      </Col>
    </RoomContainer>
  );
};

export default RoomLayout;
