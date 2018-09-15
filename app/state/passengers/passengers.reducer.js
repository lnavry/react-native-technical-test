import { types } from './passengers.actions'

export const STORE_NAME = 'passengers'

/**
 * Reducer
 */

const INITIAL_STATE = {
  list: [],
}
export default function passengersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.CREATE_PASSENGER:
      return state
    case types.EDIT_PASSENGER:
      return state
    default:
      return state
  }
}