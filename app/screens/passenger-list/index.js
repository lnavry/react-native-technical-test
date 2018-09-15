import React, { Component } from 'react'
import { StyleSheet, Text, StatusBar, View, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import capitalize from 'lodash/capitalize'
import usersState from '../../state/user'
import passengersState from '../../state/passengers'
import PassengerRow from './components/passenger-row'
import EnterInfoButton from './components/enter-info-button'
import { MAIN_PASSENGER_ID } from '../../state/passengers/passengers.reducer'

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

const mapPassengersObjectToArray = passengers => {
  let currentAdult = 2
  let currentChild = 1
  return Object.values(passengers)
    .filter(passenger => passenger.id !== MAIN_PASSENGER_ID)
    .map(passenger => {
      const isComplete =
        passenger.firstName &&
        passenger.lastName &&
        passenger.title &&
        passenger.nationality &&
        passenger.dateOfBirth &&
        passenger.passportId
      const emptyPassengerName = isComplete
        ? ''
        : `${capitalize(passenger.type)} ${
            passenger.type === 'adult' ? currentAdult : currentChild
          }`
      currentAdult =
        passenger.type === 'adult' ? currentAdult + 1 : currentAdult
      currentChild =
        passenger.type === 'child' ? currentChild + 1 : currentChild

      return {
        ...passenger,
        emptyPassengerName,
      }
    })
}

class PassengerList extends Component {
  static propTypes = {
    me: PropTypes.object.isRequired,
    passengers: PropTypes.objectOf(USER_SHAPE),
    initializePassengers: PropTypes.func.isRequired,
    passengerTypes: PropTypes.shape({
      adults: PropTypes.number,
      children: PropTypes.number,
    }),
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
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

  handlePassengerEditPress = passengerId => () => {
    const { navigation } = this.props
    navigation.navigate('Form', { passengerId })
  }

  renderRow = ({ item }) =>
    item.emptyPassengerName ? (
      <EnterInfoButton
        name={item.emptyPassengerName}
        onPress={this.handlePassengerEditPress(item.id)}
      />
    ) : (
      <PassengerRow
        passenger={item}
        onEditPress={this.handlePassengerEditPress(item.id)}
      />
    )

  renderListHeader = mainPassenger => () => (
    <React.Fragment>
      <Text style={styles.titleText}>
        Main traveller (this must be you, the account holder)
      </Text>
      <PassengerRow
        passenger={mainPassenger}
        onEditPress={this.handlePassengerEditPress(MAIN_PASSENGER_ID)}
      />
      <Text style={styles.titleText}>Additional Travellers</Text>
    </React.Fragment>
  )

  render() {
    const { passengers } = this.props

    if (isEmpty(passengers)) return null

    return (
      <View style={styles.container}>
        <StatusBar translucent={false} barStyle="light-content" />
        <FlatList
          ListHeaderComponent={this.renderListHeader(
            passengers[MAIN_PASSENGER_ID]
          )}
          data={mapPassengersObjectToArray(passengers)}
          renderItem={this.renderRow}
          keyExtractor={item => item.id}
        />
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
