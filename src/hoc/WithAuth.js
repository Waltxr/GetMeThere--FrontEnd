import React from 'react'
import { Redirect } from 'react-router'

const WithAuth = WrappedComponent => {
    return (props) => {
      return (props.auth.loggingIn || props.auth.currentUser) ?
        <WrappedComponent {...props} />
      :
        <Redirect to="/404" />
  }
}

export default WithAuth
