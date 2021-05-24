import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import login from 'src/middlewares/login';
import signup from 'src/middlewares/signup';
import list from 'src/middlewares/list';
import card from 'src/middlewares/card';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// On liste les middleware dans "applyMiddleware"
const enhancers = composeEnhancers(applyMiddleware(login, signup, list, card));

const store = createStore(reducer, enhancers);

export default store;
