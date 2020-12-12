import React from "react";
import UserTag from "./UserTag";

function UserList(props) {
  return (
    <div>
      {props.users.map((person) => (
        <UserTag username={person.username} avatar={person.photoUrl} />
      ))}
    </div>
  );
}

export default UserList;
