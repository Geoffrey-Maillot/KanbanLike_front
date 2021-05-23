import { SAVE_LISTS, LIST_CHANGE_VALUE, SAVE_NEW_LIST } from 'src/actions/list';

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
        lists: [...state.lists, action.newList],
      };
    default:
      return state;
  }
};
