import { shallow } from 'enzyme'
import React from 'react'

import { findByAttr } from '../../../text/utils/findByTestAtt'
import { Congrats } from '../Congrats'

const makeDefaultProps = () => ({
  message: 'any_message',
  success: false
})

const makeSut = (newProps = {}) => {
  const props = { ...makeDefaultProps(), ...newProps }
  const wrapper = shallow(<Congrats { ...props} />)

  return {
    wrapper
  }
}

describe('Congrats component', () => {
  test('should render component correctly', async () => {
    const { wrapper } = makeSut()
    const sut = findByAttr(wrapper, 'congrats')
    expect(sut.length).toBeTruthy()
  })

  test('should render no text when success props is false', async () => {
    const { wrapper } = makeSut()
    const sut = findByAttr(wrapper, 'congrats')
    expect(sut.text()).toBeFalsy()
  })

  test('should render no-empty congrats message when success props is true', async () => {
    const { wrapper } = makeSut({ success: true })
    const sut = findByAttr(wrapper, 'congrats-message')
    expect(sut.text()).toBeTruthy()
  })
})
