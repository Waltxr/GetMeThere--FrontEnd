import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {

  const loggedIn = !!props.currentUser
  console.log(loggedIn)
  return (
    <nav>
      <div>
        <ul>
          {loggedIn ?
            <li><a onClick={props.logOut}>Logout</a></li>
          :
            <li><Link to="/login">Login</Link></li>
          }
          <li><Link to="/signup">Sign Up</Link></li>
          {loggedIn &&
          <li><Link to="/select-train">Select Train</Link></li>  
          }
        </ul>
      </div>
    </nav>
  )
}


export default Navbar
