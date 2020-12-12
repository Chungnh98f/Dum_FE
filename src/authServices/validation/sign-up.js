import { checkEmail, checkPassword, checkConfirmPassword } from "./check";

export const validateSignUp = (email, password, confirmPassword) => {
  if (!checkEmail(email)) {
    return {
      hasErr: true,
      content: "Email is invalid",
    };
  }
  if (!checkPassword(password)) {
    return {
      hasErr: true,
      content: "Password is too short",
    };
  }
  if (!checkConfirmPassword(password, confirmPassword)) {
    return {
      hasErr: true,
      content: "Confirm Password is not match",
    };
  }
  return {
    hasErr: false,
    content: "",
  };
};
