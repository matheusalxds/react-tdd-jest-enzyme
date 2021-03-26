import { createStore } from 'redux'

import rootReducer from '../../projects/jotto/reducers'

export const storyFactory = initialState => createStore(rootReducer, initialState)
