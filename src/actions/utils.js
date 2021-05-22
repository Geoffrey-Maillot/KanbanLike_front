// actions list
export const OPEN_CLOSE_SIGNUP = ' OPEN_CLOSE_SIGNUP';
export const ON_LOADING = 'ON_LOADING';
export const OFF_LOADING = 'OFF_LOADING';

// actions creators
export const openCloseSignup = () => ({
  type: OPEN_CLOSE_SIGNUP,
});

export const onLoading = () => ({
  type: ON_LOADING,
});

export const offLoading = () => ({
  type: OFF_LOADING,
});
