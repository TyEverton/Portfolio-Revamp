import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
import './contactform.css'

function ContactForm() {
  const [state, handleSubmit] = useForm('xrgrrjee')
  if (state.succeeded) {
    return <p>I look forward to your message. I will reply shortly!</p>
  }
  return (
    <div>
      <h1 className="contactHeader">Contact Me</h1>
      <section className="formContainer">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"></label>
          <input
            id="name"
            type="name"
            name="name"
            placeholder="Name*"
            className="input"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />{' '}
          <br />
          <label htmlFor="email"></label>
          <br />
          <input id="email" type="email" name="email" placeholder="Email*" className="input" />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />{' '}
          <br />
          <label htmlFor="message"></label>
          <br />
          <textarea
            cols="25"
            rows="8"
            id="message"
            name="message"
            placeholder="Message*"
            className="textArea"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />{' '}
          <br />
          <button
            className="submitBtn"
            type="submit"
            disabled={state.submitting}
          >
            SEND
          </button>
        </form>
      </section>
    </div>
  )
}

export default ContactForm
