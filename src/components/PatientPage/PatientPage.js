import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Treatment from './Treatment'
import './PatientPage.css'


//ajouter filtre date, docteur

const PatientPage = () => {

    //Fetch and set doctor's data
    const [doctor, setDoctor] = useState([])
    const fetchDoctor = () => {
      axios
      .get('http://localhost:3300/patients/1')
      .then(result => console.log('result', result.data) || setDoctor(result.data))
      .catch(err => console.log('err', err ))  
    }

    //Fetch and set treatment's data
    const [treatmentData, setTreatmentData] = useState([])
    const fetchTreatmentData = () => {
      axios
      .get('http://localhost:3300/patients/1')
      .then(result => console.log('result', result.data) || setTreatmentData(result.data))
      .catch(err => console.log('err', err ))
    }

    useEffect(() => {
      console.log('ok')
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
        date={treatment.date}
        order={treatment.order_name}
        dosage={treatment.dosage}
        morning={treatment.morning}
        midday={treatment.midday}
        evening={treatment.evening}
        night={treatment.night}
        />
      })}

      {/* <Treatment /> */}

      <Link exact to={{pathname: "/"}}>
        <button>Exit</button>
      </Link>


    </div>
  )

}

export default PatientPage