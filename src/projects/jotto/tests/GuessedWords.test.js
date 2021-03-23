import { shallow } from 'enzyme'
import React from 'react'

import { findByAttr } from '../../../text/utils/findByTestAtt'
import { GuessedWords } from '../GuessedWords'

const makeSut = (newProps = {}) => {
  const props = { ...fakeGuessedWords, ...newProps }
  const wrapper = shallow(<GuessedWords {...props } />)

  return {
    wrapper
  }
}

const makeDefaultProps = () => ({
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 5 }]
})

const fakeGuessedWords = makeDefaultProps()

describe('GuessedWords Component', () => {
  test('should render component without error', async () => {
    const { wrapper } = makeSut()
    const sut = findByAttr(wrapper, 'component-guessed-words')
    expect(sut.length).toBeTruthy()
  })

  test('should render instructions to guess a word', async () => {
    const { wrapper } = makeSut({ guessedWords: [] })
    const sut = findByAttr(wrapper, 'guessed-instructions')
    expect(sut.text().length).not.toBe(0)
  })

  test('should render guessed words section', async () => {
    const { wrapper } = makeSut()
    const sut = findByAttr(wrapper, 'guessed-word')
    expect(sut.length).toBe(fakeGuessedWords.guessedWords.length)
  })
})
