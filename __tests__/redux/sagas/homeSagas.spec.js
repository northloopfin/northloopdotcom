import { put } from 'redux-saga/effects'
import { fetchExampleData } from '../../../src/js/redux/sagas/homeSaga'
import { actions as exampleActions } from '../../../src/js/redux/modules/home'

describe('redux.sagas.homeSaga', () => {
  describe('fetchHomeData', () => {

    global.__CONFIG__ = {
      description: 'fake description'
    }

    const fixture = {
        title: 'North Loop',
        description: __CONFIG__.description,
        source: 'This message is coming from Redux',
      };

    it('should call homeActions.updateHome with correct data', () => {
      const generator = fetchHomeData()

      let next = generator.next()

      expect(next.value).toEqual(put(homeActions.updateHome(fixture)))
    })
  })
})
