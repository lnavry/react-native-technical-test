import React from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types'
import alienAvatar from '../../test_images/avatars/alien.png'

const AVATAR_CONTAINER_STYLE = {
  width: 48,
  height: 48,
  borderRadius: 24,
  borderWidth: 2,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
}

const AVATAR_IMAGE_STYLE = {
  width: 32,
  height: 32,
}

export default function Avatar({ avatar: { image, color } }) {
  return (
    <View style={{ ...AVATAR_CONTAINER_STYLE, borderColor: color }}>
      <Image source={image} resizeMode="center" style={AVATAR_IMAGE_STYLE} />
    </View>
  )
}

Avatar.propTypes = {
  avatar: PropTypes.shape({
    image: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    color: PropTypes.string,
  }),
}

Avatar.defaultProps = {
  avatar: {
    image: alienAvatar,
    color: 'rgb(94, 103, 215)',
  },
}
