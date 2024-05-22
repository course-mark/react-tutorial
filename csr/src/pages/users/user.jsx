import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const parameters = useParams()

  return (
    <div>UserId : {parameters.id}</div>
  )
}

export default User