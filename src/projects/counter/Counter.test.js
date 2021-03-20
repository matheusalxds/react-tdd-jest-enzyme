import '../../config/enzyme'

import { shallow } from 'enzyme'
import React from 'react'

import Counter from './Counter'

const makeSut = () => {
  const wrapper = shallow(<Counter />)
  return {
    wrapper
  }
}

const findByAttr = (wrapper, attr) => wrapper.find(`[data-test='${attr}']`)

describe('Counter', () => {
  test('should render Main component', async () => {
    const { wrapper } = makeSut()
    const sut = findByAttr(wrapper, 'app')
    expect(sut.length).toBe(1)
  })

  test('should render increase button', async () => {
    const { wrapper } = makeSut()
    const sut = findByAttr(wrapper, 'increment-button')
    expect(sut.length).toBe(1)
  })

  test('should render decrement button', async () => {
    const { wrapper } = makeSut()
    const sut = findByAttr(wrapper, 'decrement-button')
    expect(sut.length).toBe(1)
  })
  //
  test('should render counter display', async () => {
    const { wrapper } = makeSut()
    const sut = findByAttr(wrapper, 'counter-display')
    expect(sut.length).toBe(1)
  })
  //
  test('should counter starts at 0', async () => {
    const { wrapper } = makeSut()
    const sut = findByAttr(wrapper, 'count').text()
    expect(sut).toBe('0')
  })
  //
  test('should increase counter if click on increment button', async () => {
    const { wrapper } = makeSut()
    findByAttr(wrapper, 'increment-button').simulate('click')
    const sut = findByAttr(wrapper, 'count').text()
    expect(sut).toBe('1')
  })
  //
  test('should decrease counter if click on decrement button', async () => {
    const { wrapper } = makeSut()
    findByAttr(wrapper, 'increment-button')
      .simulate('click')
      .simulate('click')
    findByAttr(wrapper, 'decrement-button').simulate('click')
    const sut = findByAttr(wrapper, 'count').text()
    expect(sut).toBe('1')
  })
  //
  test('should return a message if counter is below zero', async () => {
    const { wrapper } = makeSut()
    findByAttr(wrapper, 'decrement-button').simulate('click')
    const sut = findByAttr(wrapper, 'error-message').text()
    expect(sut).toBe('Counter is 0')
  })
  //
  test('should remove error message if count is not 0', async () => {
    const { wrapper } = makeSut()
    findByAttr(wrapper, 'decrement-button').simulate('click')
    findByAttr(wrapper, 'increment-button').simulate('click')
    findByAttr(wrapper, 'increment-button').simulate('click')
    const sut = findByAttr(wrapper, 'error-message')
    expect(sut).toBeTruthy()
  })
})
