import PropTypes from 'prop-types'
import React from 'react'

import css from './Aligner.module.scss'

export const Aligner = ({ children }) => (
    <div className={css.aligner}>
      {children}
    </div>
)

Aligner.propTypes = {
  children: PropTypes.instanceOf(Object)
}
