import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { login } from '../../store/Auth/actions'

// import { Container } from './styles';

class Login extends Component {
  handlerSubmit = event => {
    event.preventDefault()
    this.props.login(
      event.target.email.value,
      event.target.password.value,
      this.props.history
    )
  }

  messageError = () => {
    if (this.props.errorMessage) return <div>{this.props.errorMessage}</div>
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
        {this.messageError()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  errorMessage: state.auth.error
})

const reduxSigninForm = reduxForm({
  form: 'login'
})(Login)

export default connect(
  mapStateToProps,
  { login }
)(reduxSigninForm)
