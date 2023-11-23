import React from 'react'
import "./About.scss"
import SailingClub from './SailingClub/SailingClub'
import Interior from './Interior/Interior'
import And from './And/And'
import Members from './Members/Members'

function About() {
  return (
    <div className='About'>
      <SailingClub/>
      <Interior/>
      <And/>
      <Members/>
    </div>
  )
}

export default About