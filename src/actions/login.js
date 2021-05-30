// actions list
export const LOGIN_CHANGE_VALUE = 'LOGIN_CHANGE_VALUE';
export const SEND_LOGIN = 'SEND_LOGIN';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REHYDRATE = 'REHYDRATE';

// action creator
export const loginChangeValue = (name, value) => ({
  type: LOGIN_CHANGE_VALUE,
  name,
  value,
});

export const sendLogin = () => ({
  type: SEND_LOGIN,
});

export const login = (token) => ({
  type: LOGIN,
  token,
});

export const logout = () => ({
  type: LOGOUT,
});

export const rehydrate = () => ({
  type: REHYDRATE,
});
