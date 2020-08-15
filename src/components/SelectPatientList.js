import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './SelectPatientList.css'

const SelectPatientList = (props) => {
  const { doctor_id, handleChange, all } = props

  const [patientList, setPatientList] = useState()

  useEffect(() => {
    if (all) {
      axios.get('/doctors/')
        .then(res => setPatientList(res.data))
    } else {
      axios.get(`/doctors/${doctor_id}`)
        .then(res => setPatientList(res.data))
    }
  }, [doctor_id])

  return(
    <div className="select-patients-cont">
      <select name="Patients" id="patients-select" className="select-patients-list" onChange={handleChange}>
        <option selected>Please select a patient</option>
        {
          patientList && patientList.map(patient =>
            < option value={patient.id} key={patient.id} > {patient.lastname.concat(' ', patient.firstname)}</option>
          )
        }
      </select>
    </div>
  )
}

export default SelectPatientList