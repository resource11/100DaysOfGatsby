import React from "react"
import { Formik, Form, useField } from "formik"
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
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

// const StyledLabel = styled.label`
//   margin-top: 1rem;
// `

const SignupForm = () => {
  // const formik = useFormik({
  //   initialValues: { email: "" },
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2))
  //   },
  // })

  return (
    <>
      <h2>Subscribe!</h2>
      {/* Formik component is a React Context-powered Component. 
      It connects the state/methods from the Formik component 
      to the Form and other components */}
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),
        })}
        // onSubmit={(values, { setSubmitting }) => {
        //   setTimeout(() => {
        //     alert(JSON.stringify(values, null, 2))
        //     setSubmitting(false)
        //   }, 400)
        // }}

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
                alert(JSON.stringify(values, null, 2))
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
        {/* You do not need to pass in onSubmit handler since 
        the provider passes it in. What about the post method and action, though? */}
        {/* <Form> */}
        <form
          // {...rest}
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          method="POST"
          onSubmit={Formik.handleSubmit}
          action="#"
        >
          {/* <input type="hidden" name="bot-field" /> */}
          <MyTextInput name="bot-field" type="hidden" />
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <button type="submit">Submit</button>
        </form>
        {/* </Form> */}
      </Formik>
    </>
  )
}

export default SignupForm
