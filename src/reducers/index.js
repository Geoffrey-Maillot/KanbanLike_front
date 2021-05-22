import { combineReducers } from 'redux';

import loginReducer from './login';
import signupReducer from './signup';
import utilsReducer from './utils';
import userReducer from './user';
import listReducer from './list';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  utils: utilsReducer,
  user: userReducer,
  list: listReducer,
});

export default rootReducer;
