import React, { Component } from 'react';
import PokeDex from './containers/PokeDex';

class App extends Component {
  render() {
    return (
      <div>
      <h1>Welcome to the PokeDex!</h1>
      <PokeDex />
      </div>
    );
  }
}

export default App;
