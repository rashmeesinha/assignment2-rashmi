import React from 'react'

import './Footer.css'
import LogoWhite from './logo-white.svg'

function Footer() {
  return (
    <div className='footer-container'>
        <div className="child-footer">
        <img   src={LogoWhite}></img>
        </div>
        
       <div className='child-footer'>
       <div className='child'>
            <div className='title'>Overview</div>
            <p>Why Marvel</p>
            <p>Enterprise</p>
            <p>Pricing</p>
            <p>Request a demo</p>
            <p>Explore</p>
            <p>Apps</p>
            <p>Developer API</p>
        </div>
        <div className='child'>
            <div className='title'>Features</div>
            <p>Wireframing</p>
            <p>Design</p>
            <p>Prototyping</p>
            <p>Collaboration</p>
            <p>Handoff</p>
            <p>Integrations</p>
            <p>Sketch Plugin</p>
        </div>
       </div>
       <div className='child-footer'>
       <div className='child'>
            <div className='title'>Support</div>
            <p>Help Center</p>
            <p>Terms of Service</p>
            <p>Security</p>
            <p>Privacy</p>
        </div>
        <div className='child'>
            <div className='title'>Marvel</div>
            <p>Blog</p>
            <p>Our Team</p>
            <p>Contact Us</p>
            <p>Success Stories</p>
            <p>Brand Guidelines</p>
            
        </div>
       </div>
       <div className='child-footer'>
       <div className='child'>
            <div className='title'>Follow</div>
            <p>Twitter</p>
            <p>Dribbble</p>
            <p>Facebook</p>
            <p>Github</p>
            <p>Workable</p>
        </div>
        </div>
        
    </div>
  )
}

export default Footer