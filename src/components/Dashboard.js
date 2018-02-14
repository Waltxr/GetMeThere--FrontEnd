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


  render() {
    const allFaves =
      this.state.fave_trains.map( (ft) => {return <TrainCard key={ft} train={ft}></TrainCard>})

    return(
      <div className="dashboard" style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
        <div>
        {allFaves}
        </div>
        <div>
          This is where the choose train section will go
        </div>


      </div>
    )
  }

}

export default Dashboard
