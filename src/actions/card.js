// actions CARD

export const CREATE_NEW_CARD = 'CREATE_NEW_CARD';
export const CARD_CHANGE_VALUE = 'CARD_CHANGE_VALUE';
export const REMOVE_CARD = 'remove_card';

// action creator

export const createNewCard = (id) => ({
  type: CREATE_NEW_CARD,
  id,
});

export const cardChangeValue = (name, value) => ({
  type: CARD_CHANGE_VALUE,
  name,
  value,
});

export const removeCard = (id) => ({
  type: REMOVE_CARD,
  id,
});
