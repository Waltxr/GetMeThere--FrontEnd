import React from 'react'




// [{"coded":"G28","regular":"Nassau Av","direction":"N","line":"G","times":[3,9,15]}]

const TrainCard  = ({train}) => {

  console.log(train)
  return (
    <div>
      <h3>{train[0].line} Train, at {train[0].regular} going {train[0].direction}</h3>
      <h3>Train times: {train[0].times}</h3>
    </div>
  )

  }


export default TrainCard
