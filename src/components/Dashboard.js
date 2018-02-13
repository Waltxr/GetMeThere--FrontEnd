import React from 'react'
import TrainCard from './TrainCard'


class Dashboard extends React.Component {

  state = {
    userId: this.props.userId,
    fave_trains: []
  }



  componentDidMount() {
    fetch(`http://localhost:3001/api/v1/users/${this.state.userId}/fave_trains`)
    .then(res => res.json())
    .then(res => this.setState((prevState) => {return {fave_trains: [...prevState.fave_trains, res]}}))
  }


  render() {
    console.log(this.state.fave_trains)
    const allFaves =
      this.state.fave_trains.map( (ft) => {return <TrainCard train={ft}></TrainCard>})

    return(
      <div>
        {allFaves}
      </div>
    )
  }

}

export default Dashboard
