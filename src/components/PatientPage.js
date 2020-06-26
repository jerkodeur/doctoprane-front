import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Logo from './Logo'

import './MonitoringPage.css'

const MonitoringPage = (props) => {
    // const doctor_id = props.location.data.doctor_id
    const patient_id = 1

    const [patientDatas, setPatientDatas] = useState([])
    const [orders, setOrders] = useState([])
    const [dates, setDate] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3300/patients/${patient_id}`)
            .then(res => {
                const datas = res.data
                setPatientDatas(datas)
                let uniqOrders = new Set()
                let uniqDates = new Set()
                datas.map(order => {
                    const { order_name, date } = order
                    uniqDates.add(date)
                    return uniqOrders.add(order_name)
                })
                setDate(uniqDates)
                setOrders(uniqOrders)

            }).catch(err => console.log(err))
    }, [])

    const handleDate = (date) => {
        let dateTemp = new Date(date)
        dateTemp = dateTemp.toLocaleDateString('fr-FR')
        return dateTemp
    }

    const uniqOrders = Array.from(orders)
    console.log(uniqOrders)

    return (
        <>
            <Logo />
            <div className="monotoring-page">
                <h1>Patient monotoring</h1>
                {console.table(patientDatas) && console.log(new Set(patientDatas.order_name))
                }
                {patientDatas &&
                    uniqOrders.map((order, id) => (
                        <>
                            <fieldset>
                                <legend>{order}</legend>
                                <div className="date">End Date: <span className='order-date'>{handleDate(Array.from(dates)[id])}</span></div>
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
                }
            </div>
        </>
    )
}

export default MonitoringPage