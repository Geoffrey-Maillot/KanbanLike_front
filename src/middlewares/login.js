import api from 'src/api';

import { SEND_LOGIN, REHYDRATE, LOGOUT, login } from 'src/actions/login';
import { openSnackBar } from 'src/actions/utils';

export default (store) => (next) => (action) => {
  // console.log('Passage dans le middleware', action);
  switch (action.type) {
    case SEND_LOGIN:
      {
        const { email, password } = store.getState().login;
        api
          .post('/login', {
            email,
            password,
          })
          .then((response) => response.data)
          .then(({ token }) => {
            localStorage.setItem('jwtToken', token);
            api.defaults.headers.common.Authorization = `Bearer ${token}`;
            store.dispatch(login(token));
            store.dispatch(openSnackBar('Connexion réussi', 'success'));
          })
          .catch((error) => {
            store.dispatch(openSnackBar("Une erreur s'est produite, veuillez réessayer", 'error'));
            console.log(error);
          });
      }
      return next(action);

    case REHYDRATE: {
      const token = localStorage.getItem('jwtToken');
      if (token) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        store.dispatch(login(token));
      }
      return next(action);
    }
    case LOGOUT:
      localStorage.removeItem('jwtToken');
      return next(action);

    default:
      return next(action);
  }
};
