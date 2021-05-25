/* eslint-disable camelcase */
import api from 'src/api';

import {
  CREATE_NEW_CARD,
  REMOVE_CARD,
  SUBMIT_PATCH_CARD,
  SAVE_POSITION_CARD,
  openCloseCardModal,
} from 'src/actions/card';
import { majLists } from 'src/actions/list';

import maxPosition from 'src/utils';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_NEW_CARD:
      {
        const { id: userId } = store.getState().user;
        const { inputCard: name } = store.getState().list;
        const list_id = action.id;
        // Pour déterminer la position, je trouve mon tableau de card en fonction de la list,
        const { lists } = store.getState().list;
        const filteredLists = lists.filter((list) => list.id === list_id);
        const { cards } = filteredLists[0];
        // et je l'envoie à ma fonction qui me calcule la position
        const position = maxPosition(cards);
        console.log(position);
        api
          .post('/card', {
            name,
            position,
            list_id,
            userId,
          })
          .then((response) => response.data)
          .then(({ lists }) => {
            store.dispatch(majLists(lists));
          })
          .catch((error) => console.log(error));
      }
      return next(action);

    case REMOVE_CARD:
      {
        const { id: userId } = store.getState().user;
        api
          .delete(`/card/${action.id}`, {
            data: {
              userId,
            },
          })
          .then((response) => response.data)
          .then(({ lists }) => store.dispatch(majLists(lists)))
          .catch((error) => console.log(error));
      }

      return next(action);

    case SUBMIT_PATCH_CARD:
      {
        const { id: userId } = store.getState().user;
        const { inputCardModal: name } = store.getState().list;

        api
          .patch(`/card/${action.cardId}`, {
            userId,
            name,
          })
          .then((response) => response.data)
          .then(({ lists }) => {
            store.dispatch(majLists(lists));
            store.dispatch(openCloseCardModal());
          })
          .catch((error) => console.log(error));
      }
      return next(action);

    case SAVE_POSITION_CARD:
      {
        const { id: userId } = store.getState().user;
        const { listId: list_id, position } = action;
        api
          .patch(`/card/${action.cardId}`, {
            userId,
            list_id,
            position,
          })
          .then((response) => response.data)
          .then(({ lists }) => {
            store.dispatch(majLists(lists));
            // store.dispatch(openCloseCardModal());
          })
          .catch((error) => console.log(error));
      }

      return next(action);
    default:
      return next(action);
  }
};
