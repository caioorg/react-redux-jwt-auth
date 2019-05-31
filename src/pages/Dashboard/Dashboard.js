import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { logout } from '../../store/Auth/actions'

import { Container, Title, Logout } from './styles'

class Dashboard extends Component {
  logoutUser = () => {
    localStorage.clear()
    this.props.logout()
  }
  userAuthenticated = () => {
    if (this.props.authenticated) {
      return (
        <>
          <Title>Congratulations, you managed to perform authentication.</Title>
        </>
      )
    }
  }

  render() {
    return (
      <Container image='https://66.media.tumblr.com/b07d795af6812e68d2b294daf3ef5527/tumblr_prwy50NzRa1yp4zl5o1_1280.jpg'>
        {this.userAuthenticated()}
        <Logout onClick={this.logoutUser}>Sign Out</Logout>
      </Container>
    )
  }
}

const mapStateToProps = state => ({ authenticated: state.auth.authenticated })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
