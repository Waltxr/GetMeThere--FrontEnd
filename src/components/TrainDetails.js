import React from 'react'
import TrainCard from './TrainCard'

const TrainDetails = (props) => {

  const train = props.trains.map((t) => <TrainCard train={t} />)
  console.log(props.trains)
  return(
    <div>{train}</div>
  )
}

export default TrainDetails
