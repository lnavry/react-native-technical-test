import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import passengersState from './passengers'
import userState from './user'

const rootReducer = combineReducers([
  passengersState.reducer,
  userState.reducer,
])

const middleware = [...(process.env.NODE_ENV === 'development' ? [logger] : []), thunk]
const store = createStore(rootReducer, applyMiddleware(...middleware))

export default store
