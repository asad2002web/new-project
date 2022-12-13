import React from 'react'
import Bunner from '../components/bunner/Bunner'
import Work from '../components/work/Work'
import Projects from '../components/projects/Projects'
import Features from '../components/features/Features'
import Client from '../components/client/Client'
import Form from '../components/form/Form'
import Blog from '../components/blog/Blog'

const Home = () => {
  return (
    <>
        <Bunner/>
        <Work/>
        <Projects/>
        <Features/>
        <Client/>
        <Form/>
        <Blog/>
    </>
  )
}

export default Home