import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <h2 className='intro'>Hi, my name is</h2>
        <h1 className='name'>Robert Kay.</h1>
        <h1 className='title'>A Computer Science and Linguistics Graduate</h1>

        <button className="button"><span className='buttonText'><AnchorLink className='anchor-link-con' href='#portfolio'>My Work</AnchorLink></span></button>

    </div>
  )
}

export default Hero