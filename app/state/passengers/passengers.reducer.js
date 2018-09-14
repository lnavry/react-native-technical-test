import { types } from './passengers.actions'

export const STORE_NAME = 'passengers'

/**
 * Reducer
 */

const initialState = {}
export default function shoppingListsReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_PASSENGER:
      return state
    case types.EDIT_PASSENGER:
      return state
    default:
      return state
  }
}