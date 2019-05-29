import React from 'react'
import Routes from './config/routes'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from './store/reducers'
import thunk from 'redux-thunk'

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(thunk)(createStore)(reducers, devTools)

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App
