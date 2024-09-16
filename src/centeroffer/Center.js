import React from 'react'
import './Center.css'
import tick from './Group 108.png'

const Center = () => {
  return (
    <div className='center'> 
      <div className='center-title'>Pro</div>

<p>Exepriment the power of infinte possibilities</p>

<div className='ccenter'>
<h5>$</h5>
<h4>16</h4>
</div>

<div className='center-box'>

<div className='boxx-1'> <img src={tick} alt=''/>All the features of pro plan</div>
<div className='boxx-1'> <img src={tick} alt=''/>Account Success manager</div>
<div className='boxx-1'> <img src={tick} alt=''/>Single sign on SSO</div>
<div className='boxx-1'> <img src={tick} alt=''/>Co- conception program</div>
<div className='boxx-1'> <img src={tick} alt=''/>Collaboration program</div>

<div className='center-btn'> Goto Buisness</div>

</div>
    </div>
  )
}

export default Center
