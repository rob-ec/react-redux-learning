import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      { name: 'Robson', age: 21, belt: 'white', id: 1 },
      { name: 'Gabriel', age: 20, belt: 'green', id: 2 },
      { name: 'Johnny', age: 21, belt: 'blue', id: 3 },
      { name: 'Lisa', age: 17, belt: 'black', id: 4 }
    ]
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="App-Title">
            <h1>React Learning</h1>
          </div>
        </header>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
