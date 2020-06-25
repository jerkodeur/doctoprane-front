import React from 'react';

const Treatment = (props) => {

    return (
      <div>
        <p>End time: {props}</p>
        <p> {props.name}</p>
        <p> How much: {props.dosage}</p>
        <p> When: {props.morning} {props.midday} {props.evening} {props.night} </p>
    </div>
  )
}

export default Treatment 