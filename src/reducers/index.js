import { combineReducers } from 'redux';

import loginReducer from './login';
import signupReducer from './signup';
import utilsReducer from './utils';
import userReducer from './user';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  utils: utilsReducer,
  user: userReducer,
});

export default rootReducer;
