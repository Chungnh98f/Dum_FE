import React from "react";
import { useHistory } from "react-router-dom";
import { Col, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";

import { AuthenticationContainer } from "./authentication.styles";
import logo from "./../../assets/img/logo.jpeg";

const AuthLayout = (props) => {
  const history = useHistory();
  const handleClick = (e) => {
    history.push(e.key);
  };
  return (
    <AuthenticationContainer>
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
          <Menu.Item key="/auth/sign-in" className="font-content">
            Login
          </Menu.Item>
          <Menu.Item key="/auth/sign-up" className="font-content">
            Register
          </Menu.Item>
        </Menu>
      </Layout.Header>
      <Col
        xs={{ span: 20, offset: 2 }}
        sm={{ span: 12, offset: 6 }}
        md={{ span: 8, offset: 8 }}
        className="form"
      >
        {props.children}
      </Col>
    </AuthenticationContainer>
  );
};

export default AuthLayout;
