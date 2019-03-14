import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import fakeAuthCentralState from '../DUMB/FakeAuthCentralState'

const ProtectedRoute = ({ component: Component, ...rest }) => (
   <Route {...rest} render={(props) => (
      fakeAuthCentralState.isAuthenticated === true ?
         <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
   )} />
);
export default ProtectedRoute;