import React, { Component } from 'react';
import './App.css';

import Navbar from './nav/Navbar'
import Login from './nav/Login'
import api from './service/api'
import Dashboard from './components/Dashboard'
import { Route, Switch, Redirect } from 'react-router-dom'
import Signup from './nav/Signup'

const CatchAll = (props) => {
  return (<h1> 404 ALERT </h1>)
}

const HomePage = (props) => {
  return (<h1> WELCOME TO GET ME THERE </h1>)
}

class App extends Component {

  state = {
    savedTrains: ['G'],
    trains: [],
    auth: {
      currentUser: null
    }
  }

  setLoggedInUser = (user) => {
    localStorage.setItem('token', user.token)
    this.setState({
      auth: { currentUser: {
        username: user.username,
        id: user.id
      }}
    })
  }

  removeLoggedInUser = () => {
    localStorage.removeItem('token')
    this.setState({
      auth: { currentUser: null }
    })
    window.history.pushState({}, null, "/login")
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      api.auth.getLoggedInUser().then(user => {
        if (user) {
          this.setState({ auth: { currentUser: user } })
          console.log(`user: ${user.username}`)
        } else {
          this.setState({ auth: { currentUser: null } })
        }
      })
    } else {
      console.log('no token!')
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar currentUser={this.state.auth.currentUser} logOut={this.removeLoggedInUser} />
        <Switch>
          <Route path="/login" render={ (routerProps) => {
            return <Login history={routerProps.history} setUser={this.setLoggedInUser} />
          } } />
        <Route path ="/signup" render={ (routerProps) => {
            return <Signup history={routerProps.history} />
          }} />
          <Route path="/404" component={CatchAll} />
          <Redirect from="/home" to="/" />
          <Route exact path="/" component={HomePage} />
          <Redirect to="/404" />
        </Switch>
        <Dashboard userId="13"/>
      </div>
    );
  }
}

export default App;
