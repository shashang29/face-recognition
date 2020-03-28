import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//components
import ProtectedRoute from './ProtectedRoute';
import Navigation from '../components/Navigation/Navigation';
import Signin from '../components/Signin/Signin';
import Register from '../components/Register/Register';
import Dashboard from '../containers/Dashboard';

import Modal from '../components/Modal/Modal';
import Profile from '../components/Profile/Profile';

import { loginUserAction } from '../actions/user.actions'

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
  boxes: [],
  isProfileOpen: false
}

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  // componentDidMount() {
  //   const token = window.sessionStorage.getItem('token');
  //   if (token) {
  //  this.props.dispatch(loginUserAction(token))
  //   }
  // }


  calculateFaceLocation = (data) => {
    if (data && data.outputs) {
      let boxes = []
      for (let i = 0; i < data.outputs[0].data.regions.length; i++) {
        const clarifaiFace = data.outputs[0].data.regions[i].region_info.bounding_box;
        const image = document.getElementById('inputimage');
        const width = Number(image.width)
        const height = Number(image.height)
        boxes.push({
          leftCol: clarifaiFace.left_col * width,
          topRow: clarifaiFace.top_row * height,
          rightCol: width - (clarifaiFace.right_col * width),
          bottomRow: height - (clarifaiFace.bottom_row * height),
        })
      }
      return boxes;
    }
    return;
  }
  displayFaceBox = (boxes) => {
    if (boxes) {
      this.setState({ boxes: boxes });
    }
  }

  toggleModal = () => {
    this.setState(prevState => ({
      ...prevState,
      isProfileOpen: !prevState.isProfileOpen
    }))
  }

  render() {
    const { boxes, isProfileOpen } = this.state;
    return (
      <Router >
        <div className="App">
          <Particles className='particles'
            params={particlesOptions}
          />
          <Navigation
            toggleModal={this.toggleModal} />
          {/* {isProfileOpen &&
            <Modal>
              <Profile
                isProfileOpen={isProfileOpen}
                user={user}
                toggleModal={this.toggleModal}
                loadUser={this.loadUser} />
            </Modal>} */}
          <Switch>
            <Route exact path="/" component={Signin} />
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



export default App;