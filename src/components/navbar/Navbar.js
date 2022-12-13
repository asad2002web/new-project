import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <header>
    <nav className="nav">
        <div className="container">
            <div className="main">
                <div className="logo">
                    <img src="images/logo-nav.png" alt="logo"/>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About us</a></li>
                        <li><a href="features.html">Features</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="work.html">FAQ</a></li>
                        <li><a href="blog.html">Blog</a></li>
                    </ul>
                    <a className="contact-us" href="contact.html">Contact us</a>
                </div>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Navbar