// actions list
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const SEND_LOGIN = 'SEND_LOGIN';

// action creator

export const changeValue = (name, value) => ({
  type: CHANGE_VALUE,
  name,
  value,
});

export const sendLogin = () => ({
  type: SEND_LOGIN,
});
