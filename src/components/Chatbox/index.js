import React from "react";
import io from "socket.io-client";

import { Input, Form, Button } from "antd";
import { GetAuthStateContext } from "./../../store/context/authContext";
import TextMsg from "./TextMessage";
import { useRef } from "react";
import { useState, useEffect } from "react";

function Chatbox(props) {
  const { authState } = GetAuthStateContext();
  const inputRef = useRef(null);
  const [form] = Form.useForm();
  const [value, setValue] = useState("");
  const messageEl = useRef(null);

  const sendMess = () => {
    if (!value) {
      return;
    }
    authState.socket = io.connect("https://test-xdum.herokuapp.com/");
    authState.socket.on("connect", () => {
      authState.socket.emit("send-message-main-room", {
        ...authState.user,
        content: value,
      });
    });
    setValue("");
    inputRef.current.focus();
  };

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  return (
    <div>
      <div
        style={{
          height: "40vh",
          overflowY: "scroll",
          display: "list-item",
        }}
        ref={messageEl}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            placeContent: "flex-end",
          }}
        >
          {authState.messages.map((mess) => (
            <TextMsg data={mess} />
          ))}
        </div>
      </div>
      <Form
        form={form}
        name="signup_form"
        className="login-form"
        onFinish={sendMess}
      >
        <Form.Item name="message">
          <div
            style={{
              display: "flex",
              position: "relative",
              marginBottom: "20px",
              width: "100%",
              marginTop: "12px",
            }}
          >
            <Input
              ref={inputRef}
              placeholder="Text something"
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />

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
