// actions CARD

export const CREATE_NEW_CARD = 'CREATE_NEW_CARD';
export const REMOVE_CARD = 'remove_card';

// action creator

export const createNewCard = (id) => ({
  type: CREATE_NEW_CARD,
  id,
});

export const removeCard = (id) => ({
  type: REMOVE_CARD,
  id,
});
