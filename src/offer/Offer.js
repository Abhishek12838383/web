import React from 'react'
import './Offer.css'
import tick from './Group 108.png'

const Offer = () => {
  return (
    <div className='offer'>
      
<div className='offer-title'>Free</div>

<p>Have a go and test your superpowers</p>

<div className='ooffer'>
<h5>$</h5>
<h4>0</h4>
</div>

<div className='offer-box'>

<div className='box-1'> <img src={tick} alt=''/>2 Users</div>
<div className='box-1'> <img src={tick} alt=''/>2 Files</div>
<div className='box-1'> <img src={tick} alt=''/>Public share and comments</div>
<div className='box-1'> <img src={tick} alt=''/>Chat Support</div>
<div className='box-1'> <img src={tick} alt=''/>New income apps</div>

<div className='offer-btn'> Sign up for free</div>

</div>

    </div>
  )
}

export default Offer
