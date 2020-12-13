import React from "react";
import { useHistory } from "react-router-dom";
import { Col, Layout, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

import { HomeContainer } from "./home.styles";
import logo from "./../../assets/img/logo.jpeg";
import { GetAuthStateContext } from "./../../store/context/authContext";
import { getLogout } from "./../../store/middlewares/authMiddleware";

const HomeLayout = (props) => {
  const { authState, dispatch } = GetAuthStateContext();
  const history = useHistory();
  const onSignout = () => {
    getLogout(dispatch)
      .then((res) => {
        history.push("/");
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };
  return (
    <HomeContainer>
      <Layout.Header className="header" theme="light">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <Menu theme="light" mode="horizontal">
          <span>{`Hello ${authState.user.username || "No name"}`}</span>
          <Menu.Item onClick={onSignout}>Sign out</Menu.Item>
        </Menu>
      </Layout.Header>
      <Col
        xs={{ span: 20, offset: 2 }}
        md={{ span: 18, offset: 3 }}
        className="home-content"
      >
        {props.children}
      </Col>
    </HomeContainer>
  );
};

export default HomeLayout;
