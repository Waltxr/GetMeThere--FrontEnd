import React from 'react'



// [{"coded":"G28","regular":"Nassau Av","direction":"N","line":"G","times":[3,9,15]}]

const TrainCard  = ({train}) => {

  const times = train.times.sort( (a,b) => {return a-b}).map( (t) => {return <p>{t} min</p>})

  return (
    <div class="row">
         <div class="col s12 m7">
           <div class="card">
             <div class="card-image">
               <img src="https://cdn.vectorstock.com/i/1000x1000/82/86/people-using-smartphone-phones-in-subway-train-vector-10208286.jpg"></img>
               <span class="card-title">{train.line} train @ {train.regular}, going {train.direction}</span>
             </div>
             <div class="card-content">
                <h5>arriving in:</h5><h3>  {times}</h3>
             </div>
             <div class="card-action">
               <a href="#">This is a link</a>
             </div>
           </div>
         </div>
       </div>





    // {
    // <div className="trainCard">
    //   <h2 className="trainLine"> {train.line} train</h2>
    //   <h3 className="stopDirection">@ {train.regular}, going {train.direction}</h3>
    //   <h4>arriving in: </h4>
    //   {times}
    // </div>
    // }

  )

  }


export default TrainCard
