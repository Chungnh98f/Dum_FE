import React from "react";
import { Button } from "antd";
import {
  AudioMutedOutlined,
  VideoCameraOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
function FunctionalTab(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        style={{ margin: "15px" }}
        type={true ? "primary" : "dashed"}
        shape="circle"
        icon={<AudioMutedOutlined />}
      />
      <Button
        style={{ margin: "15px" }}
        type={true ? "primary" : "dashed"}
        shape="circle"
        icon={<VideoCameraOutlined />}
      />
      <Button
        style={{ margin: "15px" }}
        type="primary"
        danger
        shape="circle"
        icon={<PhoneOutlined />}
      />
    </div>
  );
}

export default FunctionalTab;
