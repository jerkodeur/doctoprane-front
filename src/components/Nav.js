import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'



const Nav = () => {
  return (
    <div className='Nav'>
      <ul className="Ul-nav">

        <li className="Li-nav"><Link to='/doctor_prescription'> <div class="btn-bg bg-1">
          <div class="btn btn-1"><button className="Button-nav">Prescription</button></div>
        </div></Link></li>


        <li className="Li-nav"><Link to='/doctor_monitoring'> <div class="btn-bg bg-1">
          <div class="btn btn-1"><button className="Button-nav">Patient Monitoring</button></div>
        </div></Link></li>

      </ul>
    </div>
  )
}

export default Nav