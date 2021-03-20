import '../config/enzyme'

import { shallow } from 'enzyme'
import React from 'react'

import { testAttr } from './add-test-att'

const FakeComponent = (props) => <span {...props}>any_text</span>

const findByAttr = (wrapper, attr) => wrapper.find(`[data-test='${attr}']`)

describe('', () => {
  test('should add test property if NODE_ENV is not production', async () => {
    process.env.NODE_ENV = 'development'
    const wrapper = shallow(<FakeComponent {...testAttr('any_attr')}/>)
    const attr = findByAttr(wrapper, 'any_attr').text()
    expect(attr).toBeTruthy()
  })

  test('should add test property if NODE_ENV is not production', async () => {
    process.env.NODE_ENV = 'production'
    const wrapper = shallow(<FakeComponent {...testAttr('any_attr')}/>)
    const attr = findByAttr(wrapper, 'any_attr')
    expect(attr.length).toBe(0)
  })
})
