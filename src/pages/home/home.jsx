import React from 'react'
import '../home/home.css'
import Headphone from '../home/images/headphone.png'
import Earphone from '../home/images/earphone.png'

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

      {/* PHLOX */}

      
      <div className='products'>
        <div className='earphone'>
          <div className='font-header'>
            <p className='f-enjoy'>Enjoy</p>
            <p className='f-with'>With</p>
            <p className='f-earphone'>EARPHONE</p>
            <button className='btn-browse'>Browse</button>
          </div>
          <div>
            <img className='img-earphone' src={Earphone} alt="" />
          </div>
        </div>
        <div className='watch'></div>
        <div className='devices'></div>
       </div>
    </>
  )
}

export default home