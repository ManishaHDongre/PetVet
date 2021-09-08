import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>

      <h1>Pet Vet</h1>
      <p>We are here for you</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Contact Us <i className="fas fa-phone-square-alt"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;