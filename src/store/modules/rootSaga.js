import { all } from 'redux-saga/effects';

import cards from './cards/sagas';

export default function* rootSaga() {
  return yield all([cards]);
}
