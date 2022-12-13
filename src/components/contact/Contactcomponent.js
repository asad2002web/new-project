import React from 'react'
import './contact.css'

const Contactcomponent = () => {
  return (
    <section className="contact-head">
        <div classname="container">
            <div classname="main-contact">
                <div classname="contact-top">
                    <div classname="contact-heading">
                        <h2>Contact Us</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut labore.
                        </p>
                    </div>
                    <div classname="contact-form">
                        <div classname="contact-form-details">
                            <div classname="first">
                                <div classname="label-1">
                                    <label>Name</label><br/>
                                    <input type="text" placeholder="Enter your name"/>
                                </div>
                                <div classname="label-2">
                                    <label>Email</label><br/>
                                    <input type="email" placeholder="Enter your name"/>
                                </div>
                            </div>
                            <div classname="sceond">
                                <div classname="label-3">
                                    <label>Subject</label><br/>
                                    <input type="text" placeholder="Provide context"/>
                                </div>
                                <div classname="label-4">
                                    <label>Subject</label><br/>
                                    <input type="text" placeholder="Select Subject"/>
                                </div>
                            </div>
                            <div classname="area">
                                <h3>Message</h3>
                                <textarea  cols="140" rows="8"></textarea>
                            </div>
                        </div>
                        <div classname="send-msg">
                            <a href="#">Send Message</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contactcomponent