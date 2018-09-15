import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Button } from 'react-native-elements'
import Avatar from '../../../components/avatar'

const DATE_FORMAT = 'DD MMMM YYYY'

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
  textContainer: {
    marginLeft: 16,
  },
  buttonContainer: {
    marginLeft: 0,
    marginRight: 0,
  },
  button: {
    borderRadius: 4,
    padding: 8,
    paddingHorizontal: 16,
  },
})

export default function PassengerRow({ passenger, onEditPress }) {
  const { firstName, lastName, title, dateOfBirth } = passenger
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Avatar avatar={passenger.avatar} />
        <View style={styles.textContainer}>
          <Text>{`${firstName} ${lastName}`}</Text>
          <Text>
            {`${title === 'Mr' ? 'Male' : 'Female'}, ${moment(
              dateOfBirth
            ).format(DATE_FORMAT)}`}
          </Text>
        </View>
      </View>
      <Button
        containerViewStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        fontSize={14}
        backgroundColor="rgb(247, 72, 82)"
        title="Edit"
        onPress={onEditPress}
      />
    </View>
  )
}

PassengerRow.propTypes = {
  passenger: PropTypes.shape({
    title: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    dateOfBirth: PropTypes.string,
    avatar: PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      color: PropTypes.string.isRequired,
    }),
  }).isRequired,
  onEditPress: PropTypes.func.isRequired,
}
