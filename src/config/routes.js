import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import requiredAuth from '../helpers/requireAuth'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Login} />
      <Route path='/Dashboard' component={requiredAuth(Dashboard)} />
      <Redirect from='*' to='/' />
    </Switch>
  </BrowserRouter>
)

export default Routes
