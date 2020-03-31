export function loadCardsRequest() {
  return {
    type: '@cards/LOAD_CARDS_REQUEST',
  };
}

export function loadCardsSuccess(data) {
  return {
    type: '@cards/LOAD_CARDS_SUCCESS',
    payload: { data },
  };
}

export function loadCardsFaliure() {
  return {
    type: '@cards/LOAD_CARDS_FAILURE',
  };
}
