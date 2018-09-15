import { createStackNavigator } from 'react-navigation'
import PassengerList from './PassengerList'

export default createStackNavigator(
  {
    Home: PassengerList,
  }
)
