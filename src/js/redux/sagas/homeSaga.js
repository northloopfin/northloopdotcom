import { put, fork, takeLatest } from 'redux-saga/effects'
import {
  constants as homeConstants,
  actions as homeActions,
} from '../modules/home';

import type { homeType } from '../../common/types/home';

export function* fetchHomeData() {
  // pretend there is an api call
  const result: homeType = {
    title: 'North Loop',
    description: __CONFIG__.description,
    source: 'This message is coming from Redux',
  }

  yield put(homeActions.updateHome(result))
}

function* watchGetHome() {
  yield takeLatest(homeConstants.GET_HOME, fetchHomeData)
}

export const homeSaga = [fork(watchGetHome)]
