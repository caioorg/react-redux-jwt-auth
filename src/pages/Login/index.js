import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

// import { Container } from './styles';

class Login extends Component {
  handlerSubmit = event => {
    event.preventDefault()
    console.log(event)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handlerSubmit}>
          <Field
            name='email'
            type='email'
            placeholder='Enter you email'
            component='input'
          />
          <Field
            name='password'
            type='password'
            component='input'
            placeholder='Inform your password'
          />
          <button type='submit'>Sign In</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'login'
})(Login)
