import React from 'react'
import './About.css'
import me from '../../assets/me.jpg'

const About = () => {
  return (
    <div id='about' className='aboutCont'>
      <header className='headerCont'>
        <h1 className='headerTitleCont'>About Me</h1>
      </header>
      <section className='about-container'>
        <div className='aboutInfo'>
          <h1 className='aboutT'>I have recently graduated from Trinity College Dublin as a mature student with a Joint Honours degree in Computer Science and Linguistics.
            <br></br>
            <br></br>
            As I previously worked as a language teacher I am interested in speech and language technology. However, over the last 4 years I have developed an interest in designing and working on software projects.
          </h1>
          <img className="me" src={me} />
        </div>
      </section>
    </div>
  )
}

export default About