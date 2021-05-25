// actions CARD

export const CREATE_NEW_CARD = 'CREATE_NEW_CARD';
export const REMOVE_CARD = 'remove_card';
export const SUBMIT_PATCH_CARD = 'SUBMIT_PATCH_CARD';
export const OPEN_CLOSE_CARD_MODAL = 'OPEN_CLOSE_CARD_MODAL';

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
