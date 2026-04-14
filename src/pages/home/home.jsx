import React from 'react'
import '../home/home.css'
import Headphone from '../home/images/headphone.png'

const home = () => {
  return (
    <>
      <div className='headphones'>
        <div className='f-header'>
           <p className='f-beats'>Beats Solo</p>
           <p className='f-wireless'>Wireless</p>
           <p className='f-headphone'>HEADPHONE</p>
           <button className='btn-shop'>Shop by category</button>
        </div>
        <div>
          <img className='img-headphone' src={Headphone} alt="" />
        </div>
      </div>
    </>
  )
}

export default home