import React from 'react'
import Photo from '../ProfilePicture.jpg'
import './aboutme.css'

const AboutMe = () => {
  return (
    <div>
      <img className="photo" alt="Ty Everton" src={Photo} />
      <section>
        <h3 className="aboutMeIntro">
          I am Ty Everton, and I am a Web Developer.
        </h3>
        <p className="aboutMeBody">About Me Body</p>
      </section>
    </div>
  )
}

export default AboutMe
