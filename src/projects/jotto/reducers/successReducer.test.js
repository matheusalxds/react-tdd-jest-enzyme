import { actionTypes } from '../actions'
import successReducer from '../reducers/successReducer'

describe('SuccessReducer', () => {
  test('should return correct initial state when no action is passed', async () => {
    const newState = successReducer(undefined, {})
    expect(newState).toBe(false)
  })

  test('should return correct state upon receiving an action of type CORRECT_GUESS', async () => {
    const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS })
    expect(newState).toBe(true)
  })
})
