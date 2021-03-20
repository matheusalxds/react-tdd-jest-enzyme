import React, { useState } from 'react'

import { testAttr } from '../../utils/add-test-att'
import css from './Counter.module.scss'

const Counter = () => {
  const [count, setCount] = useState(0)
  const [showError, setShowError] = useState(false)

  const handleIncrement = () => {
    if (count === 0) {
      handleError(false)
    }
    setCount(prev => prev + 1)
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1)
    } else {
      handleError(true)
    }
  }

  const handleError = (show) => setShowError(show)

  return (
    <div className={css.counter} {...testAttr('app')}>
      <h1 {...testAttr('counter-display')}>he counter current is <span {...testAttr('count')}>{count}</span></h1>
      <button {...testAttr('increment-button')} onClick={handleIncrement}>Increment counter</button>
      <button {...testAttr('decrement-button')} onClick={handleDecrement}>Decrement counter</button>
      {showError && <span {...testAttr('error-message')}>Counter is 0</span>}
    </div>
  )
}

export default Counter
