/* eslint-disable camelcase */
import api from 'src/api';

import {
  CREATE_NEW_CARD,
  REMOVE_CARD,
  SUBMIT_PATCH_CARD,
  SAVE_POSITION_CARD,
  CHECK_CARD,
  openCloseCardModal,
} from 'src/actions/card';
import { majLists } from 'src/actions/list';

import maxPosition from 'src/utils';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_NEW_CARD:
      {
        // Il me faut l'id du user pour récupérer la nouvelle list
        const { id: userId } = store.getState().user;
        // le nom de la carte que l'on récupère avec l'id de la liste
        const name = store.getState().list.inputCard[action.id];
        // Je formate l'id de la carte pour l'envoyer au back
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
        const { inputCardModal: name, cardId } = store.getState().list;

        api
          .patch(`/card/${cardId}`, {
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
          })
          .catch((error) => console.log(error));
      }
      return next(action);

    case CHECK_CARD:
      {
        const { id: userId } = store.getState().user;
        let { listId: list_id, status } = action;
        // Si une carte est marqué commme terminé, je la passe en cours,
        // sinon c'est qu'elle est en cours, je la passe en terminé
        if (status === 'done') {
          status = 'in progress';
        } else {
          status = 'done';
        }
        api
          .patch(`/card/${action.cardId}`, {
            userId,
            list_id,
            status,
          })
          .then((response) => response.data)
          .then(({ lists }) => {
            store.dispatch(majLists(lists));
          })
          .catch((error) => console.log(error));
      }
      return next(action);

    default:
      return next(action);
  }
};
