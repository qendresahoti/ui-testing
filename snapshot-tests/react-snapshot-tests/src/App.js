import React, { Component } from 'react';
import Items from './components/Items';
import './App.css';

class App extends Component {
  render() {
    const items = [
      'Shark',
      'Dolphin',
      'Octopus'
    ];
    return (
      <Items items={items} />
    );
  }
}

export default App;
