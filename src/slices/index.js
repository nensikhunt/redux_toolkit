import { combineReducers } from 'redux'

import recipesReducer from './posts'

const rootReducer = combineReducers({
  posts: recipesReducer,
})

export default rootReducer