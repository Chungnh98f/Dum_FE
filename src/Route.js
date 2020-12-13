import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import io from "socket.io-client";

import AuthPage from "./views/pages/Authentication";
import Home from "./views/pages/Home";
import Room from "./views/pages/Room";
import NotFound from "./views/pages/404";
import { GetAuthStateContext } from "./store/context/authContext";
import sessionToken from "./authServices/token";
import {
  getLoginSuccess,
  getSocketConnect,
} from "./store/actions/authAction/authActionCreators";

const AppRoute = () => {
  const { authState, dispatch } = GetAuthStateContext();
  const _sessionToken = sessionToken.getToken();

  useEffect(() => {
    if (_sessionToken) {
      dispatch(getLoginSuccess(_sessionToken));
    }
  }, []);

  useEffect(() => {
    if (authState.user.username) {
      authState.socket = io.connect("http://localhost:5050/");
      authState.socket.on("connect", () => {
        authState.socketId = authState.socket.id;

        authState.socket.emit("user-sign-in-success", {
          ...authState.user,
          id: authState.socket.id,
        });
        authState.socket.on("list-user-online", (users) =>
          dispatch({ type: "UpdateUserList", payload: users })
        );
        authState.socket.on("user-disconnected", (users) =>
          dispatch({ type: "UpdateUserList", payload: users })
        );
        authState.socket.on("create-message-main-room", (message) =>
          dispatch({ type: "UpdateMessages", payload: message })
        );
      });
    }
  }, [authState.user]);

  return (
    <Switch>
      <Route
        path="/auth"
        render={() => {
          const token = !_sessionToken && !authState.user.accessToken;
          if (token) {
            return <AuthPage />;
          }
          return <Redirect to="/" />;
        }}
      />
      <Route exact path="/" component={Home} />
      <Route path="/room/:id" component={Room} />
      <Route path="/404" component={NotFound} />
      <Redirect to="404" />
    </Switch>
  );
};

export default AppRoute;
