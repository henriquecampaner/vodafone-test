import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { loadCardsSuccess, loadCardsFaliure } from './action';

import api from '../../../services/api';

export function* getCards() {
  try {
    const { data } = yield call(api.get);

    yield put(loadCardsSuccess(data));
  } catch (error) {
    toast.error('Something went wrong');
    yield put(loadCardsFaliure());
  }
}

export default all([takeLatest('@cards/LOAD_CARDS_REQUEST', getCards)]);
