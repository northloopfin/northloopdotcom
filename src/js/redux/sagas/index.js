import { all } from 'redux-saga/effects';
import { homeSaga } from './homeSaga';

export default function* sagas() {
  yield all([...homeSaga]);
}
