import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import usersState from '../../state/user'
import passengersState from '../../state/passengers'
import PassengerRow from './components/passenger-row'
import EnterInfoButton from './components/enter-info-button'
import { MAIN_PASSENGER_ID } from '../../state/passengers/passengers.reducer';

const USER_SHAPE = PropTypes.shape({
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  dateOfBirth: PropTypes.string,
  passportId: PropTypes.string,
  nationality: PropTypes.string,
  avatar: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    color: PropTypes.string.isRequired,
  }),
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 16,
    paddingRight: 24,
  },
  titleText: {
    marginVertical: 16,
  },
})

class PassengerList extends Component {
  static propTypes = {
    me: PropTypes.object.isRequired,
    passengers: PropTypes.objectOf(USER_SHAPE),
    initializePassengers: PropTypes.func.isRequired,
    passengerTypes: PropTypes.shape({
      adults: PropTypes.number,
      children: PropTypes.number,
    }),
  }

  static defaultProps = {
    passengers: {},
    passengerTypes: {
      adults: 3,
      children: 1,
    },
  }

  static navigationOptions = {
    title: "WHO'S TRAVELLING?",
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: 'rgb(94, 103, 215)',
    },
  }

  componentDidMount() {
    const { me, initializePassengers, passengerTypes } = this.props
    initializePassengers({ me, types: passengerTypes })
  }

  render() {
    const { passengers } = this.props

    if (isEmpty(passengers)) return null

    return (
      <View style={styles.container}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Text style={styles.titleText}>
          Main traveller (this must be you, the account holder)
        </Text>
        <PassengerRow passenger={passengers[MAIN_PASSENGER_ID]} onEditPress={() => {}} />
        <Text style={styles.titleText}>Additional Travellers</Text>
        <EnterInfoButton name="Adult 2" onPress={() => {}} />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  me: state[usersState.STORE_NAME].me,
  passengers: state[passengersState.STORE_NAME],
})

const mapDispatchToProps = {
  initializePassengers: passengersState.actions.initializePassengers,
  onEditPassenger: passengersState.actions.editPassenger,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PassengerList)
