import { MAJ_LISTS, CHANGE_VALUE, OPEN_CLOSE_LIST_MODAL } from 'src/actions/list';

const initialState = {
  inputList: '',
  inputCard: '',
  inputListModal: '',
  listModalIsOpen: false,
  lists: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    case MAJ_LISTS:
      console.log(action.lists);
      return {
        ...state,
        inputList: '',
        inputCard: '',
        lists: action.lists,
      };

    case OPEN_CLOSE_LIST_MODAL:
      return {
        ...state,
        listModalIsOpen: !state.listModalIsOpen,
        inputListModal: '',
      };

    default:
      return state;
  }
};
