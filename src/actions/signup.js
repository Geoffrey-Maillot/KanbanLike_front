// actions list
export const SIGNUP_CHANGE_VALUE = ' SIGNUP_CHANGE_VALUE';
export const SEND_SIGNUP = 'SEND_SIGNUP';
export const OPEN_CLOSE_SIGNUP = ' OPEN_CLOSE_SIGNUP';

// action creators
export const signupChangeValue = (name, value) => ({
  type: SIGNUP_CHANGE_VALUE,
  name,
  value,
});

export const sendSignup = () => ({
  type: SEND_SIGNUP,
});

export const openCloseSignup = () => ({
  type: OPEN_CLOSE_SIGNUP,
});
