import React from 'react'


// [{"coded":"G28","regular":"Nassau Av","direction":"N","line":"G","times":[3,9,15]}]

const TrainCard  = ({train, addRemove}) => {

  const times = train.times.sort( (a,b) => {return a-b}).map( (t) => {return <p>{t} min</p>})

  return (
    <div class="row">
         <div class="col s12 m7">
           <div class="card">
             <div class="card-image">
               <img src={require('../images/train2.jpeg')}></img>
               <span class="card-title">{train.line} train @ {train.regular}, going {train.direction}</span>
             </div>
             <div class="card-content">
                <h5>arriving in:</h5><h3>  {times}</h3>
             </div>
             <div class="card-action">
               <a onClick={ () => addRemove(train.id)}>This is a link</a>
             </div>
           </div>
         </div>
       </div>



  )

  }


export default TrainCard
