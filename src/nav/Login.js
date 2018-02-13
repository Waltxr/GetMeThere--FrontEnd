import React from 'react'
import api from '../service/api'

class Login extends React.Component {
  state = {username: '', password: ''}

  handleLogin = (e) => {
    e.preventDefault()
    api.auth.login(this.state.username, this.state.password).then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        this.props.history.push("/")
        this.props.setUser(resp)
      }
    })
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    return (
      <form onSubmit={this.handleLogin} >
        <input value={this.state.username} name="username" type="text" placeholder="Username" onChange={this.onInputChange} />
        <input value={this.state.password} name="password" type="password" placeholder="Password" onChange={this.onInputChange}/>
        <input type="submit" />
      </form>
    )
  }
}

export default Login
