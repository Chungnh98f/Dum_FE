import React from "react";
import "./index.css";
import "./App.css";
import AppRoute from "./Route";
import { AuthStateProvider } from "./store/context/authContext";

function App() {
  return (
    <>
      <AuthStateProvider>
        <AppRoute />
      </AuthStateProvider>
    </>
  );
}

export default App;
