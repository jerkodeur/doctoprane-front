import React, { useEffect, useState } from 'react'
import axios from 'axios'

import SelectPatientList from './SelectPatientList'
import Logo from './Logo'
import Nav from './Nav'

import './MonitoringPage.css'
import medoc from '../images/medoc.png'

const MonitoringPage = (props) => {
  const doctor_id = props.location.data.doctor_id

  const [patientDatas, setPatientDatas] = useState([])
  const [patientId, setPatientId] = useState()
  const [orders, setOrders] = useState([])
  const [dates, setDate] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3300/doctors/${doctor_id}/patient/${patientId}`)
      .then(res => {
        const datas = res.data
        setPatientDatas(datas)
        let uniqOrders = new Set()
        let uniqDates = new Set()
        datas.map(order => {
          const { order_name, last_update } = order
          setDate(uniqDates.add(last_update))
          return setOrders(uniqOrders.add(order_name))
        })
      }).catch(err => console.log(err))

  }, [patientId])

  const handleChange = (e) => {
    if (e.target.value !== 'Please select a patient') {
      setPatientId(e.target.value)
    } else {
      setPatientId(false)
    }
  }

  const handleDate = (date) => {
    if (date) {
      let dateTemp = new Date(date)
      dateTemp = dateTemp.toLocaleDateString('fr-FR')
      return dateTemp !== '01/01/1970' ? dateTemp : 'Not specified'
    } else {
      return 'Not specified'
    }
  }

  const compareDate = (date) => {
    let dateTemp = new Date(date)
    console.log(`%c ${dateTemp}`, 'color:green')
    let dateTocompare = new Date(new Date().getTime() - (2 * 24 * 60 * 60 * 1000))
    console.log(`%c ${dateTocompare}`, 'color:red')
    return dateTemp > dateTocompare ? 'date-green' : 'date-red'
  }

  const uniqOrders = Array.from(orders)

  return (
    <>
      <Logo />
    <div className="monotoring-page">
      <h1>Patient monotoring</h1>
      <SelectPatientList doctor_id={doctor_id} handleChange={handleChange} />
      {console.table(patientDatas) && console.log(new Set(patientDatas.order_name))
      }
      {patientId ?
        uniqOrders.map((order, id) => (
          <>
            <fieldset>
              <legend>{order}</legend>
              <div className="date">Last Update: <span className={compareDate(Array.from(dates)[id])}>{handleDate(Array.from(dates)[id])}</span></div>
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
          :
          <img src={medoc} alt='' className='medoc' />
      }
      </div>
      <footer className="Mono-footer">
        <Nav doctor_id={doctor_id} />
      </footer>
      </>
        )
}

export default MonitoringPage