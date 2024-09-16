import React from 'react'
import './Footer.css'
import line from './Group 212.png'
import group from './Group 245.png'
import form from './Group 223.png'
import logo from './Biccas.png'
import arrow from './Group 324.png'

const Footer = () => {
  return (
    <div className='footer'>
      
{/* footer-1 */}
      <div className='footer-1'>

<div className='footer-1-left'>
<div className='footer-1-title'>
People are Saying About DoWihth
</div>

<p>Everything you need to accept to payment and grow your money of manage anywhere on planet</p>

<img src={line} alt=''/>

<p>I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍</p>

<h5>_Aria Zinario</h5>

<img src={group} alt=''/>

</div>

<div className='footer-1-right'>
<img src={form} alt=''/>

<div className='email'>
<h4>Email</h4>

<input type='email' placeholder='Enter Your Email'/>
</div>

<div className='msg'>
<h4>Message</h4>

<input type='text' placeholder='What are you say?'/>
</div>

<div className='demo'>
    Request Demo
</div>

<h3>or start free trail</h3>

</div>

      </div>


      {/* footer-2 */}
      <div className='footer-2'>

<div className='footer-2-left'>
<img src={logo} alt=''/>

<h4>Get started neow try our product</h4>

<div className='footer-input'>

<input type='text' placeholder='Enter your email here'/>
<img src={arrow} alt=''/>
</div>


</div>

<div className='footer-2-right'>

<ul>
    <li>Support</li>
    <li>Help Center</li>
    <li>Account information</li>
    <li>About</li>
    <li> Contact us</li>

</ul>

<ul>
    <li>Help and Solution</li>
    <li>Talk to support</li>
    <li>Support docs</li>
    <li>System status</li>
    <li> Covid responde</li>

</ul>

<ul>
    <li>Product</li>
    <li>Update</li>
    <li>Security</li>
    <li>Beta test</li>
    <li>Pricing product</li>

</ul>

</div>

      </div>

      <div className='copyright'>
<h3>© 2022 Biccas Inc. Copyright and rights reserved</h3>
<h4>Terms and Condtions |  Privacy Policy</h4>
      </div>

    </div>
  )
}

export default Footer
