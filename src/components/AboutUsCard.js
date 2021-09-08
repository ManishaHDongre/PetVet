import React from 'react';
import '../App.css';
import './AboutUsCard.css'

function AboutUsCard() {
  return (
      <div className='aboutus'>
          <div className='desc'>
          <h1 className='about-us'>ABOUT US</h1>
            <div className='lines'>PETVET is an Online Petcare Marketplace which connects Pet Parents to the people who treat their Pets Like Family</div>
            <br></br>
            
            <br></br>
            <div className='lines'>From choosing the right pet to adopt, to its veterinary care, PetVet provides various services for pet care. </div> 
            <div className='lines'>We have vet on call for online consultation or home services and booking appointments with the veterinarian.</div>
            <br></br>
            <div className='lines'>Contact us - 9335437288</div>
            <div className='lines'>Drop a mail - support@petvet.org</div>
          </div>
      </div>
  );
}

export default AboutUsCard;