import React from "react";
import io from "socket.io-client";

import { Input, Form, Button } from "antd";
import { GetAuthStateContext } from "./../../store/context/authContext";
import TextMsg from "./TextMessage";

function Chatbox(props) {
  const { authState } = GetAuthStateContext();
  const [form] = Form.useForm();
  const sendMess = (values) => {
    if (!values.message) {
      return;
    }
    authState.socket = io.connect("http://localhost:5050/");
    authState.socket.on("connect", () => {
      authState.socket.emit("send-message-main-room", {
        ...authState.user,
        content: values.message,
      });
    });

    form.resetFields();
  };

  return (
    <div>
      <div>
        {authState.messages.map((mess) => (
          <TextMsg data={mess} />
        ))}
      </div>
      <Form
        form={form}
        name="signup_form"
        className="login-form"
        onFinish={sendMess}
      >
        <Form.Item name="message">
          <div style={{ display: "flex" }}>
            <Input placeholder="Text something" type="text" />

            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Send
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Chatbox;
