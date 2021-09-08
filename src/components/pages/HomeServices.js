import React from 'react';
import '../../App.css';
import Cards from '../Cards.js'

export default function HomeServices() {
  return( 
    <>
  <div className='hservices'>
  <div className="os-hero-card card">
      <div className="card-body">
        <h1>Get Expert Veterinary Care At Home</h1>
        <p>Want your pet checked up at home? Call PetVet Home Services and get the best pet care services at your doorsteps.</p>
      </div>
    </div>
  </div>
  <Cards />
  </>);
}