import React, { Component } from 'react'
import { ActivityIndicator, Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Navigator from './screens/navigator'
import userState from './state/user'

const ABSOLUTE_CENTERED_STYLE = {
  ...StyleSheet.absoluteFillObject,
  justifyContent: 'center',
  alignItems: 'center',
}

const USER_SHAPE = PropTypes.shape({
  title: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  passportId: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  avatar: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    color: PropTypes.string.isRequired,
  }),
})

class Main extends Component {
  static propTypes = {
    me: USER_SHAPE,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    onGetMe: PropTypes.func.isRequired,
  }

  static defaultProps = {
    me: null,
    error: null,
  }

  componentDidMount() {
    this.props.onGetMe()
  }

  render() {
    const { loading, error, me } = this.props

    if (loading)
      return (
        <View style={ABSOLUTE_CENTERED_STYLE}>
          <ActivityIndicator size="large" color="rgb(94, 103, 215)" />
        </View>
      )

    if (error)
      return (
        <View style={ABSOLUTE_CENTERED_STYLE}>
          <Text>
            {error.message ||
              `Error happened, we are not able to fetch your profile!`}
          </Text>
        </View>
      )

    return me ? <Navigator onNavigationStateChange={null} /> : null
  }
}

const mapStateToProps = state => ({
  me: state[userState.STORE_NAME].me,
  loading: state[userState.STORE_NAME].loading,
  error: state[userState.STORE_NAME].error,
})

const mapDispatchToProps = {
  onGetMe: userState.actions.getMe,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
