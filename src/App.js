import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Monitoring from './components/Monitoring'
import Prescription from './components/Prescription'
import Welcome from './components/Welcome'
import './App.css'

const App = () => {
  return (
    <div>     
      <Switch>     
        <Route path='/monitoring' component={Monitoring} />
        <Route path='/prescription' component={Prescription} />
        <Route exact path='/' component={Welcome} />
      </Switch>
      <Nav />
    </div>
  )
}

export default App
