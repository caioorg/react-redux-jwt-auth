import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { Container } from './styles';

class Dashboard extends Component {
  userAuthenticated = () => {
    if (this.props.authenticated) {
      return <div>está autenticado</div>
    } else {
      return <div>não está autenticado</div>
    }
  }

  render() {
    return <div>{this.userAuthenticated()}</div>
  }
}

const mapStateToProps = state => ({ authenticated: state.auth.authenticated })

export default connect(mapStateToProps)(Dashboard)
