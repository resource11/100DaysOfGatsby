import React from "react"
import { Formik, useField } from "formik"
import * as Yup from "yup"

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="textInput" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

const MyTextArea = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className="textArea" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

const SignupForm = () => {
  // handleSubmit = (e) => {
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "contact", ...values }),
  //   })
  //     .then(() => alert("Success!"))
  //     .catch((error) => alert(error))

  //   e.preventDefault()
  // }

  return (
    <>
      <h2>Subscribe!</h2>
      {/* Formik component is a React Context-powered Component. 
      It connects the state/methods from the Formik component 
      to the Form and other components */}

      <form
        name="contact"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="POST"
        // action="/success"
      >
        {/* <MyTextInput name="bot-field" type="hidden" /> */}

        <input name="bot-field" type="hidden" />
        <label htmlFor="name">Name</label>
        <input className="textInput" name="name" />
        <label htmlFor="email">Email</label>
        <input className="textInput" name="email" />
        <label htmlFor="message">Message</label>
        <textarea className="textArea" name="message" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default SignupForm
