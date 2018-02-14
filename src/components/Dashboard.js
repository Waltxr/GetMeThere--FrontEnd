import React from 'react'
import TrainCard from './TrainCard'


class Dashboard extends React.Component {

  state = {
    userId: this.props.userId,
    fave_trains: []
  }



  componentDidMount() {
    if (this.state.userId) {
    fetch(`http://localhost:3001/api/v1/users/${this.state.userId}/fave_trains`)
    .then(res => res.json())
    .then(res => this.setState((prevState) => {return {fave_trains: [...prevState.fave_trains, ...res]}}))
    }
  }

  removeFave = (faveTrainId) => {
      let index = this.state.fave_trains.findIndex( ft => ft.id === faveTrainId)
      let x = this.state.fave_trains
      x.splice( this.state.fave_trains.indexOf(index), 1)
      this.setState({fave_trains: x})
      fetch(`http://localhost:3001/api/v1/users/${this.state.userId}/fave_trains/${faveTrainId}`, {
      method: 'delete'
    })
  }



  render() {
    const allFaves =
      this.state.fave_trains.map( (ft) => {return <TrainCard key={ft} train={ft} addRemove={this.removeFave}></TrainCard>})
    return(
      <div className="dashboard">
        {allFaves}
      </div>
    )
  }

}

export default Dashboard
