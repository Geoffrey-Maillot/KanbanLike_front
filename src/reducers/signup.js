import { SIGNUP_CHANGE_VALUE, OPEN_CLOSE_SIGNUP } from 'src/actions/signup';

export const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  signupIsOpen: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGNUP_CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case OPEN_CLOSE_SIGNUP:
      return {
        ...state,
        signupIsOpen: !state.signupIsOpen,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      };
    default:
      return state;
  }
};

export default reducer;
