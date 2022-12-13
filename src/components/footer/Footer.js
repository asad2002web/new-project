import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="footer-main">
                <div className="footer-left">
                    <div className="footer-logo">
                       <img src="images/logo-nav.png" alt=""/> 
                       <p>
                             We are always open to discuss your project and <br/> improve your online presence.
                       </p>
                    </div>
                    <div className="footer-contact-body">
                        <div className="footer-contact-left">
                            <h6>Email me at</h6>
                            <p>contact@website.com</p>
                        </div>
                        <div className="footer-contact-left">
                            <h6>Call us</h6>
                            <p>0927 6277 28525</p>
                        </div>
                    </div>
                </div>
                <div className="footer-right">
                    <h2>Lets Talk!</h2>
                    <p>We are always open to discuss your project,<br/> improve your online presence and help with your <br/> UX/UI design challenges.</p>
                    <i className="fa-brands media-fb fa-facebook"></i>
                    <i className="fa-brands media-link fa-square-twitter"></i>
                    <i className="fa-brands media-link fa-instagram"></i>
                    <i className="fa-brands media-link fa-linkedin"></i>
                </div>
            </div>
        </div>
        <div className="white">
            <div className="container">
                <div className="footer-menu">
                    <p>Copyright 2022, Finsweet.com</p>
                    <ul>
                        <Link to={'/'} className="footer-link">Home</Link>
                        <Link to={'/about'} className="footer-link">About us</Link>
                        <Link to={'/features'} className="footer-link">Features</Link>
                        <Link to={'/pricing'} className="footer-link">Pricing</Link>
                        <Link to={'/faq'} className="footer-link">FAQ</Link>
                        <Link to={'/blog'} className="footer-link">Blog</Link>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer