import React from 'react'



// [{"coded":"G28","regular":"Nassau Av","direction":"N","line":"G","times":[3,9,15]}]

const TrainCard  = ({train}) => {

  const times = train.times.sort( (a,b) => {return a-b}).map( (t) => {return <li>{t} min</li>})

  return (

    <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src="https://storybookstorage.s3.amazonaws.com/items/images/000/324/956/original/20160403-9-1qrhqzt.jpg?1459717018"></img>
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right"></i></span>
        <p><a href="#">This is a link</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
        <p>
            <h4>arriving in: </h4>
            {times}
        </p>
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
