import React from "react"
import MealItYourWay from "../MealItYourWay.jpg"
import "./projects.css"
const Projects = () => {
  return (
    <div>
      <h1 className="projectsHeader">Projects</h1>
      <div className="projectContainer">
        <img
          alt="MealItYourWay Snapshot"
          className="mealProject"
          src={MealItYourWay}
        ></img>
        <section className="mealProjectBody">
          <h3 className="mealProjectHeader">Meal It, Your Way</h3>
          <p>Techologies Used: Figma</p>
          <p>
            Technologies to be Used: React, Google Places API, PostgreSQL,
            Massive
          </p>
          <p>
            I had a blast designing the UX and UI of Meal It Your Way. While it
            is still in its design phase, this app is going to be an alternative
            to Uber Eats and Door Dash. Mostly to challenge myself and to build
            something I can be proud of.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Projects