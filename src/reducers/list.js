import { MAJ_LISTS, CHANGE_VALUE, OPEN_CLOSE_LIST_MODAL } from 'src/actions/list';
import { OPEN_CLOSE_CARD_MODAL, CHANGE_VALUE_CARD } from 'src/actions/card';

const initialState = {
  listId: null,
  cardid: null,
  inputList: '',
  inputCard: {},
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

    case CHANGE_VALUE_CARD:
      return {
        ...state,
        inputCard: {
          ...state.inputCard,
          [action.id]: action.value,
        },
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
        listId: action.listId,
      };
    case OPEN_CLOSE_CARD_MODAL:
      return {
        ...state,
        cardModalIsOpen: !state.cardModalIsOpen,
        inputCardModal: '',
        cardId: action.cardId,
      };

    default:
      return state;
  }
};
