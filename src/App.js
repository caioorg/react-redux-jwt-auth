import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './store/reducers'
import thunk from 'redux-thunk'

import Routes from './config/routes'
import { LOGIN_SUCCESS } from './store/Auth/actionsTypes'

import './App.css'

const user = localStorage.getItem('user')

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk)(createStore)(reducers, devTools)

if (user) {
  store.dispatch({ type: LOGIN_SUCCESS })
}

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App
