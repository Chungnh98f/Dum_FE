import {
  GetLoginPending,
  GetLoginSuccess,
  GetLoginFailed,
  GetLogoutPending,
  GetLogoutSuccess,
  GetLogoutFailed,
  GetRegisterPending,
  GetRegisterSuccess,
  GetRegisterFailed,
  GetSocketConnect,
  GetSocketDisconnect,
} from "./authActionTypes";

export function getLoginPending() {
  return {
    type: GetLoginPending,
  };
}

export function getLoginSuccess(payload) {
  return {
    type: GetLoginSuccess,
    payload: payload,
  };
}
export function getLoginFailed(payload) {
  return {
    type: GetLoginFailed,
    payload: payload,
  };
}

export function getLogoutPending() {
  return {
    type: GetLogoutPending,
  };
}
export function getLogoutSuccess(payload) {
  return {
    type: GetLogoutSuccess,
    payload: payload,
  };
}
export function getLogoutFailed(payload) {
  return {
    type: GetLogoutFailed,
    payload: payload,
  };
}
export function getRegisterPending() {
  return {
    type: GetRegisterPending,
  };
}
export function getRegisterSuccess(payload) {
  return {
    type: GetRegisterSuccess,
    payload: payload,
  };
}
export function getRegisterFailed(payload) {
  return {
    type: GetRegisterFailed,
    payload: payload,
  };
}
export function getSocketConnect(payload) {
  return {
    type: GetSocketConnect,
    payload: payload,
  };
}
export function getSocketDisconnect() {
  return {
    type: GetSocketDisconnect,
  };
}
