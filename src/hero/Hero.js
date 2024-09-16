import React from 'react'
import './Hero.css'
import hero from './Group 138.png'
import btn from './Play.png'
import line from './Vector 32.png'

const Hero = () => {
  return (
    <div className='hero'>
      
<div className='hero-left'>

<div className='hero-title'>
We're here to increase your productivity
</div>

<img className='line' src={line} alt=''/>

<div className='hero-description'>
    <p>Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.</p>
</div>

<div className='hero-btn'>

<div className='hero-btn-1'>
Try free trail
</div>

<div className='hero-btn-2'>
 <img src={btn} alt='' />   Try Demo
</div>

</div>

</div>

<div className='hero-right'>
    <img src={hero} alt='hero' />
</div>

    </div>
  )
}

export default Hero
