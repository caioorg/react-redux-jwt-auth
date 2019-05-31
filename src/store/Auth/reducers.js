import { LOGIN_SUCCESS, LOGIN_ERROR, USER_LOGOUT } from './actionsTypes'

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, authenticated: true, error: '' }
    case LOGIN_ERROR:
      return { ...state, error: action.payload }
    case USER_LOGOUT:
      return { ...state, authenticated: false, error: '' }
    default:
      return state
  }
}
