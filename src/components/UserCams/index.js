import React from "react";
import VideoCard from "./VideoCard";
import { CamsContainer } from "./usercams.styles";

function UserCams(props) {
  const { userCams } = props;
  return (
    <CamsContainer>
      <div className="cam-list">
        {userCams.map((cam) => (
          <VideoCard className="cam-card" username={cam.username} />
        ))}
      </div>
    </CamsContainer>
  );
}

export default UserCams;
