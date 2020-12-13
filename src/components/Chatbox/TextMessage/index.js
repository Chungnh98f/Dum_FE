import React from "react";
import { MessageContainer } from "./message.styles";
import { GetAuthStateContext } from "../../../store/context/authContext";
// Props rececive user{content,photoUrl,id,username} and id;
const TextMsg = (props) => {
  const { authState } = GetAuthStateContext();
  const { data } = props;
  return (
    <MessageContainer>
      <div
        className={
          data.username === authState.user.username
            ? "justifyEnd backgroundBlue colorWhite"
            : "justifyStart backgroundLight colorDark"
        }
      >
        <small>{data.username}</small>
        <p>{data.content}</p>
        <img src={data.photoUrl} alt="avatar" />
      </div>
    </MessageContainer>
  );
};

export default TextMsg;
