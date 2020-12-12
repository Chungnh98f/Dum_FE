import React from "react";

function UserTag(props) {
  const { username, photoUrl } = props;
  return (
    <div>
      <img src={photoUrl} alt={`${username} avatar`} />
      <span>{username}</span>
    </div>
  );
}

export default UserTag;
