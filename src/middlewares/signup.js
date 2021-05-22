/* eslint-disable camelcase */
import api from 'src/api';

import { SEND_SIGNUP } from 'src/actions/signup';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_SIGNUP:
      {
        const {
          firstName: first_name,
          lastName: last_name,
          email,
          password,
        } = store.getState().signup;
        api
          .post('/signup', {
            first_name,
            last_name,
            email,
            password,
          })
          .catch((error) => console.log(error));
      }
      return next(action);

    default:
      return next(action);
  }
};
