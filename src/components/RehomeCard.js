import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function RehomeCards() {
    return(
    <>
    <div className='container' id='form'>
        <div className='row'>
            <div className='col-6'>
                <div className='cards'>
                    <h1>Pet Details</h1>
                    <form className="row g-3">
                        <div className="col-md-6">
                        <label for="fname">Pet's Name</label>
                        <input type="textt" id="fname" name="firstname" placeholder="Pet's name.."/>
                        </div>

                        <div className="col-12">
                            <label for="pettype">Pet Type</label>
                            <div className="optioninline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label classNamw="form-check-label" for="inlineRadio1">Dog</label>
                                </div>
                                <div className="optioninline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label className="form-check-label" for="inlineRadio2">Cat</label>
                                </div>                                          
                        </div>

                        <div className="col-12">
                        <label for="petbreed">Pet Breed</label>
                        <input type="textt" id="petbreed" name="pbreed" placeholder="Your pet's breed.."/>
                        </div>

                        <div className="col-md-6">
                        <label for="petage">Pet's Age</label>
                        <input type="textt" id="petage" name="page" placeholder="Age in month or year.."/>
                        </div>

                        <div className="col-md-6">
                        <label for="petgender">Pet's Gender</label>
                        <div className="optioninline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label classNamw="form-check-label" for="inlineRadio1">Male</label>
                                </div>
                                <div className="optioninline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label className="form-check-label" for="inlineRadio2">Female</label>
                                </div> 
                        </div>

                        <div className="col-md-6">
                        <label for="petchild">Is the pet good with kids ?</label>
                        <div className="optioninline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label classNamw="form-check-label" for="inlineRadio1">Yes</label>
                                </div>
                                <div className="optioninline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label className="form-check-label" for="inlineRadio2">No</label>
                                </div> 
                        </div>

                        <div className="col-md-6">
                        <label for="petother">Is the pet good with other pets ?</label>
                        <div className="optioninline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label classNamw="form-check-label" for="inlineRadio1">Yes</label>
                                </div>
                                <div className="optioninline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label className="form-check-label" for="inlineRadio2">No</label>
                                </div> 
                        </div>

                        <div className="col-md-6">
                        <label for="petvaccine">Is the pet vaccinated ?</label>
                        <div className="optioninline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label classNamw="form-check-label" for="inlineRadio1">Yes</label>
                                </div>
                                <div className="optioninline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label className="form-check-label" for="inlineRadio2">No</label>
                                </div> 
                        </div>

                        <div className="col-md-6">
                        <label for="petnur">Is the pet nurtured ?</label>
                        <div className="optioninline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label classNamw="form-check-label" for="inlineRadio1">Yes</label>
                                </div>
                                <div className="optioninline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label className="form-check-label" for="inlineRadio2">No</label>
                                </div> 
                        </div>

                        <div className="col-md-6">
                        <label for="contact">Contact No.</label>
                        <input type="textt" id="contact" name="cnum" placeholder="+91"/>
                        </div>
            
                        <div className="col-md-6">
                        <label for="city">City</label>
                        <input type="textt" id="city" name="cityname" placeholder=" "/>
                        </div>

                        <div className="col-md-6">
                        <label for="petprob">Why do you want to donate the pet ?</label>
                        <textarea id="petprob" name="problem" placeholder="....."></textarea>
                        </div>

                    
                        <a href='E:\reactapp\minipro\src\form.js' target='blank' >
                        <button type="submitt" className="btn btn-success">Find a new home</button>
                        </a>
                    

                    </form> 
                </div>
            </div>
      
        </div>
    </div>
    </>
    );
}

export default RehomeCards;