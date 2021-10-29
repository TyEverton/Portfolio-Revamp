import React from 'react'
import './projects.css'
import MealItYourWay from '../MealItYourWay.jpg'
import GoogleProject from "../GoogleProject.jpg"




const Projects = () => {
  return (
    <div>
      <h1 className="projectsHeader">Projects</h1>
      <div className="projectContainer">
        <section className="mealProjectBody">
          <img
            alt="MealItYourWay Snippet"
            className="mealPhoto"
            src={MealItYourWay}
          ></img>
          <h3 className="mealProjectHeader">Meal It, Your Way</h3>
          <section className="mealItSummary">
            <p>Techologies Used: Figma</p>
            <p>
              Technologies to be Used: React, Google Places API, PostgreSQL,
              Massive
            </p>
            <p></p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/TyEverton/Meal_It_Your_Way"
            >
              Github
            </a>
          </section>
        </section>
        <section className="googleCloneProjectBody">
          <img
            alt="Google Clone Snippet"
            className="googleClonePhoto"
            src={GoogleProject}
          />
          <h3 className="googleCloneHeader">Google Clone</h3>
          <section className="googleCloneSummary">
            <p>Technologies Used: React, CSS, HTML</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/TyEverton/Google_Clone"
            >
              Github
              </a>

          </section>
        </section>
      </div>
    </div>
  )
}

export default Projects
