import { LOGIN } from 'src/actions/login';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  id: null,
  Logged: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN: {
      const { first_name: firstName, last_name: lastName, email, id } = action.user;
      return {
        ...state,
        firstName,
        lastName,
        email,
        id,
        Logged: true,
      };
    }

    default:
      return state;
  }
};
