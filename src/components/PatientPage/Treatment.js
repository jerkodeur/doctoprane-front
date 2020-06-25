import React from 'react';

import './Treatment.css'

const Treatment = (props) => {

    return (
      <div className="treatment-div">
        <p>End time: </p>
        <p> Name {props.name}</p>
        <p> How much: {props.dosage}</p>
        <p> When: {props.morning} {props.midday} {props.evening} {props.night} </p>
    </div>
  )
}

export default Treatment 