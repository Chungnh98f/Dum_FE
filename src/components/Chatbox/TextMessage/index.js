import React from "react";
import { MessageContainer } from "./message.styles";
import { GetAuthStateContext } from "../../../store/context/authContext";
import checkPhotoUrl from "../../../authServices/checkPhotoUrl";
// Props rececive user{content,photoUrl,id,username} and id;
const TextMsg = (props) => {
  const { authState } = GetAuthStateContext();
  const { data } = props;
  console.log(data);
  return (
    <MessageContainer
      style={
        data.username === authState.user.username
          ? {
              display: "flex",
              placeSelf: "flex-end",
              justifyContent: "flex-end",
              marginBottom: "14px",
            }
          : {
              display: "flex",
              placeSelf: "flex-start",
              justifyContent: "flex-start",
              marginBottom: "14px",
            }
      }
    >
      {data.username !== authState.user.username ? (
        <img src={checkPhotoUrl(data.photoUrl)} className="avatar" alt="avatar"></img>
      ) : (
        ""
      )}
      <div
        className={`w-fit p-relative radius-12 h-fit
          ${
            data.username === authState.user.username
              ? "justifyEnd backgroundBlue colorWhite"
              : "justifyStart backgroundLight colorDark"
          }
         `}
      >
        <small>{data.username}</small>
        <p>{data.content}</p>
      </div>
      {data.username === authState.user.username ? (
        <img src={checkPhotoUrl(data.photoUrl)} className="avatar" alt="avatar"></img>
      ) : (
        ""
      )}
    </MessageContainer>
  );
};

export default TextMsg;
