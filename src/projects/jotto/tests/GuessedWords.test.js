import { shallow } from 'enzyme'
import React from 'react'

import { findByAttr } from '../../../text/utils/findByTestAtt'
import { GuessedWords } from '../GuessedWords'

const makeDefaultProps = () => ({
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
})

const makeSut = (newProps = {}) => {
  const props = { ...makeDefaultProps(), ...newProps }
  const wrapper = shallow(<GuessedWords {...props } />)

  return {
    wrapper
  }
}

describe('GuessedWords Component', () => {
  test('should render component without error', async () => {
    const { wrapper } = makeSut()
    const sut = findByAttr(wrapper, 'guessed-words')
    expect(sut.length).toBeTruthy()
  })

  test('should render instructions to guess a word', async () => {
    const { wrapper } = makeSut({ guessedWords: [] })
    const sut = findByAttr(wrapper, 'guessed-words')
    expect(sut.text().length).not.toBe(0)
  })
})
