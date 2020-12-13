import React from "react";
import { MessageContainer } from "./message.styles";
// Props rececive user{content,photoUrl,id,username} and id;
export const TextMsg = (props) => {
  const { user, id } = props;
  let isUser = false;
  if (user.id === id) {
    isUser = true;
  }
  return (
    <MessageContainer>
      <div
        className={
          isUser
            ? "justifyEnd backgroundBlue colorWhite"
            : "justifyStart backgroundLight colorDark"
        }
      >
        <small>{user.username}</small>
        <p>{user.content}</p>
        <img src={user.photoUrl} alt="avatar" />
      </div>
    </MessageContainer>
  );
};
