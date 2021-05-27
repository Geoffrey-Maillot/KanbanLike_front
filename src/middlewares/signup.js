/* eslint-disable camelcase */
import api from 'src/api';

import { SEND_SIGNUP, openCloseSignup } from 'src/actions/signup';
import { openSnackBar } from 'src/actions/utils';

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
          .then(() => {
            store.dispatch(openCloseSignup());
            store.dispatch(openSnackBar('Inscription réussi', 'success'));
          })
          .catch((error) => {
            store.dispatch(openSnackBar("une erreur s'est produite, veuillez réessayer", 'error'));
            console.log(error);
          });
      }
      return next(action);

    default:
      return next(action);
  }
};
