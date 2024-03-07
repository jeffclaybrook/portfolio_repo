import { useState } from "react"
import styled from "styled-components"

const FORM_ENDPOINT = process.env.REACT_APP_HEROTOFU_ENDPOINT!

const Contact = () => {
 const [submitted, setSubmitted] = useState(false)

 const handleSubmit = (e: any) => {
  e.preventDefault()
  const inputs = e.target.elements
  const data: any = {}
  for (let i = 0; i < inputs.length; i++) {
   if (inputs[i].name) {
    data[inputs[i].name] = inputs[i].value
   }
  }
  fetch(FORM_ENDPOINT, {
   method: "POST",
   headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
   },
   body: JSON.stringify(data)
  })
  .then((res) => {
   if (!res.ok) {
    throw new Error("Error submitting form")
   }
   setSubmitted(true)
  })
  .catch((err: any) => {
   console.log(err)
   e.target.submit()
  })
 }

 if (submitted) {
  console.log("Form successfully submitted")
 }

 return (
  <Form
   action={FORM_ENDPOINT}
   onSubmit={handleSubmit}
   method="POST"
   acceptCharset="UTF-8"
  >
   <Control>
    <Input
     id="name"
     name="Name"
     type="text"
     placeholder="Name"
     required
    />
   </Control>
   <Control>
    <Input
     id="email"
     name="Email"
     type="email"
     placeholder="Email"
     required
    />
   </Control>
   <Control>
    <Textarea
     id="message"
     name="Message"
     placeholder="Message"
     required
    />
   </Control>
   <Button>Submit</Button>
  </Form>
 )
}

export default Contact

const Form = styled.form`
 max-inline-size: 500px;
 inline-size: 100%;
 margin-inline: auto;
`

const Control = styled.div`
 display: block;
 position: relative;
 min-block-size: 4em;
 margin-block-end: 1em;
`

const Input = styled.input`
 display: block;
 block-size: 3.75em;
 inline-size: 100%;
 padding: .75em .75em .875em;
 letter-spacing: .015em;
 font-size: 1em;
 font-weight: 450;
 border: 1.5px solid #bdc8cf;
 border-radius: .325em;

 &:focus {
  border: 1.5px solid #465e8a;

  & + label {
   color: #465e8a;
   inset-block-start: -.725em;
   inset-inline-start: .65em;
   font-size: .7em;
   font-weight: 450;
  }
 }

 &:not(:placeholder-shown) {
  & + label {
   inset-block-start: -.725em;
   inset-inline-start: .65em;
   font-size: .7em;
   font-weight: 450;
  }
 }
`

const Textarea = styled.textarea`
 display: block;
 block-size: 10em;
 inline-size: 100%;
 padding: .75em .75em .875em;
 letter-spacing: .015em;
 font-size: 1em;
 font-weight: 450;
 border: 1.5px solid #bdc8cf;
 border-radius: .325em;

 &:focus {
  border: 1.5px solid #465e8a;

  & + label {
   color: #465e8a;
   inset-block-start: -.725em;
   inset-inline-start: .65em;
   font-size: .7em;
   font-weight: 450;
  }
 }

 &:not(:placeholder-shown) {
  & + label {
   inset-block-start: -.725em;
   inset-inline-start: .65em;
   font-size: .7em;
   font-weight: 450;
  }
 }
`

const Button = styled.button`
 display: block;
 text-align: center;
 margin-inline: auto;
 font-size: 1.0875em;
 color: #f9fcff;
 text-transform: uppercase;
 letter-spacing: .015em;
 background: #465e8a;
 border: 1px solid #465e8a;
 border-radius: .325em;
 font-weight: 450;
 padding: .65em 1.25em;
 transition: background-color .15s linear, border-color .15s linear;

 &:hover {
  background-color: #7991c0;
  border-color: #7991c0;
  color: #ffffff;
 }
`