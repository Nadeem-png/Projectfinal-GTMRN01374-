import React from 'react'




export default function Header() {
  return (
  
    <div className='bg'>
     <div className='container-fluid '>
     <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
      <a class="navbar-brand font-weight-bold" href="#">TravelYarri</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto ">
        <li class="nav-item ">
          <a class="nav-link active font-weight-bold" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Team</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link font-weight-bold " href="#" tabindex="-1" aria-disabled="true">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item ms-5">
          <a class="nav-link" href="#">SignIn</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SignOut</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

     </div>

    </div>
  )
}
