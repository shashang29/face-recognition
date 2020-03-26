import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//components
import Navigation from '../components/Navigation/Navigation';
import Signin from '../components/Signin/Signin';
import Register from '../components/Register/Register';
import Facerecognition from '../components/Facerecognition/Facerecognition';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Rank from '../components/Rank/Rank';
import Modal from '../components/Modal/Modal';
import Profile from '../components/Profile/Profile';

import {loginUserAction} from '../actions/user.actions' 

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
  route: 'home',
  isSignedIn: true,
  isProfileOpen: false
}

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  componentDidMount() {
    const token = window.sessionStorage.getItem('token');
    if (token) {
   this.props.dispatch(loginUserAction(token))
    }
  }


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

  onPending = (data) => {
    this.setState({ pending: data })
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }


  onRouteChange = (route) => {
    if (route === 'signout') {
      return this.setState(initialState)
    }
    else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  toggleModal = () => {
    this.setState(prevState => ({
      ...prevState,
      isProfileOpen: !prevState.isProfileOpen
    }))
  }

  render() {
    const { isSignedIn, imageUrl, boxes, user, pending, isProfileOpen } = this.state;
    return (
      <Router>
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
            <Route
              path='/users'
              render={(props) => (
                <div>
                  <Rank {...props}
                    first_name={user.first_name}
                    entries={user.entries} />
                  <ImageLinkForm {...props}
                    onPictureSubmit={this.onPictureSubmit} />
                  <Facerecognition {...props}
                    boxes={boxes} />
                </div>
              )}
            />

            <Route
              exact path="/"
              render={(props) =>
                <Signin {...props}
                  pending={pending}
                  onPending={this.onPending}
                  loadUser={this.loadUser}
                  onRouteChange={this.onRouteChange} />}
            />

            <Route
              path="/register"
              render={(props) =>
                <Register {...props}
                  pending={pending}
                  onPending={this.onPending}
                  loadUser={this.loadUser}
                  onRouteChange={this.onRouteChange} />
              }
            />
          )}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(App);