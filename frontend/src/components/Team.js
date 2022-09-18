import React from 'react'
import * as axios from 'axios';

import team1 from '../asset/images/team1.jpg';
import team2 from '../asset/images/team2.jpg';

import team3 from '../asset/images/team3.jpg'


export default function Team() {
  const[team,setTeam]=React.useState(null)
 
    axios.get('http://localhost:8000/api/team')
        .then(responce => setTeam(responce.data))
        .catch(error =>console.log(JSON.stringify(error)))
  return (
    
    <div className='container'>
      {/* {
        team.map((data)=>(
        ))
      } */}
      {JSON.stringify({team})}
    <h3 className='contact text-center py-3 '>OUR Team</h3>
    <h2 className='heading text-center '>MEET OUR TEAM</h2>
    <div className='row'>
      <div className='col-lg col-sm-12 col-md-6'>
    <div class="container">
    <div class="content">
      <div class="content-overlay"></div>
      <img class="content-image" src={team1}/>
      <div class="content-details fadeIn-top fadeIn-left">
        <h5>This is a title</h5>
        <p>This is a short description</p>
      </div>
    
  </div>
</div>
<h5 className='text-center heading5'>STEVEN ROGERS</h5>
<h5 className='text-center heading6 '>FOUNDER</h5>
<p className='para1team text-center' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>


      </div>
      <div className='col-lg col-sm-12 col-md-6'>
    
    <div class="container">
      <div class="content">
      
          <div class="content-overlay"></div>
          <img class="content-image" src={team2}/>
          <div class="content-details fadeIn-top fadeIn-left">
            <h3>This is a title</h3>
            <p>This is a short description</p>
          </div>
        
      </div>
    </div>
    <h5 className='text-center heading5'>NATASHA</h5>
<h5 className='text-center heading6 '>MANAGER</h5>
<p className='para1team text-center' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
          <div className='col-lg col-sm-12 col-md-6'>
    
    <div class="container">
      <div class="content">
      
          <div class="content-overlay"></div>
          <img class="content-image" src={team3}/>
          <div class="content-details fadeIn-top fadeIn-left">
            <h3>This is a title</h3>
            <p>This is a short description</p>
          </div>
        
      </div>
    </div>
    <h5 className='text-center heading5'>WANDA MAXIMOFF</h5>
<h5 className='text-center heading6 '>ASSISTANT MANAGER</h5>
<p className='para1team text-center' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>


          </div>
    </div>
    </div>
  )
}
