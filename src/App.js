import React, { Component } from 'react';
import {logo} from './logo.svg';
import Map from './components/Map';
import './App.css';

class App extends Component {

  componentWillMount() {

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <div>
            <Map />
          </div>
        </p>
      </div>
    );
  }
}

export default App;
