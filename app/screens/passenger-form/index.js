import React, { Component } from 'react'
import {
  View,
  TouchableOpacity,
  StatusBar,
  Text,
  Picker,
  TouchableWithoutFeedback,
} from 'react-native'
import { connect } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { FormInput, FormValidationMessage } from 'react-native-elements'
import PropTypes from 'prop-types'
import FriendsCarousel from './components/friends-carousel'
import passengersState from '../../state/passengers'
import friends from './friends.mock'
import styles from './styles'

const TITLE_ERROR_MESSAGE = 'Title is required'
const FIRST_NAME_ERROR_MESSAGE =
  'First name is required and it should consist of at least 3 characters.'
const LAST_NAME_ERROR_MESSAGE =
  'Last is required and it should consist of at least 3 characters.'
const DATE_OF_BIRTH_ERROR_MESSAGE = 'Date of birth is required.'

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

class PassengerForm extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func.isRequired,
      setParams: PropTypes.func.isRequired,
      goBack: PropTypes.func.isRequired,
    }).isRequired,
    passenger: USER_SHAPE.isRequired,
    onEditPassenger: PropTypes.func.isRequired,
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

  state = {
    showTitlePicker: false,
    title: this.props.passenger.title || '',
    titleError: '',
    firstName: this.props.passenger.firstName || '',
    firstNameError: '',
    lastName: this.props.passenger.lastName || '',
    lastNameError: '',
    dateOfBirth: this.props.passenger.dateOfBirth || '',
    dateOfBirthError: '',
  }

  componentDidMount() {
    this.props.navigation.setParams({ onDone: this.handleDonePress })
  }

  handleDonePress = () => {
    if (this.validate()) {
      this.props.onEditPassenger({
        ...this.props.passenger,
        ...this.state,
      })
      this.props.navigation.goBack()
    }
  }

  validate = () => {
    const { title, firstName, lastName, dateOfBirth } = this.state
    const isTitleValid = Boolean(title)
    const isFirstNameValid = firstName && firstName.length >= 3
    const isLastNameValid = lastName && lastName.length >= 3
    const isDateOfBirthValid = Boolean(dateOfBirth)
    this.setState({
      titleError: isTitleValid ? '' : TITLE_ERROR_MESSAGE,
      firstNameError: isFirstNameValid ? '' : FIRST_NAME_ERROR_MESSAGE,
      lastNameError: isLastNameValid ? '' : LAST_NAME_ERROR_MESSAGE,
      dateOfBirthError: isDateOfBirthValid ? '' : DATE_OF_BIRTH_ERROR_MESSAGE,
    })

    return (
      isTitleValid && isFirstNameValid && isLastNameValid && isDateOfBirthValid
    )
  }

  render() {
    const {
      showTitlePicker,
      title,
      titleError,
      firstName,
      firstNameError,
      lastName,
      lastNameError,
      dateOfBirth,
      dateOfBirthError,
    } = this.state

    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <StatusBar translucent={false} barStyle="light-content" />
        <FriendsCarousel
          title="Choose from friend, or add new traveller"
          backgroundColor="rgb(255, 72, 73)"
          friends={friends}
          onFriendPress={friend =>
            this.setState(prevState => ({
              ...prevState,
              ...friend,
            }))
          }
        />
        <Text style={styles.titleText}>Add New Traveller</Text>
        <TouchableWithoutFeedback
          onPress={() => this.setState({ showTitlePicker: true })}
        >
          <View style={styles.inputContainer}>
            {title ? (
              <Text style={styles.inputText}>{title}</Text>
            ) : (
              <Text style={styles.placeholder}>Title</Text>
            )}
          </View>
        </TouchableWithoutFeedback>
        {titleError && (
          <FormValidationMessage>{titleError}</FormValidationMessage>
        )}
        {showTitlePicker && (
          <Picker
            selectedValue={title}
            style={styles.picker}
            onValueChange={value =>
              this.setState({
                title: value,
                showTitlePicker: false,
                titleError: '',
              })
            }
          >
            <Picker.Item label="Select title" />
            <Picker.Item label="Mr" value="Mr" />
            <Picker.Item label="Mrs" value="Mrs" />
          </Picker>
        )}
        <FormInput
          placeholder="First name"
          value={firstName}
          onChangeText={value =>
            this.setState({ firstName: value, firstNameError: '' })
          }
          containerStyle={styles.inputContainer}
          placeholderTextColor="rgb(120, 120, 120)"
          inputStyle={styles.inputText}
        />
        {firstNameError && (
          <FormValidationMessage>{firstNameError}</FormValidationMessage>
        )}
        <FormInput
          placeholder="Last name"
          value={lastName}
          onChangeText={value =>
            this.setState({ lastName: value, lastNameError: '' })
          }
          containerStyle={styles.inputContainer}
          placeholderTextColor="rgb(120, 120, 120)"
          inputStyle={styles.inputText}
        />
        {lastNameError && (
          <FormValidationMessage>{lastNameError}</FormValidationMessage>
        )}
        <FormInput
          placeholder="Date of birth"
          value={dateOfBirth}
          onChangeText={value => this.setState({ dateOfBirth: value })}
          containerStyle={styles.inputContainer}
          placeholderTextColor="rgb(120, 120, 120)"
          inputStyle={styles.inputText}
        />
        {dateOfBirthError && (
          <FormValidationMessage>{dateOfBirthError}</FormValidationMessage>
        )}
      </KeyboardAwareScrollView>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  passenger:
    state[passengersState.STORE_NAME][
      ownProps.navigation.getParam('passengerId')
    ],
})

const mapDispatchToProps = {
  onEditPassenger: passengersState.actions.editPassenger,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PassengerForm)
