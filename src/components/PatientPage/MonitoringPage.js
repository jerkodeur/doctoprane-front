import React, { useEffect, useState } from 'react'
import axios from 'axios'

import SelectPatientList from './SelectPatientList'

import './MonitoringPage.css'

const MonitoringPage = (props) => {
  // const doctor_id = props.location.data.doctor_id
  const doctor_id = 1

  const [patientDatas, setPatientDatas] = useState([])
  const [patientId, setPatientId] = useState()
  const [orders, setOrders] = useState([])
  const [dates, setDate] = useState([])

  useEffect(() => {
    axios.get(`/doctors/${doctor_id}/patient/1`)
      .then(res => {
        // const { date, ...patientDatas } = res.data[0]
        // let tempDate = new Date(date)
        // tempDate = tempDate.toLocaleDateString('fr-FR')
        // patientDatas.date = tempDate
        const datas = res.data
        setPatientDatas(datas)
        let uniqOrders = new Set()
        let uniqDates = new Set()
        datas.map(order => {
          const { order_name, last_update } = order
          setDate(uniqDates.add(last_update))
          return setOrders(uniqOrders.add(order_name))
        })
        // setOrders(uniqOrders)
        // console.log(uniqOrders)
      }).catch(err => console.log(err))

  }, [])

  const handleChange = (e) => {
    if (e.target.value !== 'Please select a patient') {
      setPatientId(e.target.value)
    } else {
      setPatientId(false)
    }
  }

  const handleDate = (date) => {
    let dateTemp = new Date(date)
    dateTemp = dateTemp.toLocaleDateString('fr-FR')
    return dateTemp
}

  const uniqOrders = Array.from(orders)

  return (
    <div className="monotoring-page">
      <h1>Patient monotoring</h1>
      <SelectPatientList doctor_id={doctor_id} handleChange={handleChange} />
      {console.table(patientDatas) && console.log(new Set(patientDatas.order_name))
      }
      {patientId &&
        uniqOrders.map((order, id) => (
          <>
            <fieldset>
              <legend>{order}</legend>
              <div>
                <div className="flex-medics">
                  {handleDate(Array.from(dates)[id])}
                  <div className="flex-checkbox">
                    <div>morning</div>
                    <div>midday</div>
                    <div>evening</div>
                    <div>night</div>
                  </div>
                </div>
              </div>
                {
                  patientDatas.map(medic => {
                    const { med_name, morning, evening, midday, night } = medic
                    return (
                      <div>
                        <div className="flex-medics">
                          {med_name}
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
                    )
                  })}
            </fieldset>
          </>
        ))
      }
          </div>
        )
}

export default MonitoringPage