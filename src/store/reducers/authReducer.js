import {
  GetLoginPending,
  GetLoginFailed,
  GetLoginSuccess,
  GetLogoutPending,
  GetLogoutSuccess,
  GetLogoutFailed,
  GetRegisterPending,
  GetRegisterSuccess,
  GetRegisterFailed,
  GetSocketDisconnect,
  GetSocketConnect,
} from "./../actions/authAction/authActionTypes";

export const initAuthState = {
  pending: false,
  error: null,
  user: {},
  socket: null,
  socketId: "",
  users: [],
  messages: [],
};

export function authReducer(state = initAuthState, action) {
  const { type, payload } = action;
  switch (type) {
    case GetLoginPending:
      return {
        ...state,
        pending: true,
      };
    case GetLoginSuccess:
      return {
        ...state,
        error: {},
        pending: false,
        user: payload,
      };
    case GetLoginFailed:
      return {
        ...state,
        pending: false,
        error: payload,
      };
    case GetLogoutPending:
      return {
        ...state,
        pending: true,
      };
    case GetLogoutSuccess:
      return {
        ...state,
        pending: false,
        error: null,
        user: {},
      };
    case GetLogoutFailed:
      return {
        ...state,
        pending: false,
        error: payload,
      };
    case GetRegisterPending:
      return {
        ...state,
        pending: true,
      };
    case GetRegisterSuccess:
      return {
        ...state,
        error: {},
        pending: false,
        user: payload,
      };
    case GetRegisterFailed:
      return {
        ...state,
        pending: false,
        error: payload,
      };
    case GetSocketConnect:
      return {
        ...state,
        pending: false,
        socket: payload,
      };
    case GetSocketDisconnect:
      return {
        ...state,
        pending: false,
        socket: {},
      };
    case "UpdateUserList":
      return {
        ...state,
        pending: false,
        socket: {},
        users: payload,
      };
    case "UpdateMessages":
      return {
        ...state,
        pending: false,
        messages: state.messages.concat(payload),
      };
    default:
      return state;
  }
}
