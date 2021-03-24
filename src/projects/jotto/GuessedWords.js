import PropTypes from 'prop-types'
import React from 'react'

import { testAttr } from '../../utils/add-test-att'

export const GuessedWords = props => {
  const { guessedWords } = props
  let contents

  if (guessedWords.length === 0) {
    contents = (
      <span {...testAttr('guessed-instructions')}>
        Try to guess the secret word
      </span>
    )
  } else {
    contents = (
      <div {...testAttr('guessed-words')}>
        <h3>Guessed Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
            </tr>
            <tr>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {guessedWords.map((word, index) => (
              <tr key={word.guessedWord} {...testAttr('guessed-word')}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div {...testAttr('component-guessed-words')}>
      {contents}
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.instanceOf(Array)
}
