// actions CARD

export const CREATE_NEW_CARD = 'CREATE_NEW_CARD';
export const REMOVE_CARD = 'remove_card';
export const SUBMIT_PATCH_CARD = 'SUBMIT_PATCH_CARD';
export const OPEN_CLOSE_CARD_MODAL = 'OPEN_CLOSE_CARD_MODAL';
export const SAVE_POSITION_CARD = 'SAVE_POSITION_CARD';
export const CHECK_CARD = 'CHECK_CARD';
export const CHANGE_VALUE_CARD = 'CHANGE_VALUE_CARD'

// action creator

export const createNewCard = (id) => ({
  type: CREATE_NEW_CARD,
  id,
});

export const removeCard = (id) => ({
  type: REMOVE_CARD,
  id,
});

export const submitPatchCard = (cardId) => ({
  type: SUBMIT_PATCH_CARD,
  cardId,
});

export const openCloseCardModal = () => ({
  type: OPEN_CLOSE_CARD_MODAL,
});

export const savePositionCard = (listId, cardId, position) => ({
  type: SAVE_POSITION_CARD,
  listId,
  cardId,
  position,
});

export const checkCard = (status, cardId, listId) => ({
  type: CHECK_CARD,
  status,
  cardId,
  listId,
});

export const changeValueCard = (name, value, id) => ({
  type: CHANGE_VALUE_CARD,
  name,
  value,
  id
})