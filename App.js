import React from 'react'
import { Provider } from 'react-redux'
import store from './app/state/store'
import Main from './app/main'

export default () => (
  <Provider store={store}>
    <Main />
  </Provider>
)
