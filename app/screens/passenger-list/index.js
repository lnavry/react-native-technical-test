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
import Avatar from '../../components/avatar'

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
    padding: 16,
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
        <Avatar avatar={passengers[passengersState.MAIN_PASSENGER_ID].avatar} />
        <Text style={styles.titleText}>Additional Travellers</Text>
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PassengerList)
