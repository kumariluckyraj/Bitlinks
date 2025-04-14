import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div>
      <footer id="contact" className='footer'style={{display:'flex',justifyContent:'center',paddingLeft:'10em'}}>
        <div>
        <h1 style={{fontWeight:'bold',fontSize:'30px'}}>Contact</h1>
        <p className='mt-7'><span style={{fontWeight:'bold'}}>Phone Number: </span>1872347641</p>
        <p className='mt-4'><span style={{fontWeight:'bold'}}>Email:</span> bitlinks@123</p>
        
        
            <p className='mt-28 '>
                &copy; 2025 Bitlinks: All rights reserved.
            </p>
        </div>
        
      </footer>
    </div>
  )
}

export default Footer
