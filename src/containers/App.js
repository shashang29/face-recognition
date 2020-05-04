import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//components
import ProtectedRoute from './ProtectedRoute';
import Navigation from '../components/Navigation/Navigation';
import Signin from '../components/Signin/Signin';
import Register from '../components/Register/Register';
import Dashboard from '../containers/Dashboard';


import { getUserData } from '../actions/userAuth.actions'


import Particles from 'react-particles-js';
import './App.css';


const particlesOptions = {
  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 500
      }
    },
    size: {
      value: 3
    }
  }
}

const initialState = {
  boxes: []
}

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
    const checkSession = () => {
      const token = window.sessionStorage.getItem('token');
      if (token) {
        this.props.getUserDataStart(token);
      }
    }
    checkSession();
  }




  toggleModal = () => {
    this.setState(prevState => ({
      ...prevState,
      isProfileOpen: !prevState.isProfileOpen
    }))
  }

  render() {
    const { boxes } = this.state;
    const { isSignedIn } = this.props;
    return (
      <Router >
        <div className="App">
          <Particles className='particles'
            params={particlesOptions}
          />
          <Navigation
            toggleModal={this.toggleModal} />
          <Switch>
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
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ login: { isSignedIn } }) => ({
  isSignedIn: isSignedIn
});

const mapDispatchToProps = dispatch => ({
  getUserDataStart: (token) => dispatch(getUserData(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);