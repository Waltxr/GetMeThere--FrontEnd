import React from 'react'
import Trains from './Trains'
import Search from './Search'

class Dashboard extends React.Component {


  render() {
    return(
      <div>
        <Trains trains={this.props.trains}/>
      </div>
    )
  }

}

export default Dashboard
