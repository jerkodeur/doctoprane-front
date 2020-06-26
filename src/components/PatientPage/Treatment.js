import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Doctor from './Doctor'

import evening from './evening.svg'
import midday from './midday.svg'
import morning from './morning.svg'
import night from './night.svg'

import './Treatment.css'

const Treatment = (props) => {


  //Fetch and set doctor's data
  const [doctor, setDoctor] = useState([])
  const fetchDoctor = () => {
    axios
      .get('http://localhost:3300/doctors/2')
      .then(result => console.log('result', result.data) || setDoctor(result.data))
      .catch(err => console.log('err', err))
  }

  useEffect(() => {
    console.log('ok')
    fetchDoctor()
  }, [])



  return (
    <div className="treatment-div-global">
      <fieldset>
        <legend>{props.order}</legend>
        {doctor.map(doc => {
          return <Doctor
            key={doc.id}
            name={doc.lastname}
            specialty={doc.specialty} />
        })}
        <div className='treatment-div1'>
          <p>
            {props.date}
            {/* {new Intl.DateTimeFormat("en-GB", {
          year: "numeric",
          month: "short",
          day: "2-digit"
          }).format(props.date)} */}
          </p>
          <div>
            <div className="flex-medics">
              <div className="text-medic">
              </div>
              <div className="flex-checkbox">
                <div className="txt-small">morning</div>
                <div className="txt-small">midday</div>
                <div className="txt-small">evening</div>
                <div className="txt-small">night</div>
              </div>
            </div>
          </div>
          <div className="flex-medics">
            <div className="text-medic">
              {props.name}
            </div>
            <div className="flex-checkbox">
              <div>
                <input type="checkbox" checked={morning ? false : true} disabled />
              </div>
              <div>
                <input type="checkbox" checked={midday ? false : true} disabled />
              </div>
              <div>
                <input type="checkbox" checked={evening ? false : true} disabled />
              </div>
              <div>
                <input type="checkbox" checked={night ? false : true} disabled />
              </div>
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  )
}

export default Treatment 