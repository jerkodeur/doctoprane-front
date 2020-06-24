import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Treatment from './Treatment'

const PatientPage = () => {
    //Fetch and set doctor's data
    // const [doctor, setDoctor] = useState([])
    // const fetchDoctor = async () => {
    //   const result = await axios.get('http://localhost:3300/medications')
    //   setDoctor(result.data)
    // }
    //Fetch and set treatment's data
    const [treatmentData, setTreatmentData] = useState([])
    const fetchTreatmentData = async () => {
      const result = await axios.get('http://localhost:3300/medications')
      setTreatmentData (result.data)
    }
    useEffect(() => {
      // fetchDoctor()
      fetchTreatmentData()
    }, [])

  return (
    <div>
      <h2>Prescriptions</h2>
      {/* <p>Doctor: {doctor} </p> */}
      {treatmentData.map(treatement => {
        return <Treatment 
        // key={treatment.id} 
        // name={treatment} 
         />
      })}

      <Link exact to={{pathname: "/"}}>
        <button>Exit</button>
      </Link>

    
    </div>
  )

}

export default PatientPage