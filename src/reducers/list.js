import { SAVE_LISTS } from 'src/actions/list';

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
    default:
      return state;
  }
};
