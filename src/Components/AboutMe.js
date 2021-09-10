import React from 'react'
import Photo from '../ProfilePicture.jpg'
import './aboutme.css'

const AboutMe = () => {
  return (
    <div>
      <img className="photo" alt="Ty Everton" src={Photo} />
      <section>
        <h3 className="aboutMeIntro">Hello.</h3>
        <h3 className="nameIntro">
          I am Ty Everton, and I am a Web Developer.
        </h3>
        <h3 className="aboutMeHeader">About Me</h3>
        <p className="aboutMeBody">
          I am a Web Developer based in Pleasant Grove, UT. My passion for Web
          Development began near the beginning of the COVID-19 Pandemic. After
          finding Devmountain, I decided to dive head first following my leave
          of sales. I graduated Devmountain's Web Development bootcamp September
          3rd and I am actively looking for work.
        </p>
      </section>
    </div>
  )
}

export default AboutMe
