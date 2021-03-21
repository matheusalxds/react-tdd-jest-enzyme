import PropTypes from 'prop-types'
import React from 'react'

import { testAttr } from '../../utils/add-test-att'

export const Congrats = ({ success, message }) => (
    <div {...testAttr('congrats')}>
      {success && <span {...testAttr('congrats-message')}>{message}</span>}
    </div>
)

Congrats.propTypes = {
  message: PropTypes.string,
  success: PropTypes.bool
}
