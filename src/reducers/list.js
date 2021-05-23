import { SAVE_LISTS, LIST_CHANGE_VALUE, SAVE_NEW_LIST, REMOVE_LIST } from 'src/actions/list';
import list from '../middlewares/list';

const initialState = {
  inputList: '',
  inputCard: '',
  lists: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_LISTS:
      return {
        ...state,
        lists: action.lists,
      };

    case LIST_CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    case SAVE_NEW_LIST:
      return {
        ...state,
        inputList: '',
        lists: [...state.lists, action.newList],
      };

    case REMOVE_LIST:
      {
      const lists = state.lists.filter((list) => list.id !== action.id)
      return {
      ...state,
      lists,
}
}
    
    default:
      return state;
  }
};
