// actions list
export const ON_LOADING = 'ON_LOADING';
export const OFF_LOADING = 'OFF_LOADING';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CHANGE_THEME = 'CHANGE_THEME';

// actions creators
export const onLoading = () => ({
  type: ON_LOADING,
});

export const offLoading = () => ({
  type: OFF_LOADING,
});

export const closeSnackBar = () => ({
  type: CLOSE_SNACKBAR,
});

export const openSnackBar = (message, typeColor) => ({
  type: OPEN_SNACKBAR,
  message,
  typeColor,
});

export const changeTheme = (color) => ({
  type: CHANGE_THEME,
  color,
});
