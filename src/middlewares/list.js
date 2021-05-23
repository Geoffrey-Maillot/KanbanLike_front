import api from 'src/api';

import { FETCH_LISTS, CREATE_NEW_LIST, saveLists, saveNewList } from 'src/actions/list';
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

    case CREATE_NEW_LIST:
      {
        const { inputList: name } = store.getState().list;
        const { id: user_id } = store.getState().user;
        const position = store.getState().list.lists.length + 1;

        api
          .post('/list', {
            name,
            position,
            user_id,
          })
          .then((response) => response.data)
          .then(({ newList }) => {
            store.dispatch(saveNewList(newList));
          })
          .catch((error) => console.log(error));
      }
      return next(action);

    default:
      return next(action);
  }
};
