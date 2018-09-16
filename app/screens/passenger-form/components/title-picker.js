import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback, Picker } from 'react-native'
import { FormValidationMessage } from 'react-native-elements'
import PropTypes from 'prop-types'
import styles from '../styles'

export default class TitlePicker extends Component {
  static propTypes = {
    title: PropTypes.string,
    titleError: PropTypes.string,
    onTitleChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    title: '',
    titleError: '',
  }

  state = {
    showTitlePicker: false,
  }

  handleTitleChange = value => {
    this.props.onTitleChange(value)
    this.setState({ showTitlePicker: false })
  }

  render() {
    const { title, titleError } = this.props

    return (
      <React.Fragment>
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
        {this.state.showTitlePicker && (
          <Picker
            selectedValue={title}
            style={styles.picker}
            onValueChange={this.handleTitleChange}
          >
            <Picker.Item label="Select title" />
            <Picker.Item label="Mr" value="Mr" />
            <Picker.Item label="Mrs" value="Mrs" />
          </Picker>
        )}
      </React.Fragment>
    )
  }
}
