import api from 'src/api';

import {
  FETCH_LISTS,
  CREATE_NEW_LIST,
  REMOVE_LIST_BDD,
  SUBMIT_PATCH_LIST,
  majLists,
  openCloseListModal,
} from 'src/actions/list';
import { onLoading, offLoading } from 'src/actions/utils';

import maxPosition from 'src/utils';

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
            store.dispatch(majLists(lists));
          })
          .catch((error) => console.log(error))
          .finally(() => store.dispatch(offLoading()));
      }
      return next(action);

    case CREATE_NEW_LIST:
      {
        // Une liste a besoin d'un name, user_id, position.
        const { inputList: name } = store.getState().list;
        const { id: user_id } = store.getState().user;
        const { lists } = store.getState().list;
        const position = maxPosition(lists);

        api
          .post('/list', {
            name,
            position,
            user_id,
          })
          .then((response) => response.data)
          .then(({ lists }) => {
            store.dispatch(majLists(lists));
          })
          .catch((error) => console.log(error));
      }
      return next(action);

    case REMOVE_LIST_BDD:
      {
        const { id: userId } = store.getState().user;
        api
          .delete(`/list/${action.id}`, {
            // Lorsqu'il s'agit d'une route delete ou path, on envoie les params sous forme de data
            data: {
              userId,
            },
          })
          .then((response) => response.data)
          .then(({ lists }) => store.dispatch(majLists(lists)))
          .catch((error) => console.log(error));
      }

      return next(action);

    case SUBMIT_PATCH_LIST:
      {
        const { id: userId } = store.getState().user;
        const name = store.getState().list;

        api
          .patch(`/list/${action.listId}`, {
            userId,
            name,
          })
          .then((response) => response.data)
          .then(({ lists }) => {
            store.dispatch(majLists(lists));
            store.dispatch(openCloseListModal());
          })
          .catch((error) => console.log(error));
      }
      return next(action);

    default:
      return next(action);
  }
};
