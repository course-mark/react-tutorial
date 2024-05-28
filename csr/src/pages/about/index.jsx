import React from 'react'
import { Outlet } from 'react-router-dom'
import { SimpleLayout } from '../../layouts/SimpleLayout'
import UserForm from '../../components/UserForm'

function About() {
  return (
    <SimpleLayout>
        <UserForm/>
    </SimpleLayout>
  )
}

export default About