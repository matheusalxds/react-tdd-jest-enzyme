import React from 'react'
import { useSelector } from 'react-redux'

import { testAttr } from '../../utils/add-test-att'

export const Input = () => {
  const state = useSelector(state => state.success)

  const contents = state.success
    ? null
    : (
    <form>
      <input {...testAttr('input-box')} placeholder="enter guess"/>
      <button {...testAttr('submit-button')}>
        submit
      </button>
    </form>
      )
  return (
    <div {...testAttr('input')}>{contents}</div>
  )
}
