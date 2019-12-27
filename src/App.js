import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import Facerecognition from './components/Facerecognition/Facerecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
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
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    entries: 0,
    joined: ''

  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = initialState;

  }


  loadUser = data => {
    this.setState({
      user: {
        id: data.id,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }


  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width)
    const height = Number(image.height)

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }
  displayFaceBox = (box) => {
    this.setState({ box: box });

  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }
  onPictureSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    fetch('https://thawing-fjord-68352.herokuapp.com/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('https://thawing-fjord-68352.herokuapp.com/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
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
      this.setState(initialState)
    }
    else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  render() {
    const { route, isSignedIn, imageUrl, box } = this.state;
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={isSignedIn} />
        <Logo />

        {route === 'home' ?
          <div>

            <Rank
              first_name={this.state.user.first_name}
              entries={this.state.user.entries} />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onPictureSubmit={this.onPictureSubmit} />
            <Facerecognition
              imageUrl={imageUrl}
              box={box} />
          </div>
          : (
            route === 'register' ?
              <Register
                loadUser={this.loadUser}
                onRouteChange={this.onRouteChange} />
              :
              <Signin
                loadUser={this.loadUser}
                onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;
