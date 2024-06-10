import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
         <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">FRIEND APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
          <Link class="nav-link active" aria-current="page" to="/">AddFriend</Link>
          <Link class="nav-link active" aria-current="page" to="/view">ViewAll</Link>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
    </div>
  )
}

export default NavBar