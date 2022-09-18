import React from 'react'
import blog1 from"../asset/images/blog1.jpg"

export default function Blog() {
  return (
    <div className='container'>
    <h3 className='contact text-center py-3 '>BLOGS</h3>
    <h2 className='heading text-center '>LATEST BLOGS</h2>
    <div className='row mb-5'>
      <div className='col-lg col-sm-12 col-md-6 mb-3 '>
      <img src={blog1} alt="Logo"  className='img-fluid '/>
      <h6 className='text-center mt-2 heading2'>LOREM IPSUM DOLOR</h6>
      <p className='paragrph1 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, commodo consequat.</p>
      <div class="text-center">
      <button className='btn btn-danger  px-3 py-2'>Read more</button>
      </div>

      </div>
      <div className='col-lg col-sm-12 col-md-6  mb-3'>
      <img src={blog1} alt="Logo" className='img-fluid  ' />
      <h6 className='text-center mt-2 heading2'>LOREM IPSUM DOLOR</h6>
      <p className='paragrph1 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, commodo consequat.</p>
      <div class="text-center">
      <button className='btn btn-danger  px-3 py-2'>Read more</button>
      </div>

      </div>
      <div className='col-lg col-sm-12 col-md-6  mb-3'>
      <img src={blog1} alt="Logo" className='img-fluid '/>
      <h6 className='text-center mt-2 heading2'>LOREM IPSUM DOLOR</h6>
      <p className='paragrph1 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, commodo consequat.</p>
      <div class="text-center">
      <button className='btn btn-danger  px-3 py-2'>Read more</button>
      </div>      
      </div>
      <div className='col-lg col-sm-12 col-md-6 '>
      <img src={blog1} alt="Logo"className='img-fluid ' />
      <h6 className='text-center mt-2 heading2'>LOREM IPSUM DOLOR</h6>
      <p className='paragrph1 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, commodo consequat.</p>
      <div class="text-center">
      <button className='btn btn-danger  px-3 py-2'>Read more</button>
      </div>
      </div>

    </div>

    </div>
  )
}
