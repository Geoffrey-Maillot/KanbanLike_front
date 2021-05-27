import { ON_LOADING, OFF_LOADING, CLOSE_SNACKBAR, OPEN_SNACKBAR } from 'src/actions/utils';

const initialState = {
  loading: false,
  snackBar: {
    open: false,
    message: '',
    typeColor: '', // success | info | warning | error
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_LOADING:
      return {
        ...state,
        loading: true,
      };
    case OFF_LOADING:
      return {
        ...state,
        loading: false,
      };
    case CLOSE_SNACKBAR:
      return {
        ...state,
        snackBar: {
          ...state.snakeBar,
          open: false,
          message: '',
          typeColor: '',
        },
      };

    case OPEN_SNACKBAR:
      return {
        ...state,
        snackBar: {
          ...state.snakeBar,
          open: true,
          message: action.message,
          typeColor: action.typeColor,
        },
      };
    default:
      return state;
  }
};
