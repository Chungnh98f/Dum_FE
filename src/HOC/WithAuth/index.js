import React from "react";
import { Redirect } from "react-router-dom";

import sessionToken from "./../../authServices/token";
import { GetAuthStateContext } from "./../../store/context/authContext";

function WithAuth(Component) {
  return function (props) {
    const { authState } = GetAuthStateContext();
    const _sessionToken = sessionToken.getToken();

    if (!_sessionToken && !authState.user.accessToken) {
      return <Redirect to="/auth" />;
    }

    return <Component {...props} />;
  };
}

export default WithAuth;
