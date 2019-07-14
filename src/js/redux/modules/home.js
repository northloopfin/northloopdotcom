import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

import type { homeType } from '../../common/types/home'

const GET_HOME = 'app/home/GET_HOME'
const UPDATE_HOME = 'app/home/UPDATE_HOME'

export const constants = {
  GET_HOME,
  UPDATE_HOME,
}

// ------------------------------------
// Actions
// ------------------------------------
export const getAwesomeCode = createAction(GET_HOME, () => ({}))
export const updateHome = createAction(
  UPDATE_HOME,
  (result: homeType) => ({ result })
)

export const actions = {
  getAwesomeCode,
  updateHome,
}

export const reducers = {
  [UPDATE_HOME]: (state, { payload }) => state.merge({
    ...payload,
  }),
}

export const initialState = () => Map({
  result: '',
})

export default handleActions(reducers, initialState())
