import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import './contactform.css'

function ContactForm() {
  const [state, handleSubmit] = useForm('xrgrrjee')
  if (state.succeeded) {
    return <p>Thank you for your message, I will get back to you shortly!</p>
  }
  return (
    <div className="formContainer">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input id="name" type="name" name="name" placeholder="Name" />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />{' '}
        <br />
        <label htmlFor="email"></label>
        <br />
        <input id="email" type="email" name="email" placeholder="Email" />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />{' '}
        <br />
        <label htmlFor="message"></label>
        <br />
        <textarea
          cols="22"
          rows="5"
          id="message"
          name="message"
          placeholder="Message"
          className="textArea"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />{' '}
        <br />
        <button className="submitBtn" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
