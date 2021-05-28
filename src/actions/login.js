// actions list
export const LOGIN_CHANGE_VALUE = 'LOGIN_CHANGE_VALUE';
export const SEND_LOGIN = 'SEND_LOGIN';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

// action creator
export const loginChangeValue = (name, value) => ({
  type: LOGIN_CHANGE_VALUE,
  name,
  value,
});

export const sendLogin = () => ({
  type: SEND_LOGIN,
});

export const login = (user) => ({
  type: LOGIN,
  user,
});

export const logout = () => ({
  type: LOGOUT,
});
