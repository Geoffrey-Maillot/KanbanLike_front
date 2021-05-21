// Reducer recipes.js
import { CHANGE_VALUE } from 'src/actions/login';

export const initialState = {
  email: '',
  password: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
};

export default reducer;
