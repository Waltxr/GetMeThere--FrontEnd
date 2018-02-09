import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'

class App extends Component {

  state = {
    savedTrains: ['G'],
    user: 1,
    trains: ''
  }

  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/users/${this.state.user}/fave_trains/1`)
    .then(res => res.json())
    .then( res => console.log(res))
  }

  render() {
    return (
      <div className="App">
        <Dashboard savedTrains={this.state.savedTrains} user={this.state.user} trains={this.state.trains}/>
      </div>
    );
  }
}

export default App;
