import React from 'react';
import '../App.css';
import './Stepsadopt.css';
import './Cards.css'

function Stepsadopt() {
  return (
    <div className='grid'>
      <div className='steps-container'>
        <h1>Your Pet Adoption Journey with PetVet</h1>
        <div className='step'>
        <h3><i class="fa fa-search" aria-hidden="false"></i>Search</h3>
        <p>Adopt a dog or cat who's right for you. Simply enter your city above to start your search.</p>
        </div>
        <div className='step'>
            <h3><i class="fa fa-refresh" aria-hidden="true"></i>Connect</h3>
            <p>Once you find a pet, click "show number" to get contact info for their pet parent or rescue. Contact them to learn more about how to meet and adopt the pet.</p>
        </div>
        <div className='step'>
            <h3><i class="fa fa-heart" aria-hidden="true"></i>AdoptLove</h3>
            <p>The rescue or pet parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.</p>
        </div>
        <div className='step'>
            <h3><i class="fa fa-user-plus" aria-hidden="true"></i>Free Vet Consultation</h3>
            <p>PetVet will help your pet to settle down in its new home, once you complete the Adoption journey reach out to us for free vet consultation.</p>
        </div>
      </div>
      <div className='searchpet'>
      <form className="row g-3">
        <div className="col-12">
          <label for="pettype">What pet do you want to adopt ?</label>
            <div className="optioninline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                <label classNamw="form-check-label" for="inlineRadio1">Dog</label>
            </div>
            <div className="optioninline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
              <label className="form-check-label" for="inlineRadio2">Cat</label>
            </div>                                          
        </div>
           <br></br>
          <div className="col-md-6">
            <label for="city">City</label>
            <input type="textt" id="city" name="cityname" placeholder=" "/>
          </div>

          <a href='E:\reactapp\minipro\src\form.js' target='blank' >
          <button type="submitt" className="btn btn-success">Find a pet</button>
          </a>
      </form> 
      </div>
    </div>
  );
}

export default Stepsadopt;