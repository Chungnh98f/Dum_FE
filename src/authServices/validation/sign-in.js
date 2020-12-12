import { checkEmail, checkPassword } from "./check";

export const validateSignIn = (email, password) => {
  const err = {
    hasErr: false,
    content: "",
  };
  if (!checkEmail(email)) {
    err.content = "Email is invalid";
    err.hasErr = !err.hasErr;
    return err;
  }
  if (checkPassword(password)) {
    err.content = "Password is too short";
    err.hasErr = !err.hasErr;
    return err;
  }
  return err;
};
