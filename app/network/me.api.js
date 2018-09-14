import axios from 'axios'

const URL =
  'https://functionapp20180527095701.azurewebsites.net/api/GetUserTravellerInfo'

const get = () => axios.get(URL)

export default {
  get,
}
