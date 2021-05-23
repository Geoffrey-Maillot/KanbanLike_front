// actions list
export const FETCH_LISTS = 'FETCH_LISTS';
export const SAVE_LISTS = 'SAVE_LISTS';
export const SAVE_NEW_LIST = 'SAVE_NEW_LIST';
export const CREATE_NEW_LIST = 'CREATE_NEW_LIST';
export const LIST_CHANGE_VALUE = 'LIST_CHANGE_VALUE';

// action creators
export const fetchLists = () => ({
  type: FETCH_LISTS,
});

export const saveLists = (lists) => ({
  type: SAVE_LISTS,
  lists,
});

export const saveNewList = (newList) => ({
  type: SAVE_NEW_LIST,
  newList,
});

export const createNewList = () => ({
  type: CREATE_NEW_LIST,
});

export const listChangeValue = (name, value) => ({
  type: LIST_CHANGE_VALUE,
  name,
  value,
});
