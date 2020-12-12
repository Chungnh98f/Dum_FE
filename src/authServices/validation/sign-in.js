import { checkEmail, checkPassword } from "./check";

export const validateSignIn = (email, password) => {
  const err = {
    hasErr: false,
    content: "",
  };
  if (!checkEmail(email)) {
    err.content = "Invalid email";
    err.hasErr = !err.hasErr;
    return err;
  }
  if (!checkPassword(password)) {
    err.content = "Invalid password";
    err.hasErr = !err.hasErr;
    return err;
  }
  return err;
};
