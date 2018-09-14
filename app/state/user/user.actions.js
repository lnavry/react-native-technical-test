import { Me } from '../../network'

/**
 * Action types
 */

const GET_ME_STARTED = 'GET_ME_STARTED'
const GET_ME_SUCCESS = 'GET_ME_FINISHED'
const GET_ME_FAILED = 'GET_ME_FAILED'

export const types = {
  GET_ME_STARTED,
  GET_ME_SUCCESS,
  GET_ME_FAILED,
}

/**
 * Actions
 */

const getMe = () => async dispatch => {
  dispatch({ type: GET_ME_STARTED })
  try {
    const result = await Me.get()
    dispatch({ type: GET_ME_SUCCESS, payload: result.data })
  } catch(error) {
    dispatch({ type: GET_ME_FAILED, payload: error })
  }
}

export default {
  getMe,
}
