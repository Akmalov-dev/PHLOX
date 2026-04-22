import React from 'react'
import '../home/home.css'
import Headphone from '../home/images/headphone.png'
import Earphone from '../home/images/earphone.png'
import Watch from '../home/images/watch.png'
import Laptop from '../home/images/bac.png'
import Console from '../home/images/console.png'
import Oculus from '../home/images/oculus.png'
import Speaker from '../home/images/speaker.png'
import Shipping from '../home/images/shipping.jpg'
import Warranty from '../home/images/warranty.avif'
import Support from '../home/images/support.png'
import Wallet from '../home/images/wallet.png'
import HD from '../home/images/headphonemid.png'
import Bestseller1 from '../home/images/best seller 1.png'
import Watch1 from '../home/images/watchfooter.png'
import Gadget from '../home/images/gadgets.webp'

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

      {/* ending products */}

      <div className='add'>
        <div className='shipping'>
          <div>
            <img className='img-shipping' src={Shipping} alt="" />
          </div>
          <div className='shipping-fonts'>
            <p className='f-shipping'>Free Shipping</p>
            <p className='f-shipping2'>Free shipping in all order</p>
          </div>
        </div>

        <div className='shipping'>
          <div>
            <img className='img-shipping' src={Warranty} alt="" />
          </div>
          <div className='shipping-fonts'>
            <p className='f-shipping'>Money Guarantee</p>
            <p className='f-shipping2'>30 day money back</p>
          </div>
        </div>

            <div className='shipping'>
          <div>
            <img className='img-shipping' src={Support} alt="" />
          </div>
          <div className='shipping-fonts'>
            <p className='f-shipping'>Online Support 24/7</p>
            <p className='f-shipping2'>Technical support</p>
          </div>
        </div>

          <div className='shipping'>
          <div>
            <img className='img-wallet' src={Wallet} alt="" />
          </div>
          <div className='shipping-fonts'>
            <p className='f-shipping'>Secure Payment</p>
            <p className='f-shipping2'>All cards Accepted</p>
          </div>
        </div>
      </div>
       
       {/* next part */}

       <div className='middle-part'>
        <div className='left-fonts'>
          <p className='f-off'>20 % OFF</p>
          <p className='f-fine'>FINE</p>
          <p className='f-smile'>SMILE</p>
          <p className='f-nov'>15 Nov to 7 Dec</p>
        </div>
        <div>
          <img className='img-head' src={HD} alt="" />
        </div>
        <div className='right-fonts'>
          <p className='f-air'>Beats Solo Air</p>
          <p className='f-summer'>Summer Sale</p>
          <p className='f-company'>Company that's grown from 270 to 480 employees in the last 12 months</p>
          <button className='btn-browse2'>Shop</button>
        </div>
       </div>


       <div className='font-best-seller'>
        <p className='f-bestseller'>Best Seller Products</p>
       <p className='f-passages'>speaker There are many variations passages</p>
       </div>


       <div className='best-seller-products'>
        <div>
          <img className='bs1' src={Bestseller1} alt="" />
          <p className='f-beat'>Beats</p>
          <p className='price'>$995</p>
        </div>
             <div>
          <img className='bs1' src={Bestseller1} alt="" />
          <p className='f-beat'>Beats</p>
          <p className='price'>$995</p>
        </div>
             <div>
          <img className='bs1' src={Bestseller1} alt="" />
          <p className='f-beat'>Beats</p>
          <p className='price'>$995</p>
        </div>
             <div>
          <img className='bs1' src={Bestseller1} alt="" />
          <p className='f-beat'>Beats</p>
          <p className='price'>$995</p>
        </div>
       </div>

           <div className='best-seller-products'>
        <div>
          <img className='bs1' src={Bestseller1} alt="" />
          <p className='f-beat'>Beats</p>
          <p className='price'>$995</p>
        </div>
             <div>
          <img className='bs1' src={Bestseller1} alt="" />
          <p className='f-beat'>Beats</p>
          <p className='price'>$995</p>
        </div>
             <div>
          <img className='bs1' src={Bestseller1} alt="" />
          <p className='f-beat'>Beats</p>
          <p className='price'>$995</p>
        </div>
             <div>
          <img className='bs1' src={Bestseller1} alt="" />
          <p className='f-beat'>Beats</p>
          <p className='price'>$995</p>
        </div>
       </div>

      {/* before footer part */}


       <div className='middle-part1'>
        <div className='left-fonts'>
          <p className='f-off'>20 % OFF</p>
          <p className='f-fine'>HAPPY</p>
          <p className='f-smile'>HOURS</p>
          <p className='f-nov'>15 Nov to 7 Dec</p>
        </div>
        <div>
          <img className='img-watch1' src={Watch1} alt="" />
        </div>
        <div className='right-fonts'>
          <p className='f-air'>Beats Solo Air</p>
          <p className='f-summer'>Summer Sale</p>
          <p className='f-company'>Company that's grown from 270 to 480 employees in the last 12 months</p>
          <button className='btn-browse3'>Shop</button>
        </div>
       </div>


       <div className='font-best-seller'>
        <p className='f-bestseller1'>Recent News</p>
       <p className='f-passages'>There are many variations passages</p>
       </div>
       
       <div className='recent-news'>
          <div className='first-new'>
            <img className='gadgets' src={Gadget} alt="" />
            <p className='f-date'>October 5, 2019 by Paul</p>
            <p className='f-gadgets'>How to choose perfect gadgets</p>
            <p className='f-when'>when while the lovely valley teems with vapour around me and the meridian sun strikers the upper s ...</p>
          </div>

             <div className='first-new'>
            <img className='gadgets' src={Gadget} alt="" />
            <p className='f-date'>October 5, 2019 by Paul</p>
            <p className='f-gadgets'>How to choose perfect gadgets</p>
            <p className='f-when'>when while the lovely valley teems with vapour around me and the meridian sun strikers the upper s ...</p>
          </div>

             <div className='first-new'>
            <img className='gadgets' src={Gadget} alt="" />
            <p className='f-date'>October 5, 2019 by Paul</p>
            <p className='f-gadgets'>How to choose perfect gadgets</p>
            <p className='f-when'>when while the lovely valley teems with vapour around me and the meridian sun strikers the upper s ...</p>
          </div>
       </div>

       <div className='blue'></div>

       {/* footer finally */}

       <div className='footer'>
            <div className='left-side-footer'>
              <p className='logo'>PHLOX</p>
              <p className='f-lorem'>There are many variations passages of lorem ipsum available. but the majority have</p>
            </div>
       </div>
    </>
  )
}

export default home 