import React from "react";
import HomeLayout from "./../../../layouts/Home";
import WithAuth from "./../../../HOC/WithAuth";
import Dashboard from "../../../modules/Dashboard";

function Home(props) {
  return (
    <HomeLayout>
      <Dashboard />
    </HomeLayout>
  );
}

export default WithAuth(Home);
