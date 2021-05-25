import { MAJ_LISTS, CHANGE_VALUE, OPEN_CLOSE_LIST_MODAL } from 'src/actions/list';
import { OPEN_CLOSE_CARD_MODAL } from 'src/actions/card';

const initialState = {
  inputList: '',
  inputCard: '',
  inputListModal: '',
  inputCardModal: '',
  cardModalIsOpen: false,
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
    case OPEN_CLOSE_CARD_MODAL:
      return {
        ...state,
        cardModalIsOpen: !state.cardModalIsOpen,
        inputCardModal: '',
      };

    default:
      return state;
  }
};
