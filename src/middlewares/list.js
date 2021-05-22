import api from 'src/api';

import { FETCH_LISTS, saveLists } from 'src/actions/list';
import { onLoading, offLoading } from 'src/actions/utils';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_LISTS:
      {
        store.dispatch(onLoading());
        const { id } = store.getState().user;
        api
          .get(`/list/${id}`)
          .then((response) => response.data)
          .then(({ lists }) => {
            store.dispatch(saveLists(lists));
          })
          .catch((error) => console.log(error))
          .finally(() => store.dispatch(offLoading()));
      }
      return next(action);

    default:
      return next(action);
  }
};
