import React from 'react'
import '../home/home.css'
import Headphone from '../home/images/headphone.png'
import Earphone from '../home/images/earphone.png'
import Watch from '../home/images/watch.png'
import Laptop from '../home/images/bac.png'
import Console from '../home/images/console.png'
import Oculus from '../home/images/oculus.png'
import Speaker from '../home/images/speaker.png'

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
        <div className='watch'>
            <div className='font-header'>
              <p className='f-enjoy'>now</p>
              <p className='f-with'>Wear</p>
              <p className='f-glasses'>GLASSES</p>
              <button className='btn-browse1'>Browse</button>
            </div>
            <div>
              <img className='img-watch' src={Watch} alt="" />
            </div>
        </div>
        <div className='laptop'>
          <div className='laptop-fonts'>
            <p className='f-enjoy'>Trend</p>
            <p className='f-with'>Devices</p>
            <p className='f-glasses'>LAPTOP</p>
            <button className='btn-browse2'>Browse</button>
          </div>
          <div>
            <img className='img-laptop' src={Laptop} alt="" />
          </div>
        </div>
       </div>

       {/* continue products */}
       <div className='products'>
          <div className='console'>
              <div className='laptop-fonts'>
                <p className='f-enjoy'>Best</p>
                <p className='f-with'>Gaming</p>
                <p className='f-glasses'>CONSOLE</p>
                <button className='btn-browse3'>Browse</button>
              </div>
              <div>
                <img className='img-laptop' src={Console} alt="" />
              </div>
          </div>

          <div className='vr'>
            <div className='font-header-oculus'>
               <p className='f-enjoy'>Play</p>
               <p className='f-with'>Game</p>
               <p className='f-glasses'>OCULUS</p>
               <button className='btn-browse4'>Browse</button>
            </div>
            <div>
              <img className='img-oculus' src={Oculus} alt="" />
            </div>
          </div>

          <div className='speaker'>
             <div className='font-header-speaker'>
              <p className='f-enjoy'>New</p>
              <p className='f-with'>Amazon</p>
              <p className='f-glasses'>SPEAKER</p>
              <button className='btn-browse5'>Browse</button>
             </div>
             <div>
              <img className='img-speaker' src={Speaker} alt="" />
             </div>
          </div>
       </div>
    </>
  )
}

export default home