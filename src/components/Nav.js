import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'



const Nav = (props) => {
  const { doctor_id } = props 
  return (
    <div className='Nav'>
      <ul className="Ul-nav">

        <li className="Li-nav">
          <Link to={{
            pathname: '/doctor_prescription',
            data: {
              doctor_id: doctor_id
            }
          }}>
              <div class="btn-bg bg-1">
                <div class="btn btn-1"><button className="Button-nav">Prescription</button></div>
              </div></Link></li>


        <li className="Li-nav"><Link to={{
          pathname: '/doctor_monitoring',
          data: {
            doctor_id: doctor_id
          }
        }} > <div class="btn-bg bg-1">
          <div class="btn btn-1"><button className="Button-nav">Patient Monitoring</button></div>
        </div></Link></li>

      </ul>
    </div>
  )
}

export default Nav