import React from "react"
import "./contactform.css"
import axios from "axios"

function ContactForm() {
  const formId = 'Le4Gefha'
  const formSparkUrl = `https://submit-form.com/${formId}`
  const submitForm = async (event: onCLick) => {
    event.preventDefault()
    await postSubmission()
  }

  const postSubmission = async () => {
    const payload = {
      message: 'Test form submission',
    }
    try {
      const result = await axios.post(formSparkUrl, payload)
      console.log(result)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className="formContainer">
      <svg
        className="formLogo"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
      <span className="contactHeader">Contact Me</span>
      <form onSubmit={submitForm}>
        <button>Submit</button>
      </form>
    </div>
  )
}


export default ContactForm