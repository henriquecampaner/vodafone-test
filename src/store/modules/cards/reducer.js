import produce from 'immer';

const INITITAL_STATE = {
  cards: [],
  loading: false,
};

export default function cards(state = INITITAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@cards/LOAD_CARDS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@cards/LOAD_CARDS_SUCCESS': {
        draft.cards = action.payload.data;
        draft.loading = false;
        break;
      }
      case '@cards/LOAD_CARDS_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
