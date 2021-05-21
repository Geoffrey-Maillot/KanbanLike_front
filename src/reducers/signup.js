import { SIGNUP_CHANGE_VALUE } from 'src/actions/signup';

export const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGNUP_CHANGE_VALUE:
      console.log('Je passe dans le reducer');

      return {
        ...state,
        [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
