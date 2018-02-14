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
      currentUser: null,
      loggingIn: true
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
      },
      logingIn: false
      }
    })
  }

  removeLoggedInUser = () => {
    localStorage.removeItem('token')
    this.setState({
      auth: { currentUser: null, loggingIn: false }
    })
    window.history.pushState({}, null, "/login")
  }



  componentDidMount() {
    const token = localStorage.getItem('token')
    if (token) {
      api.auth.getLoggedInUser().then(user => {
        if (user) {
          this.setState({
            auth: {
              currentUser: {
                username: user.username,
                id: user.id
              },
              loggingIn: false
          } })
          console.log(`user: ${user.username}`)
        } else {
          this.setState({ auth: {
            currentUser: null,
            loggingIn: false
          } })
        }
      })
    } else {
      this.setState({
        auth: { loggingIn: false }
      })
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
        <Route path="/dashboard" render={ (routerProps) => {
            return <Dashboard history={routerProps.history} auth={this.state.auth} userId={this.state.auth.currentUser}/>
          }} />
        <Route path="/select-train" render={ (routerProps) => {
            return (
              <div>
                <SelectTrain getTrain={this.getTrain} auth={this.state.auth}/>
                <TrainDetails trains={this.state.trains} auth={this.state.auth}/>
              </div>
            )
          } }/>
          <Route path="/404" render={ (routerProps) => {
              return <CatchAll auth={this.state.auth} />
            } } />
          <Redirect from="/home" to="/" />
          <Route exact path="/" component={HomePage} />
          <Redirect to="/404" />
        </Switch>
      </div>
    );
  }
}



export default App;
