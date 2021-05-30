import jwtDecode from 'jwt-decode';
import { LOGIN, LOGOUT } from 'src/actions/login';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  id: null,
  logged: false,
  token: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN: {
      const { first_name: firstName, last_name: lastName, email, id } = jwtDecode(action.token);
      return {
        ...state,
        firstName,
        lastName,
        email,
        id,
        token: action.token,
        logged: true,
      };
    }

    case LOGOUT: {
      return {
        ...state,
        logged: false,
        firstName: '',
        lastName: '',
        email: '',
        id: null,
      };
    }

    default:
      return state;
  }
};
