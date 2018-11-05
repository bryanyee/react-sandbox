import React, { Component } from 'react';

import Spinners from './Spinners';

import './AnimationsApp.scss';

/*

fade in/out changing text
text slide left/right with ease (keyframes and alternate animation)
element pop in/out
slide input bottom border

*/

class AnimationsApp extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Spinners />
        </header>
      </div>
    );
  }
}

export default AnimationsApp;
