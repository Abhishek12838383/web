import React from 'react'
import './Nav.css'
import logo from './Biccas.png'

const Nav = () => {
  return (
    <div className='nav'>

      <div className='logo'>
        <img src={logo} alt=''/>
      </div>

      <div className='nav-links'>
<ul>
    <li>Home</li>
    <li>Product</li>
    <li>FAQ</li>
    <li>Blog</li>
    <li>About Us</li>
</ul>
      </div>

      <div className='nav-btn'>
<div className='login'>
Login
</div>

<div className='sign'>
    Sign Up
</div>
      </div>
    </div>
  )
}

export default Nav
