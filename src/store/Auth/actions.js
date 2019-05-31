import client from '../../helpers/api'
import { LOGIN_SUCCESS, LOGIN_ERROR, USER_LOGOUT } from './actionsTypes'

export const login = (email, password, history) => {
  return async dispatch => {
    try {
      const res = await client.post('/auth/login', { email, password })
      localStorage.setItem('user', res.data.token)
      dispatch({ type: LOGIN_SUCCESS })
      history.push('/dashboard')
    } catch (err) {
      dispatch({ type: LOGIN_ERROR, payload: 'Invalid email or password' })
    }
  }
}

export const logout = () => {
  return dispatch => {
    dispatch({ type: USER_LOGOUT })
  }
}
