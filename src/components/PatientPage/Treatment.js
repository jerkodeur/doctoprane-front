import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Doctor from './Doctor'

import evening from './evening.svg'
import midday from  './midday.svg'
import morning from  './morning.svg'
import night from './night.svg'

import './Treatment.css'

const Treatment = (props) => {


    //Fetch and set doctor's data
    const [doctor, setDoctor] = useState([])
    const fetchDoctor = () => {
      axios
      .get('http://localhost:3300/doctor/1')
      .then(result => console.log('result', result.data) || setDoctor(result.data))
      .catch(err => console.log('err', err ))  
    }

    useEffect(() => {
      console.log('ok')
      fetchDoctor()
    }, [])

  return (
    <div className="treatment-div-global">
      {doctor.map(doc => {
      return <Doctor
      key={doc.id} 
      name={doc.lastname} 
      specialty={doc.specialty} />
      })} 
       
      <div className='treatment-div1'>
        <p> End time: </p>
        <p> Name: </p>
        <p> How much:</p>
        <p> When:</p>
      </div>
      <div className='treatment-div2'>
        <p> 
          {props.date}
          {/* {new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "short",
          day: "2-digit"
          }).format(props.date)} */}
        </p>
        <p> {props.name}</p>
        <p> {props.dosage}</p>
        <div className='treatment-img-div'>
          <div className='treatment-img-block'>
            <p>{props.morning ? 'Morning' : null}</p>
            <img 
            className='treatment-img'
            src={props.morning ? morning : null}
            />
          </div>
          <div className='treatment-img-block'>
            <p>{props.midday ? 'Midday' : null}</p>
            <img
            className='treatment-img'
            src={props.midday ? midday : null}
            />
          </div>
          <div className='treatment-img-block'>
            <p>{props.evening ? 'Evening' : null}</p>
            <img
            className='treatment-img'
            src={props.evening ? evening : null}
            />
          </div>
          <div className='treatment-img-block'>
            <p>{props.night ? 'Night' : null}</p>
            <img
            className='treatment-img'
            src={props.night ? night : null}
            />
          </div>
          </div>
      </div>
    </div>
  )
}

export default Treatment 