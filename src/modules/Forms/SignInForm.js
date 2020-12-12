import React from "react";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

import { validateSignIn } from "./../../authServices/validation/sign-in";
import { error } from "./../../utilities/notifications";
import { GetAuthStateContext } from "./../../store/context/authContext";
import { getLogin } from "./../../store/middlewares/authMiddleware";

export const SignInForm = () => {
  const history = useHistory();
  const { dispatch } = GetAuthStateContext();

  const onFinish = (values) => {
    const { email, password } = values;
    const result = validateSignIn(email, password);
    if (result.hasErr) {
      error(result.content);
      return;
    }
    getLogin(dispatch, { email, password })
      .then((res) => history.push("/"))
      .catch((error) => console.log(error));
  };

  return (
    <Form name="signin_form" className="login-form" onFinish={onFinish}>
      <h1>Log in</h1>
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
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};
