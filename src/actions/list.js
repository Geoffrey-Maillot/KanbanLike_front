// actions list
export const FETCH_LISTS = 'FETCH_LISTS';
export const SAVE_LISTS = 'SAVE_LISTS';

// action creators
export const fetchLists = () => ({
  type: FETCH_LISTS,
});

export const saveLists = (lists) => ({
  type: SAVE_LISTS,
  lists,
});
