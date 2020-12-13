import React from "react";
import { useParams } from "react-router-dom";

import RoomLayout from "./../../../layouts/Room";
import WithAuth from "./../../../HOC/WithAuth";
import FunctionalTab from "../../../components/FunctionalTab";
import UserCams from "../../../components/UserCams";

function Room(props) {
  const { id } = useParams();

  return (
    <RoomLayout>
      <h1>{id}</h1>
      <UserCams
        userCams={[
          { username: "Duy" },
          { username: "Chung" },
          { username: "Minh" },
          { username: "An" },
        ]}
        roomId={id}
      />
      {/* <FunctionalTab /> */}
    </RoomLayout>
  );
}

export default WithAuth(Room);
