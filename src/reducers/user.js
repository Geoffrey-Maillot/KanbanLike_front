import { LOGIN, LOGOUT } from 'src/actions/login';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  id: null,
  logged: false,
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
        logged: true,
      };
    }

    case LOGOUT:
      return {
        ...state,
        logged: false,
        firstName: '',
        lastName: '',
        email: '',
        id: null,
      };

    default:
      return state;
  }
};
