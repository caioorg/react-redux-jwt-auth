import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.authenticated) this.props.history.push('/')
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) this.props.history.push('/')
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = state => ({ authenticated: state.auth.authenticated })

  return connect(mapStateToProps)(Authentication)
}
