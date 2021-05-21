import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
/*import login from 'src/midlewares/login';
import signup from 'src/midlewares/signup';*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// On liste les middleware dans "applyMiddleware"
const enhancers = composeEnhancers(applyMiddleware());

const store = createStore(reducer, enhancers);

export default store;
