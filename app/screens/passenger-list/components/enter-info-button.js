import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'
import { Icon } from 'react-native-elements'
import Avatar from '../../../components/avatar'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 4,
    alignItems: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  text: {
    marginLeft: 16,
  },
})

export default function EnterInfoButton({ name, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Avatar />
          <Text style={styles.text}>{`Enter ${name} information`}</Text>
        </View>
        <Icon name="ios-arrow-forward" size={24} type="ionicon" />
      </View>
    </TouchableOpacity>
  )
}

EnterInfoButton.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}
