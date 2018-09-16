import React from 'react'
import { View, TouchableOpacity, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import PropTypes from 'prop-types'
import Avatar from '../../../components/avatar'

const { width: deviceWidth } = Dimensions.get('window')

const USER_SHAPE = PropTypes.shape({
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
    paddingTop: 32,
    paddingHorizontal: 8,
    width: deviceWidth,
    marginTop: -4,
    marginLeft: -16,
  },
  friendContainer: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    marginBottom: 8,
    alignSelf: 'center',
  },
})

export default function FriendPicker({ title, backgroundColor, onFriendPress, friends }) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={friends}
        keyExtractor={(item, index) => `${item.firstName}-${item.firstName}-${index}`}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onFriendPress(item)}>
            <View style={styles.friendContainer}>
              <Avatar avatar={item.avatar} />
              <Text style={styles.text}>{`${item.firstName} ${item.lastName.charAt(0)}.`}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

FriendPicker.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  onFriendPress: PropTypes.func.isRequired,
  friends: PropTypes.arrayOf(USER_SHAPE).isRequired,
}
