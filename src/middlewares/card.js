import api from 'src/api';

import { CREATE_NEW_CARD } from 'src/actions/card';
import { majLists } from 'src/actions/list';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_NEW_CARD:
      {
        const { inputCard: name } = store.getState().list;
        const list_id = action.id;
        // Pour déterminer la position, je trouve la liste de la carte,
        // et je calcule la taille de son tableau de cards + 1.
        const { lists } = store.getState().list;
        console.log(lists);
        const filteredLists = lists.filter((list) => list.id === list_id);
        console.log(filteredLists);
        const position = filteredLists[0].cards.length + 1;
        console.log(position);
        api
          .post('/card', {
            name,
            position,
            list_id,
          })
          .then((response) => response.data)
          .then(({ lists }) => {
            console.log(newCard);
            store.dispatch(majLists(lists));
          })
          .catch((error) => console.log(error));
      }
      return next(action);

    /* case REMOVE_LIST_BDD:
        api.delete(`/list/${action.id}`)
        .then(()=> store.dispatch(removeList(action.id)))
        .catch((error) => console.log(error))

      return next(action) */

    default:
      return next(action);
  }
};
