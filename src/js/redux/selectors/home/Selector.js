import { createSelector } from 'reselect'

const homeDataSelector = (state) => state.home

const resultSelector = createSelector(
  homeDataSelector,
  (payload) => payload.get('result')
)

export const homeSelector = (state) => ({
  result: resultSelector(state),
})
