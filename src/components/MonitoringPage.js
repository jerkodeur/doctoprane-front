import React, { useEffect } from 'react'
import axios from 'axios'

import './MonitoringPage.css'

const MonitoringPage = (props) => {
  // const doctor_id = props.location.data.doctor_id
  const doctor_id = 1

  useEffect(() => {
    axios.get(`http://localhost:3300/doctors/${doctor_id}/patient/1`)
      .then(res => console.table(res.data[0]))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      Hello World
    </>
  )
}

export default MonitoringPage