import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Treatement from './Treatement'

const PatientPage = () => {
    //Fetch and set doctor's data
    // const [doctor, setDoctor] = useState([])
    // const fetchDoctor = async () => {
    //   const result = await axios.get('http://localhost:3300/medications')
    //   setDoctor(result.data)
    // }
    //Fetch and set treatment's data
    const [treatementData, setTreatementData] = useState([])
    const fetchTreatementData = async () => {
      const result = await axios.get('http://localhost:3300/medications')
      setTreatementData (result.data)
    }
    useEffect(() => {
      // fetchDoctor()
      fetchTreatementData()
    }, [])

  return (
    <div>
      <h2>Prescriptions</h2>
      {/* <p>Doctor: {doctor} </p> */}
      {treatementData.map(treatement => {
        return <Treatement key={treatement.id} name={treatement} icon={treatement} />
      })}

      <Link exact to={{pathname: "/"}}>
        <button>Exit</button>
      </Link>

    
    </div>
  )

}

export default PatientPage