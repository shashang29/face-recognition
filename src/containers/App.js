import React, { useEffect, Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

//components
import ProtectedRoute from './ProtectedRoute';
import Navigation from '../components/Navigation/Navigation';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

import { getUserData } from '../actions/userAuth.actions';

import Particles from 'react-particles-js';
import particlesOptions from '../services/particlesOptions';
import './App.css';

const Signin = lazy(() => import('../components/Signin/Signin'));
const Register = lazy(() => import('../components/Register/Register'));
const Dashboard = lazy(() => import('../containers/Dashboard'));



const App = ({ getUserDataStart, isSignedIn }) => {

  useEffect(() => {
    const token = window.sessionStorage.getItem('token');
    if (token) {
      getUserDataStart(token);
    }
  }, [getUserDataStart])

  return (
    <div>
      <Particles className='particles'
        params={particlesOptions}
      />
      <Navigation />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" render={() =>
              isSignedIn ? (<Redirect to='/dashboard' />) : (
                <Signin />
              )
            } />
            <Route
              path="/register" component={Register} />
            <ProtectedRoute path="/dashboard" component={Dashboard}
            />
            <Route path="*" component={() => "404 NOT FOUND"} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ login: { isSignedIn } }) => ({
  isSignedIn: isSignedIn
});

const mapDispatchToProps = dispatch => ({
  getUserDataStart: (token) => dispatch(getUserData(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);