import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Monitoring from './components/Monitoring'
import Prescription from './components/Prescription'
import Welcome from './components/Welcome'
import './App.css'

const App = () => {
  return (
    <div className='body'> 
    
  <div className="starsec"></div>
  <div className="starthird"></div>
  <div className="starfourth"></div>
  <div className="starfifth"></div>
    
      <Switch>     
        <Route path='/monitoring' component={Monitoring} />
        <Route path='/prescription' component={Prescription} />
        <Route exact path='/' component={Welcome} />
      </Switch>
    </div>
  )
}

export default App
