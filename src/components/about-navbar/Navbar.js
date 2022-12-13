import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <header>
    <nav className="nav-about">
        <div className="container">
            <div className="main">
                <div className="logo">
                    <img src="images/logo-nav.png" alt="logo"/>
                </div>
                <div className="menu">
                    <ul>
                        <Link to="/" className='menu-link'>Home</Link>
                        <Link to="/about" className='menu-link'>About us</Link>
                        <Link to="/features" className='menu-link'>Features</Link>
                        <Link to="/pricing" className='menu-link'>Pricing</Link>
                        <Link to="/faq" className='menu-link'>FAQ</Link>
                        <Link to="/blog" className='menu-link'>Blog</Link>
                    </ul>
                    <Link to="/contact" className='contact-us'>Contact us</Link>
                </div>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Navbar