import React, { useEffect } from "react";

import HomeLayout from "./../../../layouts/Home";
import WithAuth from "./../../../HOC/WithAuth";
import Dashboard from "../../../modules/Dashboard";
import { GetAuthStateContext } from "./../../../store/context/authContext";

function Home(props) {
  const { authState } = GetAuthStateContext();

  useEffect(() => {
    console.log(authState);
  }, [authState]);

  return (
    <HomeLayout>
      <Dashboard />
    </HomeLayout>
  );
}

export default WithAuth(Home);
