import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authReducer from './Auth/reducers'

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer
})

export default rootReducer
