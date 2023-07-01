import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const para = useParams();
    const {name} = para;
  return (
    <>
      <h1>Hello User {name}</h1>
    </>
  )
}
