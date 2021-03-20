import '../../config/enzyme'

import { shallow } from 'enzyme'
import React from 'react'

import App from './App'

describe('APP', () => {
  test('should render without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toBeTruthy()
  })
})
