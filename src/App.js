import React from 'react';

import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Facerecognition from './components/Facerecognition/Facerecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Modal from './components/Modal/Modal';
import Profile from './components/Profile/Profile';

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
  input: '',
  imageUrl: '',
  boxes: [],
  route: 'signin',
  isSignedIn: false,
  isProfileOpen: false,
  pending: false,
  user: {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    entries: 0,
    joined: '',
    age: ''

  }
}

class App extends React.Component {

  constructor() {
    super();
    this.state = initialState;

  }

  componentDidMount() {
    const token = window.sessionStorage.getItem('token');
    if (token) {
      fetch('http://localhost:3005/signin', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data && data.id) {
            fetch(`http://localhost:3005/profile/${data.id}`,
              {
                method: 'get',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': token
                }
              })
              .then(resp => resp.json())
              .then(user => {
                if (user && user.email) {
                  this.loadUser(user);
                  this.onRouteChange('home');
                }
              })
          }
        })
        .catch(console.log)
    }
  }


  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        entries: data.entries,
        joined: data.joined,
        age: data.age
      }
    })
  }


  calculateFaceLocation = (data) => {
    if(data && data.outputs){
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
    if(boxes){
    this.setState({ boxes: boxes });
    }
  }

  onPending = (data) => {
    this.setState({ pending: data })
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }
  onPictureSubmit = () => {
    this.setState({ imageUrl: this.state.input, boxes: [] });
    fetch('http://localhost:3005/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json',
      'Authorization': window.sessionStorage.getItem('token') },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => {
        if (!response.ok) throw Error
        else return response.json()
      }
      )
      .then(response => {
        if (response) {
          fetch('http://localhost:3005/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json',
            'Authorization': window.sessionStorage.getItem('token')  },
            body: JSON.stringify({
              id: this.state.user.id
            })

          })
            .then(response => response.json())
            .catch(console.log)
            .then(count => {
              this.setState({
                user: {
                  ...this.state.user,
                  entries: count
                }

              })
            })
            .catch(console.log)
        }
        this.displayFaceBox(this.calculateFaceLocation(response))
      })
      .catch(console.log)

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
    const { route, isSignedIn, imageUrl, boxes, user, pending, isProfileOpen } = this.state;
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={isSignedIn}
          toggleModal={this.toggleModal} />
        {isProfileOpen &&
          <Modal>
            <Profile
              isProfileOpen={isProfileOpen}
              user={user}
              toggleModal={this.toggleModal}
              loadUser={this.loadUser} />
          </Modal>}

        {route === 'home' ?
          <div>
            <Rank
              first_name={user.first_name}
              entries={user.entries} />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onPictureSubmit={this.onPictureSubmit} />
            <Facerecognition
              imageUrl={imageUrl}
              boxes={boxes} />
          </div>
          : (
            route === 'register' ?
              <Register
                pending={pending}
                onPending={this.onPending}
                loadUser={this.loadUser}
                onRouteChange={this.onRouteChange} />
              :
              <Signin
                pending={pending}
                onPending={this.onPending}
                loadUser={this.loadUser}
                onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;