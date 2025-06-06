import React, { useState } from 'react'
import './Portfolio3.css'

const Portfolio3 = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (projectName) => {
    if (expandedProject === projectName) {
      setExpandedProject(null);
    } else {
      setExpandedProject(projectName);
    }
  };

  const projects = [
    {
      name: 'WayHome Mobile Application',
      description: 'This is a mobile house searching application which blends movement and real estate. The user can create routes, and as they move the application will log houses within a set radius. ',
      technologies: ['React Native', 'Django', 'Python', 'Firebase Databases', 'Firebase Authentication', 'SQLite', 'Google Maps API', 'Node.js'],
    },
    {
      name: 'An Irish Language TTS Model',
      description: 'I researched, developed and evaluated a Child TTS Model using a low-resource language; Irish Gaeilge. The project involved extensive research into speech synthesis and it was built in conjunction with Abair, the leading Irish speech technology department at Trinity College Dublin. The paper written about the project was recently accepted to be presented at the UKIS (UK and Irish Speech) conference 2025.',
      technologies: ['Piper End-to-End TTS Model', 'Python', 'Huggingface', 'Audio Recording Equipment' ],
    },
    {
      name: 'E-Paper Weather Station',
      description: 'I built myself a framed weather app using a Raspberry Pi and an E-paper screen. The app calls a weather API every hour and updates the screen with an up-to-date weather forcast. The Display is designed to be accessible and attractive.',
      technologies: ['Raspberry Pi', 'Python', 'Pillow', 'Open Weather API', 'E-paper Display' ],
    },
    {
      name: 'Tech Marketplace Website',
      description: 'I designed and built an online shop selling tech equipment. The website was built as part of a group project utilising and building on skills we have learnt.',
      technologies: ['Java', 'Springboot', 'React', 'Maven', 'H2 Database', 'Google Authentication System' ],
    },
  ];

  return (
    <div id='portfolio' className='container'>
      <header className='header'>
        <h1 className='headerTitle'>My Portfolio</h1>
      </header>
      <section className='projects-container'>
        {projects.map((project) => (
          <article 
            key={project.name} 
            className={`project ${expandedProject === project.name ? 'expanded' : ''}`}
            onClick={() => toggleProject(project.name)}
          >
            <div className='but'>
              <h2 className='project-t'>
                {project.name}
              </h2>
              <div className="triangle-down" id="tri"></div>
            </div>
            <div className='project-content'>
              <p className='project-description'>{project.description}</p>
              <div className='project-technologies'>
                <h3>Technologies Used:</h3>
                <ul>
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Portfolio3
