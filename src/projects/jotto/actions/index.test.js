import { actionTypes, correctGuess } from './index'

const makeSut = () => ({
  sut: correctGuess
})

describe('CorrectGuess', () => {
  test('should return an action with type CORRECT_GUESS ', () => {
    const { sut } = makeSut()
    const response = sut()
    expect(response).toEqual({ type: actionTypes.CORRECT_GUESS })
  })
})
