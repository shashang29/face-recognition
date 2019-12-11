import React from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js'
import './App.css';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: 'a15793ebf0d9498487bcf36e59457c69'
 });
 

const particlesOptions = {

  particles: {
    number: {
      value: 70,
      density: {
        enable: true,
        value_area: 500
      }
    },
    size:{
      value: 3
    }

  }
}
class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      input: ''
    }

  }
  onInputChange= (event)=>{
    console.log(event.target.value)
  }
  onButtonSubmit =()=>{
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      console.log(response)
    },
    function(err) {
      // there was an error
    }
  );
  }

  render(){
  return (
    <div className="App">
      <Particles className='particles'
        params={particlesOptions}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      {/* <Facerecognition/> */}
    </div>
  );
}
}

export default App;
