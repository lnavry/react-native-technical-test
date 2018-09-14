/**
 * Action types
 */

const CREATE_PASSENGER = 'CREATE_PASSENGER'
const EDIT_PASSENGER = 'EDIT_PASSENGER'

export const types = {
  CREATE_PASSENGER,
  EDIT_PASSENGER,
}

/**
 * Actions
 */

const createPassenger = ({ id, title, firstName, lastName, dateOfBirth, passportId, nationality }) => ({
  type: CREATE_PASSENGER,
  payload: { id, title, firstName, lastName, dateOfBirth, passportId, nationality },
})

const editPassenger = ({ id, title, firstName, lastName, dateOfBirth, passportId, nationality }) => ({
  type: EDIT_PASSENGER,
  payload: { id, title, firstName, lastName, dateOfBirth, passportId, nationality },
})

export default {
  createPassenger,
  editPassenger,
}
