// actions list
export const FETCH_LISTS = 'FETCH_LISTS';
export const MAJ_LISTS = 'SAVE_LISTS';
export const CREATE_NEW_LIST = 'CREATE_NEW_LIST';
export const LIST_CHANGE_VALUE = 'LIST_CHANGE_VALUE';
export const REMOVE_LIST_BDD = 'REMOVE_LIST_BDD';

// action creators
export const fetchLists = () => ({
  type: FETCH_LISTS,
});

export const majLists = (lists) => ({
  type: MAJ_LISTS,
  lists,
});

export const createNewList = () => ({
  type: CREATE_NEW_LIST,
});

export const listChangeValue = (name, value) => ({
  type: LIST_CHANGE_VALUE,
  name,
  value,
});

export const removeListBdd = (id) => ({
  type: REMOVE_LIST_BDD,
  id,
});
