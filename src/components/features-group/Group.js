import React from 'react'
import './group.css'

const Group = () => {
  return (
    <div className="group-study">
        <div className="container">
            <div className="group-discus">
                <div className="group-left">
                    <div className="group-ab">
                        <p>Use Client-first</p>
                    </div>
                    <h3>Top agencies and freelancers</h3>
                    <h3>
                        around the world use
                    </h3>
                    <h3> Client-first</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/> do eiusmod tempor incididunt ut labore et dolore magna <br/> aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
                <div className="group-right">
                    <img src="images/top-agency.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Group