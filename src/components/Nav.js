import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'


const Nav = () => {
return (
  <div className='nav'>
    <ul>
      <li><Link to='/prescription'> <div class="btn-bg bg-1">
        <div class="btn btn-1"><button>Prescription</button></div>
    </div></Link></li>


      <li><Link to='/monitoring'> <div class="btn-bg bg-1">
        <div class="btn btn-1"><button>Patient Monitoring</button></div>
    </div></Link></li>
    
    <li><Link to='/'><div id="login-button">
  <img className='man' src='/imgs/welcome_icon.png' alt='entree_logo' />
  
  </div>
  </Link> </li>

      
      </ul>

  </div>
  )
}

export default Nav