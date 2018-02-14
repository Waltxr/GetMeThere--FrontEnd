import React from 'react'

class TrainCard extends React.Component {


  render() {
    console.log(this.props.train)
    return(
      <div>
        <ul>
          <li>{this.props.train.line}</li>
          <li>{this.props.train.regular}</li>
          <li>{this.props.train.direction}</li>
          <li>{this.props.train.times[0]} mins</li>
          <li>{this.props.train.times[1]} mins</li>
          <li>{this.props.train.times[2]} mins</li>
        </ul>
      </div>
    )
  }

}

export default TrainCard
