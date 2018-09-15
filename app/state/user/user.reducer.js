import { types } from './user.actions'

export const STORE_NAME = 'user'

/**
 * Reducer
 */

const INITIAL_STATE = {
  me: null,
  loading: false,
  error: null,
}
export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_ME_STARTED:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case types.GET_ME_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case types.GET_ME_SUCCESS:
      return {
        ...INITIAL_STATE,
        me: action.payload,
      }
    default:
      return state
  }
}
