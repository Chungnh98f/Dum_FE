import React from "react";
import UserTag from "./UserTag";
import { GetAuthStateContext } from "./../../store/context/authContext";

function UserList(props) {
  const { authState } = GetAuthStateContext();
  console.log(authState);
  return (
    <div>
      {authState.users
        .filter((person) => person.username !== authState.user.username)
        .map((person) => (
          <UserTag username={person.username} avatar={person.photoUrl} />
        ))}
    </div>
  );
}

export default UserList;
