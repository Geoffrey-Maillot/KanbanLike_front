import { OPEN_CLOSE_SIGNUP, ON_LOADING, OFF_LOADING } from 'src/actions/utils';

const initialState = {
  signupIsOpen: false,
  loading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_CLOSE_SIGNUP:
      return {
        ...state,
        signupIsOpen: !state.signupIsOpen,
      };
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
    default:
      return state;
  }
};
