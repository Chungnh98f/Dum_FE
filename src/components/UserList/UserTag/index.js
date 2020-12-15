import React from "react";
import checkPhotoUrl from "../../../authServices/checkPhotoUrl";

function UserTag(props) {
  const { username, avatar } = props;
  console.log("Photo url", avatar);
  return (
    <div style={{ display: "flex", lineHeight: "40px", alignItems: "center" }}>
      <img
        className="avatar"
        src={checkPhotoUrl(avatar)}
        alt={`${username} avatar`}
      />
      <span style={{ marginLeft: 12, fontSize: "16px", fontWeight: "bold" }}>
        {username}
      </span>
      <div
        style={{
          marginLeft: 40,
          backgroundColor: "green",
          width: "10px",
          height: "10px",
          borderRadius: "50%",
        }}
      ></div>
    </div>
  );
}

export default UserTag;
