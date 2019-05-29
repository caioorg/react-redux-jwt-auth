import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import AuthReducers from './reducers/authReducers'

const rootReducer = combineReducers({
  auth: AuthReducers,
  form: formReducer
})

export default rootReducer
