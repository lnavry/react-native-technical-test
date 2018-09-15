/**
 * Action types
 */

const INITIALIZE_PASSENGERS = 'INITIALIZE_PASSENGERS'
const EDIT_PASSENGER = 'EDIT_PASSENGER'

export const types = {
  INITIALIZE_PASSENGERS,
  EDIT_PASSENGER,
}

/**
 * Actions
 */

const initializePassengers = ({ me, types: passengerTypes }) => ({
  type: INITIALIZE_PASSENGERS,
  payload: { me, types: passengerTypes },
})

const editPassenger = ({ id, title, firstName, lastName, dateOfBirth, passportId, nationality, avatar }) => ({
  type: EDIT_PASSENGER,
  payload: { id, title, firstName, lastName, dateOfBirth, passportId, nationality, avatar },
})

export default {
  initializePassengers,
  editPassenger,
}
