import { MAJ_LISTS, LIST_CHANGE_VALUE} from 'src/actions/list';

import { CARD_CHANGE_VALUE } from 'src/actions/card';

const initialState = {
  inputList: '',
  inputCard: '',
  lists: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LIST_CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    case MAJ_LISTS:
      console.log(action.lists);
      return {
        ...state,
        inputList: '',
        lists: action.lists,
      };

    case CARD_CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
};
