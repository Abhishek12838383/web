import React from 'react'
import './Offers.css'
import tick from './Group 108.png'

const Offers = () => {
  return (
    <div className='offer'> 
      <div className='offer-title'>Buisness</div>

<p>Have a go and test your superpowers</p>

<div className='ooffer'>
<h5>$</h5>
<h4>16</h4>
</div>

<div className='offer-box'>

<div className='box-1'> <img src={tick} alt=''/>All the features of pro plan</div>
<div className='box-1'> <img src={tick} alt=''/>Account Success manager</div>
<div className='box-1'> <img src={tick} alt=''/>Single sign on SSO</div>
<div className='box-1'> <img src={tick} alt=''/>Co- conception program</div>
<div className='box-1'> <img src={tick} alt=''/>Collaboration program</div>

<div className='offer-btn'> Goto Buisness</div>

</div>
    </div>
  )
}

export default Offers
