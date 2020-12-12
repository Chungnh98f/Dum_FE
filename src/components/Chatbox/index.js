import React from "react";
import { Input, Form, Button } from "antd";

function Chatbox(props) {
  const [form] = Form.useForm();
  const sendMess = (values) => {
    if (!values.message) {
      return;
    }
    console.log(values.message);
    form.resetFields();
  };

  return (
    <div>
      <div className="messages-container"></div>
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
