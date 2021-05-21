import { OPEN_CLOSE_SIGNUP } from 'src/actions/utils';

const initialState = {
  signupIsOpen: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case OPEN_CLOSE_SIGNUP:
      return {
        ...state,
        signupIsOpen: !state.signupIsOpen,
      };
    default:
      return state;
  }
};
