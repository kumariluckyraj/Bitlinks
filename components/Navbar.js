import React from 'react'
import Link from 'next/link'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="nav" style={{ display: 'flex', justifyContent: 'space-between', padding: '1em 2em', alignItems: 'center',color:'white',fontWeight:'bold' }}>
      <div style={{ fontWeight: 'bolder', fontSize: '1.5em' , color:'white'}}>
        <Link href="/">Bitlinks</Link>
      </div>

      <div style={{ display: 'flex', gap: '3em', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '2em' }}>
          <Link className='link' href="/">Home</Link>
          <Link className='link' href="/about">About</Link>
          <Link  className='link' href="/shorten">Shorten</Link>
          <Link  className='link' href="#contact">Contact Us</Link>
        </div>

        <div style={{ display: 'flex', gap: '1em' }}>
          <Link href="/shorten"><button>Try Now</button></Link>
          <Link href="/github"><button>Github</button></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
