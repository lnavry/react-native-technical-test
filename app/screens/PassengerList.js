import React, { Component } from 'react'
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  StatusBar,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import userState from '../state/user'
import passengersState from '../state/passengers'

const USER_SHAPE = PropTypes.shape({
  title: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  passportId: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  activityIndicatorContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    paddingVertical: 8,
  },
})

class PassengerList extends Component {
  static propTypes = {
    me: USER_SHAPE,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    passengers: PropTypes.arrayOf(USER_SHAPE).isRequired,
    onGetMe: PropTypes.func.isRequired,
  }

  static defaultProps = {
    me: null,
    error: null,
  }

  static navigationOptions = {
    title: "WHO'S TRAVELLING?",
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: 'rgb(94, 103, 215)',
    },
  }

  componentDidMount() {
    this.props.onGetMe()
  }

  render() {
    if (this.props.loading)
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size="large" color="rgb(94, 103, 215)" />
        </View>
      )

    return (
      <View style={styles.container}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Text style={styles.titleText}>
          Main traveller (this must be you, the account holder)
        </Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  me: state[userState.STORE_NAME].me,
  loading: state[userState.STORE_NAME].loading,
  error: state[userState.STORE_NAME].error,
  passengers: state[passengersState.STORE_NAME].list,
})

const mapDispatchToProps = {
  onGetMe: userState.actions.getMe,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PassengerList)
