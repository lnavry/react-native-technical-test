import React from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import PropTypes from 'prop-types'
import { Icon } from 'react-native-elements'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 4,
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: 'rgb(0, 189, 157)',
    borderStyle: 'dashed',
    paddingTop: 2,
    paddingLeft: 2,
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
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Icon
            containerStyle={styles.iconContainer}
            color="rgb(0, 189, 157)"
            type="entypo"
            name="plus"
            size={24}
          />
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
