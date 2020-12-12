import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  FileImageOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";

import { validateSignUp } from "./../../authServices/validation/sign-up";
import { error } from "./../../utilities/notifications";
import { GetAuthStateContext } from "./../../store/context/authContext";
import { getRegister } from "./../../store/middlewares/authMiddleware";

export const SignUpForm = () => {
  const history = useHistory();
  const { dispatch } = GetAuthStateContext();

  const onFinish = (values) => {
    const { username, email, password, confirmPassword, photoUrl } = values;
    const result = validateSignUp(email, password, confirmPassword);
    if (result.hasErr) {
      error(result.content);
      return;
    }
    getRegister(dispatch, { email, username, password, photoUrl })
      .then((res) => history.push("/auth/sign-in"))
      .catch((error) => console.log(error));
  };

  return (
    <Form name="signup_form" className="login-form" onFinish={onFinish}>
      <h1>Register</h1>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item name="photoUrl">
        <Input
          prefix={<FileImageOutlined className="site-form-item-icon" />}
          placeholder="Photo Url"
        />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="Email"
          type="email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: "Please input your Password again!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Confirm password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Create your account
        </Button>
      </Form.Item>
    </Form>
  );
};
