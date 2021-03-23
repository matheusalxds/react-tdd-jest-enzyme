import PropTypes from 'prop-types'
import React from 'react'

import { testAttr } from '../../utils/add-test-att'

export const GuessedWords = props => {
  const { guessedWords } = props
  let contents

  if (guessedWords.length === 0) {
    contents = (
      <span{...testAttr('guessed-instructions')}>
        Try to guess the secret word
      </span>
    )
  }

  return (
    <div {...testAttr('guessed-words')}>
      {contents}
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.instanceOf(Array)
}
