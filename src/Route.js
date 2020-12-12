import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthPage from "./views/pages/Authentication";
import Home from "./views/pages/Home";
import Room from "./views/pages/Room";
import NotFound from "./views/pages/404";
import { GetAuthStateContext } from "./store/context/authContext";
import sessionToken from "./authServices/token";

const AppRoute = () => {
  const { authState } = GetAuthStateContext();
  const _sessionToken = sessionToken.getToken();

  return (
    <Switch>
      <Route
        path="/auth"
        render={() => {
          if (!_sessionToken && !authState.user.accessToken) {
            return <AuthPage />;
          }
          return <Redirect to="/" />;
        }}
      />
      <Route exact path="/" component={Home} />
      <Route path="/room" component={Room} />
      <Route path="/404" component={NotFound} />
      <Redirect to="404" />
    </Switch>
  );
};

export default AppRoute;
