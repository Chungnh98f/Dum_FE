import { message } from "antd";

import sessionToken from "./../../authServices/token";
import {
  getLoginPending,
  getLoginSuccess,
  getLoginFailed,
  getLogoutPending,
  getLogoutSuccess,
  getLogoutFailed,
  getRegisterPending,
  getRegisterSuccess,
  getRegisterFailed,
  getSocketConnect,
  getSocketDisconnect,
} from "./../actions/authAction/authActionCreators";
import {
  getLoginEffect,
  getLogoutEffect,
  getRegisterEffect,
  connectSocketEffect,
  disconnectSocketEffect,
} from "../effects/authEffect";

const messKeyLogin = "messKeyLogin";
const messKeyLogout = "messKeyLogout";
const messKeyRegister = "messKeyRegister";

export const getLogin = async (dispatch, data) => {
  const { email, password } = data;
  message.loading({
    content: "Login ...",
    key: messKeyLogin,
  });
  dispatch(getLoginPending());
  const res = await getLoginEffect({ email, password });
  const notification = res?.data?.message;

  if (res && res.status >= 200 && res.status <= 300) {
    sessionToken.setToken(res.data);
    message.success({
      content: notification || "Login successful",
      key: messKeyLogin,
      duration: 2,
    });
    dispatch(getLoginSuccess(res.data || {}));
    return 1;
  } else {
    message.error({
      content: notification || "Something went wrong",
      key: messKeyLogin,
      duration: 2,
    });
    dispatch(getLoginFailed(notification || "Something went wrong"));
    throw new Error(notification);
  }
};

export const getRegister = async (dispatch, data) => {
  const { username, password, email, photoUrl } = data;
  message.loading({
    content: "Login ...",
    key: messKeyRegister,
  });
  dispatch(getRegisterPending());
  const res = await getRegisterEffect({ username, password, email, photoUrl });
  const notification = res?.data?.message;

  if (res && res.status >= 200 && res.status <= 300) {
    message.success({
      content: notification || "Login successful",
      key: messKeyRegister,
      duration: 2,
    });
    dispatch(getRegisterSuccess("Register successful"));
    return 1;
  } else {
    message.error({
      content: notification || "Something went wrong",
      key: messKeyRegister,
      duration: 2,
    });
    dispatch(getRegisterFailed(notification || "Something went wrong"));
    throw new Error(notification);
  }
};

export const getLogout = async (dispatch) => {
  message.loading({
    content: "Loading ...",
    key: messKeyLogout,
  });
  dispatch(getLogoutPending());
  const res = await getLogoutEffect();
  const notification = res?.data?.message;

  if (res && res.status >= 200 && res.status <= 300) {
    message.success({
      content: notification || "Logout successful",
      key: messKeyLogout,
      duration: 2,
    });
    sessionToken.clearToken();
    dispatch(getLogoutSuccess());
    return 1;
  } else {
    message.error({
      content: notification || "Something went wrong",
      key: messKeyLogout,
      duration: 2,
    });
    dispatch(getLogoutFailed(notification || "Something went wrong"));
    throw new Error(notification);
  }
};

export const connectSocket = async (dispatch, data) => {};

export const disconnectSocket = async (dispatch) => {};
