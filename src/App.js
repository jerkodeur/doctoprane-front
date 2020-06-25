import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage.js';
import MonitoringPage from './components/MonitoringPage';
import PrescriptionPage from './components/PrescriptionPage';
import PatientPage from './components/PatientPage'
import SelectPatientList from './components/SelectPatientList'

function App() {
  return (
    <>
    <SelectPatientList doctor_id="1" />
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/doctor_monitoring" component={MonitoringPage} />
        <Route path="/doctor_prescription" component={PrescriptionPage} />
        <Route path="/patient" component={PatientPage} />
      </Switch>
    </Router>
    </>
  )
}

export default App;
