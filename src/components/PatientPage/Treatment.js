import React, { useState, useEffect } from 'react'
import evening from './evening.svg'
import midday from  './midday.svg'
import morning from  './morning.svg'
import night from './night.svg'

import './Treatment.css'

const Treatment = (props) => {

  return (
    <div className="treatment-div-global">
      <div className='treatment-div1'>
        <p> End time: </p>
        <p> Name: </p>
        <p> How much:</p>
        <p> When:</p>
      </div>
      <div className='treatment-div2'>
        <p> {props.date}</p>
        <p> {props.name}</p>
        <p> {props.dosage}</p>
        <div className='treatment-img-div'>
          <img 
          className='treatment-img'
          src={props.morning ? morning : null}
          />
          <img
          className='treatment-img'
          src={props.midday ? midday : null}
          />
          <img
          className='treatment-img'
          src={props.evening ? evening : null}
          />
          <img
          className='treatment-img'
          src={props.night ? night : null}
          />
          </div>
      </div>
    </div>

  )
}

export default Treatment 