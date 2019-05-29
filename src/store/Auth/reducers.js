import { LOGIN_SUCCESS, LOGIN_ERROR, UNAUTHENTICATED } from './actionsTypes'

export default function(state = {}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, authenticated: true }
    case LOGIN_ERROR:
      return { ...state, error: action.payload }
    case UNAUTHENTICATED:
      return { ...state, authenticated: false }
    default:
      return state
  }
}
