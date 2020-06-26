import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage.js';
import MonitoringPage from './components/MonitoringPage';
import PrescriptionPage from './components/PrescriptionPage';
import PatientPage from './components/PatientPage';



function App() {
  return (
    <>
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