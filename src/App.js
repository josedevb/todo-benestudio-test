import React, { Component } from 'react';
import './App.css';
import Signature from './components/Signature.js';
import TodoApp from './components/TodoApp.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signature />
        <TodoApp />
      </div>
    );
  }
}

export default App;
