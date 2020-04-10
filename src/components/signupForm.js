import React from "react"
import { Formik, useField } from "formik"
import * as Yup from "yup"
// import styled from "@emotion/styled"
// import "./styles.css"
// import "./styles-custom.css"

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
  return (
    <>
      <h2>Subscribe!</h2>
      {/* Formik component is a React Context-powered Component. 
      It connects the state/methods from the Formik component 
      to the Form and other components */}
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Please enter a name"),
          email: Yup.string().required("Please enter an email address"),
          message: Yup.string().required("Please enter a message"),
        })}
        // used the onSubmit handler from gatsby-theme-getstats
        // here because it works
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const encode = (data) => {
            return Object.keys(data)
              .map(
                (key) =>
                  encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
              )
              .join("&")
          }
          fetch("/?no-cache=1", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...values }),
          })
            .then(() => {
              setTimeout(() => {
                console.log("form details: ", ...values)
                setSubmitting(false)
                resetForm()
              }, 2000)
            })
            .catch((error) => {
              console.log("form error: ", error)
              setSubmitting(false)
            })
        }}
      >
        {/* Using the formik Form component was problematic, so I used a standard JSX form */}
        <form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          method="POST"
          action="/success"
        >
          <MyTextInput name="bot-field" type="hidden" />
          <MyTextInput
            label="Name"
            name="name"
            type="text"
            placeholder="Jane"
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <MyTextArea
            label="Message"
            name="textarea"
            placeholder="enter message"
          />
          <button type="submit">Submit</button>
        </form>
      </Formik>
    </>
  )
}

export default SignupForm
