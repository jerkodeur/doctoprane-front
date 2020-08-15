import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Logo from './Logo'

import './MonitoringPage.css'

const MonitoringPage = (props) => {
  const patient_id = props.location.data.patient_id

  const [patientDatas, setPatientDatas] = useState([])
  const [orders, setOrders] = useState([])
  const [dates, setDate] = useState([])
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    axios.get(`/patients/${patient_id}`)
      .then(res => {
        const datas = res.data
        setPatientDatas(datas)
        let uniqOrders = new Set()
        let uniqDates = new Set()
        let uniqDoctor = new Set()
        datas.map(order => {
          const { order_name, date } = order
          const nameDoctor = order.lastname.concat(' ', order.firstname)
          uniqDoctor.add(nameDoctor)
          uniqDates.add(date)
          return uniqOrders.add(order_name)
        })
        setDate(uniqDates)
        setOrders(uniqOrders)
        setDoctors(uniqDoctor)

      }).catch(err => console.log(err))
  }, [])

  const handleChange = (order) => {
    axios.put(`/medications/${patient_id}/order/${order}`)
      .then(res => console.log('Update ok'))
      .catch(err => console.log(err))
  }

  const handleDate = (date) => {
    let dateTemp = new Date(date)
    dateTemp = dateTemp.toLocaleDateString('fr-FR')
    return dateTemp
  }

  const uniqOrders = Array.from(orders)

  return (
    <>
      <Logo />
      <div className="monotoring-page">
        <h1>Prescription monitoring</h1>
        {patientDatas &&
          uniqOrders.map((order, id) => (
            <>
              <fieldset>
                <legend>{order}</legend>
                <div className='custom-flexbox'>
                  <div className='custom-descrip'>
                    <div className="patient-date">Doctor: <span className='order-text'>{Array.from(doctors)[id]}</span></div>
                    <div className="patient-date">End Date: <span className='order-text'>{handleDate(Array.from(dates)[id])
                    }
                    </span>
                    </div>
                  </div>
                  <div className='custom-chebox'>
                    <input type="checkbox" className="checkbox-custom" onChange={() => handleChange(order)} />
                  </div>
                </div>
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
                {
                  patientDatas.filter(ord => ord.order_name === order).map(medic => {
                    const { med_name, morning, evening, midday, night } = medic
                    return (
                      <div>
                        <div className="flex-medics">
                          <div className="text-medic">
                            {med_name}
                          </div>
                          <div className="flex-checkbox">
                            <div>
                              <input type="checkbox" checked={morning ? true : false} disabled />
                            </div>
                            <div>
                              <input type="checkbox" checked={midday ? true : false} disabled />
                            </div>
                            <div>
                              <input type="checkbox" checked={evening ? true : false} disabled />
                            </div>
                            <div>
                              <input type="checkbox" checked={night ? true : false} disabled />
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
    </>
  )
}

export default MonitoringPage