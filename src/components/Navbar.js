import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 800) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar navbar-collapse'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo navbar-brand' onClick={closeMobileMenu}>
           Pet<i className='fas fa-stethoscope' />et
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active navbar-collapse' : 'nav-menu'}>
            <li className='nav-item'>
              <Link 
                to='/' 
                className='nav-links' 
                onClick={closeMobileMenu}
              >
              <i className="fa fa-fw fa-home"></i>
                Home
              </Link>
            </li>
            
            <li className="nav-item dropdown" id='drop'>
              <a className="nav-links nav-link dropdown-toggle">
              <i className="fas fa-fw fa-hand-holding-medical"></i>
               Services
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className="dropdown-content">
                   <Link to='/oservices' className="dropdown-item" onClick={closeMobileMenu}>Online service</Link>
                  <Link to='/hservices' className="dropdown-item" onClick={closeMobileMenu}>Home service</Link>
                   <Link to='/cservices' className="dropdown-item" onClick={closeMobileMenu}>Clinic service</Link>
                  </div>
              </div>
            </li>

            <li className='nav-item' id='drop1'>
              <Link
                to='/adoptpet'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              <i className="fas fa-fw fa-hand-holding"></i>
                Adopt Pet
              </Link>
            </li>
            
            <li className='nav-item' id='drop1'>
              <Link
                to='/rehomepet'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              <i className="fas fa-fw fa-dog"></i>
                Rehome Pet
              </Link>
            </li>

            <li className='nav-item' id='drop1'>
              <Link
                to='/about-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               About Us
              </Link>
            </li>
          </ul>
          </div>
      </nav>
    </>
  );
}

export default Navbar;