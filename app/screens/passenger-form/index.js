import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, StatusBar, Text } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  headerRightText: {
    fontSize: 17,
    color: '#fff',
    paddingHorizontal: 16,
  },
})

export default class PassengerForm extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func.isRequired,
      setParams: PropTypes.func.isRequired,
      goBack: PropTypes.func.isRequired,
    }).isRequired,
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'ENTER TRAVELLER',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: 'rgb(255, 72, 73)',
    },
    headerBackTitle: null,
    headerRight: (
      <TouchableOpacity onPress={navigation.getParam('onDone')}>
        <Text style={styles.headerRightText}>Done</Text>
      </TouchableOpacity>
    ),
  })

  componentDidMount() {
    const { navigation } = this.props

    navigation.setParams({ onDone: this.handleDonePress })
  }

  handleDonePress = () => {
    console.log('going back')
    this.props.navigation.goBack()
  }

  render() {
    return (
      <View>
        <StatusBar translucent={false} barStyle="light-content" />
        <Text>{`Passenger id ${this.props.navigation.getParam('passengerId')}`}</Text>
      </View>
    )
  }
}
