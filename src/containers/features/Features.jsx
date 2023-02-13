import React from 'react'
import "./features.css"
import data from './feature-data'
import { Feature } from '../../components'

function Features() {

  const featuresData = data.map(item => {
    return (
      <Feature key={item.id} {...item} />
    )
  })

  return (
    <div className='features section-padding' id='features'>
      <div className='features-heading'>
        <h1 className='gradient-text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='features-container'>
          {featuresData}
      </div>
    </div>
  )
}

export default Features