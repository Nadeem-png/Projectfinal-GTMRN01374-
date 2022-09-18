import React from 'react'

export default function Contact() {
  return (
    <div className='container'>
      <h3 className='contact text-center py-3 '>Contact</h3>
      <h2 className='heading text-center text-white'>GET INTO TOUCH</h2>
      <form className='container'>
        <div className='row'>
          <div className='col-lg-6 '>
            <input type='text' required placeholder='Name' className='input1 form-control mb-4'/>
          </div>
          <div className='col-lg-6'>
          <input type='text' required placeholder='SurName' className='input1 form-control mb-4'/>

          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6 '>
            <input type='email' required placeholder='Email' className='input1 form-control mb-4'/>
          </div>
          <div className='col-lg-6'>
          <input type='number' required placeholder='Phone Number' className='input1 form-control mb-4'/>

          </div>
        </div>
         <textarea type='address' placeholder='Type Message' className='form-control mb-4   ' cols={5} rows={5}/>
      <button className='btn btn-outline-success font-weight-bold   py-3 btn1 form-control text-white'>submit</button>
      </form>

    </div>
  )
}
