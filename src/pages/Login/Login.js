import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { login } from '../../store/Auth/actions'

import { Container, Card, Input, Button, Title, Error } from './styles'

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
    if (this.props.errorMessage) return <Error>{this.props.errorMessage}</Error>
  }

  render() {
    return (
      <Container image='https://66.media.tumblr.com/b07d795af6812e68d2b294daf3ef5527/tumblr_prwy50NzRa1yp4zl5o1_1280.jpg'>
        <Card>
          <Title>Log In</Title>
          <form autocomplete='off' onSubmit={this.handlerSubmit}>
            <Input
              name='email'
              type='email'
              placeholder='Enter you email'
              component='input'
            />
            <Input
              name='password'
              type='password'
              component='input'
              placeholder='Inform your password'
            />
            {this.messageError()}
            <Button type='submit'>Sign In</Button>
          </form>
        </Card>
      </Container>
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
