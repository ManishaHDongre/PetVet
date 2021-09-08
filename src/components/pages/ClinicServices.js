import React from 'react';
import '../../App.css';
import Cards from '../Cards.js'

export default function ClinicServices() {
  return( 
    <>
  <div className='cservices'>
  <div className="os-hero-card card">
      <div className="card-body">
        <h1>CLINIC SERVICES</h1>
        <p>Get your pet checked by expert Veternary Doctors</p>
        <p>Situated In Bangalore</p>
      </div>
    </div>
  </div>
  <Cards />
  </>);
}