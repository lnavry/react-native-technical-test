import { createStackNavigator } from 'react-navigation'
import PassengerList from './PassengerList'

export default createStackNavigator(
  {
    Home: {
      screen: PassengerList,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Home',
      },
    },
  },
  {
    headerMode: 'screen',
  },
)
