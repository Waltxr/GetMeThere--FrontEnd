import React, { Component } from 'react';
import './App.css';
import './materialize.css'

import Navbar from './nav/Navbar'
import Login from './nav/Login'
import api from './service/api'
import Dashboard from './components/Dashboard'
import SelectTrain from './components/SelectTrain'
import { Route, Switch, Redirect } from 'react-router-dom'
import Signup from './nav/Signup'
import TrainDetails from './components/TrainDetails'

const CatchAll = (props) => {
  return (<h1> 404 ALERT </h1>)
}

const HomePage = (props) => {
  return (<h1>WELCOME TO GET ME THERE</h1>)
}

class App extends Component {

  state = {
    trains: [],
    selectedTrain: {
      route: null
    },
    auth: {
      currentUser: null
    },
  }

  selectTrain = (event) => {
    this.setState({
      selectedTrain: {
        route: event.target.value
      }
    })
  }

  getTrain = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3001//api/v1/trains/G`)
    .then(res => res.json())
    .then(j => this.setState({
      trains: j
    }))
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
        } else {
          this.setState({ auth: { currentUser: null } })
        }
      })
    } else {
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
        <div>
          {this.state.auth.currentUser ? <Dashboard userId={this.state.auth.currentUser.id}/>: ''}
        </div>
      </div>
    );
  }
}



export default App;
