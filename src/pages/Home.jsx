import React from 'react'
import Hero from './sections/Hero'
import AboutPreview from './sections/AboutPreview'
import ProjectsShowcase from './sections/ProjectsShowcase'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <AboutPreview></AboutPreview>
      <ProjectsShowcase></ProjectsShowcase>
    </div>
  )
}

export default Home