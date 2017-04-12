import React, { Component } from 'react';
import {logo} from './logo.svg';
import './App.css';

const styles = {
    transition: 'all 1s ease-out'
};

class App extends Component {

  componentWillMount() {
      this.state = {
        slide: false,
        flip: false
      };
  }
  onFlip() {
      this.setState({
        slide: false,
        flip: true
      });
  }

  onSlide() {
      this.setState({
        slide: true,
        flip: false
    });
  }

  render() {
    return (
      <div>
          <nav>
              <div className="nav-wrapper orange darken-2">
                  <ul className="left">
                      <li className="active"><a href="#">TRANSITIONS</a></li>
                      <li><a href="#">ANIMATIONS</a></li>
                      <li><a href="#">REACTJS + CSS TRANSITIONS</a></li>
                      <li><a href="#">REACTJS + CSS ANIMATIONS</a></li>
                  </ul>
              </div>
          </nav>
          <div className="container">
              <div className="row">
                  <div className="s12">

                  </div>
              </div>

              <div className="row">
                  <div className="s8 offset-s2 center-align">
                      <div className={"card deep-purple z-depth-2 " + (this.state.slide ? 'slide' : '') + (this.state.flip ? 'flip' : '')}
                           style={{...styles, opacity: this.state.opacity, transform: `scale(${this.state.scale})`}}>
                          <div className="card-content white-text">
                              <span className="card-title">Awesome Animations!</span>
                              <p>CSS Animations are pretty cool. But combined with ReactJS ... &lt;3</p>
                          </div>
                          <div className="card-action">
                              <a onClick={this.onFlip.bind(this)} style={{cursor: 'pointer'}}>FLIP</a>
                              <a onClick={this.onSlide.bind(this)} style={{cursor: 'pointer'}}>SLIDE</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    );
  }
}

export default App;
