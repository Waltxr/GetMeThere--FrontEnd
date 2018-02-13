import React from 'react'
import api from '../service/api'

class Signup extends React.Component {
  state = {username: '', password: ''}

  handleSignup = (e) => {
    e.preventDefault()
    api.auth.signUp(this.state.username, this.state.password).then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        this.props.history.push("/login")
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
      <form onSubmit={this.handleSignup} >
        <input value={this.state.username} name="username" type="text" placeholder="Username" onChange={this.onInputChange} />
        <input value={this.state.password} name="password" type="password" placeholder="Password" onChange={this.onInputChange}/>
        <input type="submit" />
      </form>
    )
  }
}

export default Signup
