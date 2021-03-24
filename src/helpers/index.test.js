import { getLetterMatchCount } from './index'

const makeFakeSecretWord = () => 'party'

describe('getLetterMatchCount', () => {
  test('should return correct count when there are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', makeFakeSecretWord())
    expect(letterMatchCount).toBe(0)
  })

  test('should return the correct count where there are 3 matching letters', async () => {
    const letterMatchCount = getLetterMatchCount('train', makeFakeSecretWord())
    expect(letterMatchCount).toBe(3)
  })

  test('should return correct count when there are duplicate letters in the guessed', async () => {
    const letterMatchCount = getLetterMatchCount('parka', makeFakeSecretWord())
    expect(letterMatchCount).toBe(3)
  })
})
