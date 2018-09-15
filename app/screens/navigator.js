import { createStackNavigator } from 'react-navigation'
import PassengerList from './passenger-list'

export default createStackNavigator(
  {
    Home: PassengerList,
  }
)
