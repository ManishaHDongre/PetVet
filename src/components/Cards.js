import React from 'react';
import './Cards.css';
import {useState} from 'react';
import CardItem from './CardItem';
import Axios from 'axios'


function alertmsg(){
  alert('Your appointment has been booked.')
}
function Cards() {

  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [ptype, setPtype] = useState("");
  const [pbreed, setPbreed] = useState("");
  const [page, setPage] = useState("");
  const [cnum, setCnum] = useState("");
  const [cityname, setCname] = useState("");
  const [problem, setProb] = useState("");

  const add_data = () => {
    Axios.post("http://localhost:3001/add", 
    { firstname: firstname,
      lastname: lastname,
      ptype: ptype,
      pbreed: pbreed,
      page: page,
      cnum: cnum,
      cityname: cityname,
      problem: problem,
    }).then( () => {
      console.log("success");
    });
  };  

 {/* const displayinfo = () => {
    console.log(firstname + lastname + ptype + pbreed + page + cnum + cityname + problem);
  };*/}

  return (
  <>
  <div className='os-page'>
      <h1 id="head" className="headding">SERVICES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <div className='cards'>
          <h1>Fill the details below:</h1>
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="fname">First Name</label>
              <input type="textt" id="fname" placeholder="Your name.." onChange={(event)=>{setFname(event.target.value);}}/>
            </div>

            <div className="col-md-6">
              <label htmlFor="lname">Last Name</label>
              <input type="textt" id="lname" placeholder="Your last name.." onChange={(event)=>{setLname(event.target.value);}}/>
            </div>

            <div className="col-12">
              <label htmlFor="pettype">Pet Type</label>
              <input type="textt" id="pettype" placeholder="Your pet type.." onChange={(event)=>{setPtype(event.target.value);}}/>
            </div>

            <div className="col-12">
             <label htmlFor="petbreed">Pet Breed</label>
             <input type="textt" id="petbreed" placeholder="Your pet's breed.." onChange={(event)=>{setPbreed(event.target.value);}}/>
            </div>

            <div className="col-md-6">
             <label htmlFor="petage">Pet's Age</label>
             <input type="textt" id="petage" placeholder="Age in month or year.." onChange={(event)=>{setPage(event.target.value);}}/>
            </div>

            <div className="col-md-6">
             <label htmlFor="contact">Contact No.</label>
             <input type="textt" id="contact" placeholder="+91" onChange={(event)=>{setCnum(event.target.value);}}/>
            </div>
 
            <div className="col-md-6">
              <label htmlFor="city">City</label>
              <input type="textt" id="city" placeholder=" " onChange={(event)=>{setCname(event.target.value);}}/>
            </div>

            <div className="col-md-6">
              <label htmlFor="petprob">Problem</label>
              <textarea id="petprob" placeholder="Describe.." onChange={(event)=>{setProb(event.target.value);}}></textarea>
            </div>
            
            <button type="submitt" className="btn btn-success" onClick={alertmsg}>Book a Vet</button>
             
        

          </form>
          </div>
          </ul>
          <ul className='cards__items'>
            
          </ul>
        </div>
      </div>
    </div>
</>
  );
}

export default Cards;

