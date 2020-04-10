import React from "react"
import { Formik, Form, useField } from "formik"
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

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
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
          name: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),
          message: Yup.string().required("Required"),
        })}
        // onSubmit={(values, { setSubmitting }) => {
        //   setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2))
        //     setSubmitting(false)
        //   }, 400)
        // }}
        onSubmit={(values, actions) => {
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...values }),
          })
            .then(() => {
              alert("Success")
              actions.resetForm()
            })
            .catch(() => {
              alert("Error")
            })
            .finally(() => actions.setSubmitting(false))
        }}
      >
        <Form name="contact" data-netlify={true} netlify-honeypot="bot-field">
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
            name="message"
            placeholder="type a message"
          />
          <button type="submit">Submit</button>
        </Form>
        {/* <form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          method="POST"
        > */}
        {/* <MyTextInput name="bot-field" type="hidden" /> */}

        {/* <input name="bot-field" type="hidden" />
          <label htmlFor="name">Name</label>
          <input className="textInput" name="name" />
          <label htmlFor="email">Email</label>
          <input className="textInput" name="email" />
          <label htmlFor="message">Message</label>
          <textarea className="textArea" name="message" />
          <button type="submit">Submit</button>
        </form> */}
      </Formik>
    </>
  )
}

export default SignupForm
