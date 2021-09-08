import React from 'react';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import './App.css';
import Home from './components/pages/Home.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ClinicServices from './components/pages/ClinicServices.js';
import HomeServices from './components/pages/HomeServices.js';
import OnlineServices from './components/pages/OnlineServices.js';
import Adoptpet from './components/pages/Adoptpet.js';
import Rehomepet from './components/pages/Rehomepet.js';
import AboutUs from './components/pages/AboutUs.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/cservices' component={ClinicServices} />
          <Route path='/hservices' component={HomeServices} />
          <Route path='/oservices' component={OnlineServices} />
          <Route path='/adoptpet' component={Adoptpet} />
          <Route path='/rehomepet' component={Rehomepet} />
          <Route path='/about-us' component={AboutUs} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;