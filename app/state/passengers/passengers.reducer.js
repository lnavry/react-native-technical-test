import uuid from 'uuid/v1'
import { types } from './passengers.actions'

export const STORE_NAME = 'passengers'
export const MAIN_PASSENGER_ID = 'main'

const initializePassengersHandler = action => {
  const { payload: { types: { adults, children }, me } } = action 
  const newState = {}

  console.log('reducers funnny', action)

  newState[MAIN_PASSENGER_ID] = {
    ...me,
    id: MAIN_PASSENGER_ID,
    type: 'adult',
  }

  for (let index = 2; index <= adults; index += 1) {
    const id = uuid()
    newState[id] = { id, type: 'adult' }
  }

  for (let index = 1; index <= children; index += 1) {
    const id = uuid()
    newState[id] = { id, type: 'child' }
  }

  return newState
}

/**
 * Reducer
 */

const INITIAL_STATE = {}
export default function passengersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.INITIALIZE_PASSENGERS:
      return initializePassengersHandler(action)
    case types.EDIT_PASSENGER:
      return state
    default:
      return state
  }
}