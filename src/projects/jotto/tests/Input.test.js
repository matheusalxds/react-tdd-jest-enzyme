import { mount } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'

import { findByAttr, storyFactory } from '../../../text/utils'
import { Input } from '../Input'

const makeSut = (initialState = {}) => {
  const store = storyFactory(initialState)
  const wrapper = mount(<Provider store={store}><Input /></Provider>)

  return {
    wrapper
  }
}

makeSut()

describe('Input', () => {
  test('should render component without error', async () => {
    const { wrapper } = makeSut({ success: true })
    const component = findByAttr(wrapper, 'input')
    expect(component.length).toBe(1)
  })

  test('should render input box component without error', async () => {
    const { wrapper } = makeSut({ success: true })
    const component = findByAttr(wrapper, 'input-box')
    expect(component.length).toBe(1)
  })

  test('should render submit button correctly', async () => {
    const { wrapper } = makeSut({ success: true })
    const component = findByAttr(wrapper, 'submit-button')
    expect(component.length).toBe(1)
  })
})
