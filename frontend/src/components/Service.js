import React from 'react';
import img1 from '../asset/images/img1.jpg';
import img2 from '../asset/images/img9.jpg'
import img3 from '../asset/images/img10.jpg'



export default function Service() {
  return (
    <div className='container'>
    <h3 className='contact text-center py-3 '>OUR SERVICES</h3>
    <h2 className='heading text-center '>POPULAR TOURS</h2>
    <div className='row mb-4'>
     <div className='col-lg-4 col-sm-12 col-md-6 mb-3'>
     <div class="card">
  <img src={img1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 className='serviceh mb-2'>TOURS IN PARIS</h3>
    <p class="card-text  mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ipsa ducimus labore perferendis reiciendis quasi..</p>
     <button className='btn  text-white font-weight-bold px-4 py-2 rounded-pill mb-3' style={{backgroundColor:"#f60"}}>BOOK NOW</button>
  </div>
     </div>
        </div>

        <div className='col-lg-4 col-sm-12 col-md-6 mb-3'>
     <div class="card">
  <img src={img2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 className='serviceh mb-2'>TOURS IN PARIS</h3>
    <p class="card-text  mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ipsa ducimus labore perferendis reiciendis quasi..</p>
     <button className='btn  text-white font-weight-bold px-4 py-2 rounded-pill mb-3' style={{backgroundColor:"#f60"}}>BOOK NOW</button>
  </div>
     </div>
        </div>

        <div className='col-lg-4 col-sm-12 col-md-6 mb-3'>
     <div class="card">
  <img src={img3} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h3 className='serviceh mb-2'>TOURS IN PARIS</h3>
    <p class="card-text  mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ipsa ducimus labore perferendis reiciendis quasi..</p>
     <button className='btn  text-white font-weight-bold px-4 py-2 rounded-pill mb-3' style={{backgroundColor:"#f60"}}>BOOK NOW</button>
  </div>
     </div>
        </div>

     </div>
    </div>
    
  );
}
