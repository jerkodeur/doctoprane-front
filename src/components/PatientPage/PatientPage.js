import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Treatment from './Treatment'
import './PatientPage.css'


//ajouter filtre date, docteur

const PatientPage = () => {
    //Fetch and set doctor's data
    const [doctor, setDoctor] = useState([])
    const fetchDoctor = async () => {
      const result = await axios.get('http://localhost:3300/patients')
      setDoctor(result.data)
    }
    //Fetch and set treatment's data
    const [treatmentData, setTreatmentData] = useState([])
    const fetchTreatmentData = async () => {
      const result = await axios.get('http://localhost:3300/patients')
      setTreatmentData (result.data)
    }
    useEffect(() => {
      fetchDoctor()
      fetchTreatmentData()
    }, [])

  return (
    <div className="prescriptionPage-div">
      <h2 className="prescriptionPage-h2" >Prescriptions</h2>
      <p>Doctor: {doctor.firstname} {doctor.lastname} </p> 
      <p> Specialty: {doctor.specialty} </p>

    
      {treatmentData.map(treatment => {
        return <Treatment 
        key={treatment.id} 
        name={treatment.med_name} 
        order={treatment.order_name} 
        dosage={treatment.dosage} 
        morning={treatment.morning} 
        midday={treatment.midday} 
        evening={treatment.evening} 
        night={treatment.night} 
        />
      })}

      <Treatment />

      <Link exact to={{pathname: "/"}}>
        <button>Exit</button>
      </Link>

    
    </div>
  )

}

export default PatientPage