import React from 'react'
import './Hero2.css'
import rat from './Group 152.png'
import rati from './Group 152 (1).png'
import box1 from './Group 158.png'
import box2 from './Group 321.png'
import box3 from './Group 322.png'

const Hero2 = () => {
  return (
    <div className='hero2'>
      
<div className='hero2-left'>

<h2>How we support our partner all over the world</h2>

<p>SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software</p>

<div className='rating'>

<div className='rating-left'>
<img src={rat} alt=''/>

<h3>4.9 /<span> 5 rating</span></h3>
<h4>databricks</h4>

</div>

<div className='rating-right'>
<img src={rati} alt=''/>
<h3>4.8 /<span> 5 rating </span></h3>
<h4>chainalysis</h4>
</div>

</div>

</div>

<div className='hero2-right'>

<div className='box'>
<img src={box1} alt=''/>
<div className='box-img'>
   
    <h2>Publishing</h2>
    <p>Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd</p>
</div>

</div>

<div className='box'>
<img src={box2} alt=''/>
<div className='box-img'>
   
    <h2>Publishing</h2>
    <p>Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd</p>
</div>

</div>

<div className='box'>
<img src={box3} alt=''/>
<div className='box-img'>
   
    <h2>Publishing</h2>
    <p>Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd</p>
</div>

</div>

</div>

</div>


  )
}

export default Hero2
