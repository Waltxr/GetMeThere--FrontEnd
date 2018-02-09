import React from 'react'
import Directions from './Directions'
import Response from './Response'
import Train from './Train'

class Activity extends React.Component {


  render() {
    return (
    <Div>
      <Directions />
      <Response />
      <Train />
    </Div>
    )
  }

}

export default Activity
