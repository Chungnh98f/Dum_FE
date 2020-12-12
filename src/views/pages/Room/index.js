import React from "react";
import RoomLayout from "./../../../layouts/Room";
import WithAuth from "./../../../HOC/WithAuth";
import FunctionalTab from "../../../components/FunctionalTab";
import UserCams from "../../../components/UserCams";

function Room(props) {
  return (
    <RoomLayout>
      <UserCams
        userCams={[
          { username: "Duy" },
          { username: "Chung" },
          { username: "Minh" },
          { username: "An" },
        ]}
      />
      <FunctionalTab />
    </RoomLayout>
  );
}

export default WithAuth(Room);
