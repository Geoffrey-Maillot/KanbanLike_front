import { combineReducers } from 'redux';

import loginReducer from './login';
import signupReducer from './signup';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
});

export default rootReducer;
