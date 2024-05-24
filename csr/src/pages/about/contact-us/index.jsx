import React, { useState } from 'react'
import { SimpleLayout } from '../../../layouts/SimpleLayout'

function ContactUs() {

  const [name, setName] = useState(localStorage.getItem('name') || '')
  const [email, setEmail] = useState( localStorage.getItem('email') || '')
  const [message, setMessage] = useState( localStorage.getItem('message') || '')

  // useMemo
  

  return (
    <SimpleLayout>
      <label>
        Name:
        <input type="text" value={name} onChange={e => {
          setName(e.target.value)
          localStorage.setItem('name', e.target.value)
        }} />
      </label>
      <label>
        Email:
        <input type="text" value={email} onChange={e => {
          setEmail(e.target.value)
          localStorage.setItem('email', e.target.value)
        }} />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={e => {
          setMessage(e.target.value)
          localStorage.setItem('message', e.target.value)
        }} />
      </label>

      {/* sample ui */}

      <h1>Contact Us</h1>
      <p>
        If you have any questions, please feel free to contact us.
      </p>

      <button onClick={() => {
        console.log({ name, email, message })
      }
      }>
        Submit
      </button>
    </SimpleLayout>
  )
}

export default ContactUs