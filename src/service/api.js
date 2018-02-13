const token = localStorage.getItem('token')

const headers = () => {
  return {
    'Content-Type': 'application/json',
    'Accepts': 'application/json',
    Authorization: localStorage.getItem('token')
  }
}


const login = (username, password) => {
  return fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: headers(),
    body: JSON.stringify({
      username: username,
      password: password
    })
  }).then(r => r.json())
}

const getLoggedInUser = () => {
  return fetch(`http://localhost:3001/current_user`, {
    headers: headers()
  }).then(res => res.json())
}

const signUp = (username, password) => {
  return fetch(`http://localhost:3001/api/v1/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password
    })
  })
}


export default {
  auth: {
    login,
    getLoggedInUser,
    signUp
  }
}
