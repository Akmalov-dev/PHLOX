import React from 'react'
import { Link } from 'react-router-dom'
import '../Header/header.css'

const header = () => {
  return (
    <>
       <div className='header-links'>
          <div>
            <p className='logo'>PHLOX</p>
          </div>
          <div className='links'>
            <Link to="/home">Home</Link>
            <Link to="/courses">Shop</Link>
            <Link to="/mylearning">About us</Link>
            <Link to="/subscribe">blog</Link>
          </div>
          <div className='left-side'>
            <input className='search' type="search" placeholder='search' />
            <button className='btn-login'>Login</button>
          </div>
       </div>
    </>
  )
}

export default header