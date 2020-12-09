import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AuthLayout from "../../../layouts/Authentication";
import { SignInForm } from "../../../modules/Forms/SignInForm";
import { SignUpForm } from "../../../modules/Forms/SignUpForm";

const AuthPage = () => {
  return (
    <AuthLayout>
      <Switch>
        <Route exact path="/auth/sign-in">
          <SignInForm />
        </Route>
        <Route exact path="/auth/sign-up">
          <SignUpForm />
        </Route>
        <Redirect to="/auth/sign-in" />
      </Switch>
    </AuthLayout>
  );
};

export default AuthPage;
