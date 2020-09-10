import React from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import MainPage from "./pages/MainPage";
import Logout from "./pages/Logout";
import ShowPatient from "./pages/ShowPatient";
import PatientLogin from "./pages/PatientLogin";
import registerPatient from './pages/registerPatient';
import FindPatient from './pages/FindPatient';


const App = () => {
  return (
    <div>
      <Route exact path="/" component={MainPage} />
      <Route path="/Logout" component={Logout} />
      <Route path="/PatientLogin" component={PatientLogin} />
      <Route path="/ShowPatient" component={ShowPatient} />
      <Route path="/FindPatient/:subject/:gender" component={ShowPatient} />
      <Route path="/registerPatient" component={registerPatient} />
      <Route exact path="/FindPatient" component={FindPatient} />


    </div>
  )
}

export default App;
