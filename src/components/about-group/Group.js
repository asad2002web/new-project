import React from 'react'
import './group.css'

const Group = () => {
  return (
    <div className="group-study">
        <div className="container">
            <div className="group-discus">
                <div className="group-left">
                    <div className="group-ab">
                        <p>About us</p>
                    </div>
                    <h1>
                        Our designs <br/> solve problems
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/> do eiusmod tempor incididunt ut labore et dolore magna <br/> aliqua. Ut enim ad minim veniam.
                    </p>
                </div>
                <div className="group-right">
                    <img src="images/group.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Group