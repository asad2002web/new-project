import React from 'react'
import Group from '../components/about-group/Group'
import Goal from '../components/about-goal/Goal'
import Process from '../components/about-process/Process'
import Inspire from '../components/about-inspire/Inspire'
import Benifits from '../components/about-benifits/Benifits'
import Meet from '../components/about-meet/Meet'



const About = () => {
  return (
    <>
        <Group/>
        <Goal/>
        <Process/>
        <Inspire/>
        <Benifits/>
        <Meet/>
    </>
    
  )
}

export default About