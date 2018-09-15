import { createStackNavigator } from 'react-navigation'
import PassengerList from './passenger-list'
import PassengerForm from './passenger-form'

export default createStackNavigator(
  {
    List: PassengerList,
    Form: PassengerForm
  }
)
