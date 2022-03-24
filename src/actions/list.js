// actions list
export const FETCH_LISTS = 'FETCH_LISTS';
export const MAJ_LISTS = 'SAVE_LISTS';
export const CREATE_NEW_LIST = 'CREATE_NEW_LIST';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const REMOVE_LIST_BDD = 'REMOVE_LIST_BDD';
export const SUBMIT_PATCH_LIST = 'SUBMIT_PATCH_LIST';
export const OPEN_CLOSE_LIST_MODAL = 'OPEN_CLOSE_LIST_MODAL';
export const SAVE_POSITION_LIST = 'SAVE_POSITION_LIST';

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

export const changeValue = (name, value) => ({
  type: CHANGE_VALUE,
  name,
  value,
});

export const removeListBdd = (id) => ({
  type: REMOVE_LIST_BDD,
  id,
});

export const submitPatchList = (listId) => ({
  type: SUBMIT_PATCH_LIST,
  listId,
});

export const openCloseListModal = (listId) => ({
  type: OPEN_CLOSE_LIST_MODAL,
  listId,
});

export const savePositionList = (listId, position) => ({
  type: SAVE_POSITION_LIST,
  listId,
  position,
});
