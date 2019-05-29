import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'

import type { loanType } from '../../common/types/loan';

const GET_HOME = 'app/home/GET_LOAN'
const UPDATE_HOME = 'app/home/UPDATE_LOAN'

export const constants = {
  GET_LOAN,
  UPDATE_LOAN,
}

// ------------------------------------
// Actions
// ------------------------------------
export const getAwesomeCode = createAction(GET_HOME, () => ({}))
export const updateHome = createAction(
  UPDATE_HOME,
  (result: loanType) => ({ result })
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
