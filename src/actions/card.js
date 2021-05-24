// actions CARD

export const SAVE_NEW_CARD = 'SAVE_NEW_CARD';
export const CREATE_NEW_CARD = 'CREATE_NEW_CARD';
export const CARD_CHANGE_VALUE = 'CARD_CHANGE_VALUE';

// action creator
export const saveNewCard = (newCard) => ({
  type: SAVE_NEW_CARD,
  newCard,
});

export const createNewCard = (id) => ({
  type: CREATE_NEW_CARD,
  id,
});

export const cardChangeValue = (name, value) => ({
  type: CARD_CHANGE_VALUE,
  name,
  value,
});
