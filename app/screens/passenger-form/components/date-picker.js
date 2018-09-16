import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  DatePickerIOS,
  Modal,
} from 'react-native'
import { FormValidationMessage, Button } from 'react-native-elements'
import moment from 'moment'
import PropTypes from 'prop-types'
import styles from '../styles'

const DATE_FORMAT = 'YYYY-MM-DD'

// moment(date).format(DATE_FORMAT)

export default class DatePicker extends Component {
  static propTypes = {
    dateOfBirth: PropTypes.string,
    dateOfBirthError: PropTypes.string,
    onDateChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    dateOfBirth: '',
    dateOfBirthError: '',
  }

  state = {
    showDatePicker: false,
    tempDate: this.props.dateOfBirth
      ? moment(this.props.dateOfBirth).toDate()
      : new Date(),
  }

  handleDateSubmit = () => {
    this.props.onDateChange(moment(this.state.tempDate).format(DATE_FORMAT))
    this.setState({ showDatePicker: false })
  }

  render() {
    const { dateOfBirth, dateOfBirthError } = this.props
    const { tempDate } = this.state

    return (
      <ScrollView>
        {dateOfBirthError && (
          <FormValidationMessage>{dateOfBirthError}</FormValidationMessage>
        )}
        <TouchableWithoutFeedback
          onPress={() => this.setState({ showDatePicker: true })}
        >
          <View style={styles.inputContainer}>
            {dateOfBirth ? (
              <Text style={styles.inputText}>{dateOfBirth}</Text>
            ) : (
              <Text style={styles.placeholder}>Date of Birth</Text>
            )}
          </View>
        </TouchableWithoutFeedback>
        <Modal style={styles.dateModal} visible={this.state.showDatePicker} animationType="slide">
          <View>
            <DatePickerIOS
              mode="date"
              maximumDate={new Date()}
              date={tempDate}
              onDateChange={date => this.setState({ tempDate: date })}
            />
            <Button
              backgroundColor="rgb(0, 189, 157)"
              color="#fff"
              title="Submit"
              onPress={this.handleDateSubmit}
            />
          </View>
        </Modal>
      </ScrollView>
    )
  }
}
