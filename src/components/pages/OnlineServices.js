import React from 'react';
import '../../App.css';
import Cards from '../Cards.js';

export default function OnlineServices() {
  return( 
    <>
  <div className='oservices'>
    <div className="os-hero-card card">
      <div className="card-body">
        <h1>Get expert veterinary advice from the comfort of your home</h1>
        <p>Take online vet consultation over chat, audio, & video calls.</p>
      </div>
    </div>
  </div>
  <Cards />
  </>);
}