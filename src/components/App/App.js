import React from 'react'

// import Counter from '../../projects/counter/Counter'
import { Congrats } from '../../projects/jotto/Congrats'
import { GuessedWords } from '../../projects/jotto/GuessedWords'
import { Aligner } from '../Aligner/Aligner'
import css from './App.module.scss'

const App = () => (
    <div className={css.app}>
      <Aligner>
        {/* <Counter /> */}
        <h1>Jotto</h1>
        <Congrats message="FUCK! You guessed the word" success />
        <GuessedWords guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}/>
      </Aligner>
    </div>
)

export default App
