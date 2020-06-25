import React, { useState, useEffect } from 'react'
import evening from './evening.svg'
import midday from  './midday.svg'
import morning from  './morning.svg'
import night from './night.svg'

import './Treatment.css'

const Treatment = (props) => {

  return (
    <div className="treatment-div">

      <p>End time: </p>
      <p> Name: {props.name}</p>
      <p> How much: {props.dosage}</p>
      <p> When:</p>
      <p>Morning:</p>
        <img 
        className='treatment-img'
        src={props.morning ? morning : null}
        />
      <p>Midday:</p>
      <img
        className='treatment-img'
        src={props.midday ? midday : null}
        />
      <p>Evening:</p>
      <img
        className='treatment-img'
        src={props.evening ? evening : null}
        />
      <p>Night:</p>
      <img
        className='treatment-img'
        src={props.night ? night : null}
        />
    </div>

  )
}

export default Treatment 